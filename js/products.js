document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('#produkt .grid');
    if (!productsContainer) {
        console.error('Products container (#produkt .grid) not found!');
        return;
    }

    console.log('Fetching products.csv...');
    fetch('products.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(csvText => {
            const products = parseCSV(csvText);
            if (products.length === 0) {
                console.warn('No products found in CSV.');
                return;
            }

            const groupedProducts = groupProducts(products);
            renderProducts(groupedProducts, productsContainer);
        })
        .catch(error => {
            console.error('Error loading products:', error);
            productsContainer.innerHTML = `<div class="w-form-fail" style="display:block;">Error loading products: ${error.message}<br>Make sure you are running this on a server (e.g., Laragon, Localhost) or have CORS enabled.</div>`;
        });
});

function parseCSV(text) {
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    const lines = text.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return [];
    const headers = lines[0].split(',').map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = [];
        let currentValue = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') { inQuotes = !inQuotes; }
            else if (char === ',' && !inQuotes) { values.push(currentValue.trim()); currentValue = ''; }
            else { currentValue += char; }
        }
        values.push(currentValue.trim());
        const entry = {};
        headers.forEach((header, index) => {
            const val = values[index] || '';
            entry[header] = val.replace(/^"|"$/g, '');
        });
        return entry;
    });
}

function groupProducts(products) {
    const groups = {};
    products.forEach(p => {
        if (!p.group_id) return;
        if (!groups[p.group_id]) groups[p.group_id] = [];
        groups[p.group_id].push(p);
    });
    return groups;
}

function renderProducts(groupedProducts, container) {
    container.innerHTML = '';

    Object.keys(groupedProducts).forEach(groupId => {
        const allRows = groupedProducts[groupId];

        // Group by Variant Label within this Product Card
        const variants = {};
        allRows.forEach(row => {
            if (!variants[row.variant_label]) {
                variants[row.variant_label] = [];
            }
            variants[row.variant_label].push(row);
        });

        const variantKeys = Object.keys(variants);
        const mainProduct = allRows[0]; // Image and Title source

        // Calculate Default Variant Index
        // If any row has is_default=1, that variant is default.
        let defaultVariantIndex = 0;
        variantKeys.forEach((key, index) => {
            if (variants[key].some(r => r.is_default === '1')) {
                defaultVariantIndex = index;
            }
        });

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // 1. Labels HTML
        let labelsHtml = '';
        variantKeys.forEach((key, index) => {
            const isActive = index === defaultVariantIndex ? 'active' : '';
            if (variants[key].length > 0) {
                labelsHtml += `<div class="label-text bold ${isActive}" data-group="${groupId}" data-variant="${key}">${key}</div>`;
            }
        });

        // 2. Details HTML (One wrapper per Variant)
        let detailsHtml = '';
        variantKeys.forEach((key, index) => {
            const rows = variants[key];
            const isActive = index === defaultVariantIndex ? 'active' : '';

            // Generate Options for Dropdown
            // Sort by thickness maybe? (Assuming they come sorted or we sort them)
            // rows.sort((a,b) => parseFloat(a.thickness) - parseFloat(b.thickness));

            let optionsHtml = '';
            rows.forEach((r, i) => {
                // Use data-price attribute to store price
                optionsHtml += `<option value="${r.thickness}" data-price="${r.price}">${r.thickness} mm</option>`;
            });

            const initialPrice = rows[0].price;

            detailsHtml += `
            <div class="wrapeer-detail ${isActive}" data-group="${groupId}" data-variant="${key}">
                <div class="info">
                    <div class="text-2">Grubość:</div>
                    <select class="thickness-select w-select" style="margin-bottom:0; height:auto; padding:4px;">
                        ${optionsHtml}
                    </select>
                </div>
                <div class="info">
                    <div class="text-2">Netto za m2<br /></div>
                    <div class="text-2 bold price-display">${initialPrice}</div>
                </div>
            </div>`;
        });

        productCard.innerHTML = `
            <div class="product-image_wrapper">
                <img src="${mainProduct.image}" loading="lazy" alt="${mainProduct.product_name}" class="product-image" />
            </div>
            <div class="card_content">
                <div class="label-wrapper">
                    ${labelsHtml}
                </div>
                <div class="content_info">
                    <div class="product_title">${mainProduct.product_name}</div>
                    ${detailsHtml}
                </div>
                <div class="actions">
                    <a href="#form-section" class="button blue">
                        <div class="button-text white">Zapytaj o ofertę</div>
                        <img src="images/chevron_right.svg" loading="lazy" width="24" height="24" alt="" class="chevron_right" />
                    </a>
                </div>
            </div>
        `;

        container.appendChild(productCard);
    });

    setupInteractions(container);
}

function setupInteractions(container) {
    // 1. Label/Tab switching
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('label-text')) {
            const label = e.target;
            const group = label.dataset.group;
            const variant = label.dataset.variant;

            const card = label.closest('.product-card');
            const allLabels = card.querySelectorAll(`.label-text[data-group="${group}"]`);
            const allDetails = card.querySelectorAll(`.wrapeer-detail[data-group="${group}"]`);

            allLabels.forEach(l => l.classList.remove('active'));
            allDetails.forEach(d => d.classList.remove('active'));

            label.classList.add('active');
            const targetDetail = card.querySelector(`.wrapeer-detail[data-group="${group}"][data-variant="${variant}"]`);
            if (targetDetail) targetDetail.classList.add('active');
        }
    });

    // 2. Dropdown change
    container.addEventListener('change', (e) => {
        if (e.target.classList.contains('thickness-select')) {
            const select = e.target;
            const selectedOption = select.options[select.selectedIndex];
            const price = selectedOption.dataset.price;

            // Find price display in this wrapper
            const wrapper = select.closest('.wrapeer-detail');
            const priceDisplay = wrapper.querySelector('.price-display');
            if (priceDisplay) {
                priceDisplay.textContent = price;
            }
        }
    });
}
