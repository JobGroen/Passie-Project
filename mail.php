<?php
$name = $_POST['name'];
$tel = $_POST['phone'];
$email = $_POST['email'];
$email = $_POST['phone'];
$message = $_POST['message'];
$subject = $_POST['subject'];

$inputcheck = $name . $message . $subject;

header('Content-Type: application/json');

if ($inputcheck === ''){
    print json_encode(array('message' => 'Niet alle velden zijn ingevuld', 'code' => 0));
    exit();
}

if (!preg_match('/^[A-Za-z0-9.-,-? ]+$/', $inputcheck)) {
    print json_encode(array('message' => 'De velden bevatten niet toegestane symbolen', 'code' => 0));
    exit();
} 

if ($name === ''){
    print json_encode(array('message' => 'Vul a.u.b Uw naam in', 'code' => 0));
    exit();
}

if ($email === ''){
    print json_encode(array('message' => 'Vul a.u.b Uw E-mail in', 'code' => 0));
    exit();
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Vul a.u.b Uw E-mail correct in', 'code' => 0));
        exit();
    }
}

if ($subject === ''){
    print json_encode(array('message' => 'Voer a.u.b een onderwerp in', 'code' => 0));
    exit();
}

if ($message === ''){
    print json_encode(array('message' => 'Voeg a.u.b een bericht toe', 'code' => 0));
    exit();
}
$sender = "info@soundbike.nl";
$content="From: $name \nEmail: $email \nMessage: $message";
$recipient = "jobgroen98@gmail.com";
$mailheader = "From: $sender \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Uw e-mail is verzonden!', 'code' => 1));
exit();
?>