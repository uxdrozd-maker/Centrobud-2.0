<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$fields = [];
if (isset($_POST['fields']) && is_array($_POST['fields'])) {
    $fields = array_map(
        static function ($value) {
            if (is_array($value)) {
                return implode(', ', array_map('trim', $value));
            }
            return trim((string)$value);
        },
        $_POST['fields']
    );
}

$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$emailTo = 'sklep@centrobud.pl';
$subject = 'Nowe zgloszenie z formularza CentroBud';

$lines = [];
foreach ($fields as $key => $value) {
    $label = str_replace(['_', '%20'], [' ', ' '], (string)$key);
    $label = preg_replace('/\s+/', ' ', $label ?? '');
    $lines[] = sprintf('%s: %s', $label, $value !== '' ? $value : '(brak)');
}
$lines[] = '';
$lines[] = '--- meta ---';
$lines[] = 'Adres IP: ' . $ipAddress;
$lines[] = 'Przegladarka: ' . $userAgent;

$body = implode(PHP_EOL, $lines);

$replyTo = null;
foreach (['Email', 'email', 'Adres email', 'adres email'] as $candidate) {
    if (!array_key_exists($candidate, $fields)) {
        continue;
    }
    $candidateEmail = filter_var($fields[$candidate], FILTER_VALIDATE_EMAIL);
    if ($candidateEmail) {
        $replyTo = $candidateEmail;
        break;
    }
}

$fromDomain = $_SERVER['SERVER_NAME'] ?? 'centrobud.pl';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Formularz Centrobud <no-reply@' . $fromDomain . '>',
];

if ($replyTo) {
    $headers[] = 'Reply-To: ' . $replyTo;
}

$mailSent = @mail($emailTo, $subject, $body, implode("\r\n", $headers));

if (!$mailSent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Nie udalo sie wyslac wiadomosci.']);
    exit;
}

echo json_encode(['success' => true]);
