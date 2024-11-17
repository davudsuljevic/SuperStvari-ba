<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "superstvariba@gmail.com"; // Email na koji šaljemo poruku
    $subject = "Nova poruka sa kontakt forme";
    $body = "Ime i prezime: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Poruka:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Ako je poruka poslata uspešno, osveži stranicu
        header("Location: kontakt.html"); 
        exit;
    } else {
        echo "Poruka nije mogla biti poslata.";
    }
}
?>