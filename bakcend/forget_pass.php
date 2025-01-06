<?php
// Include the database connection script
include 'db_connection.php'; // Use the same connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email address from the form
    $email = $_POST['email'];

    // Simple email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Prepare the SQL query to check if the email exists
    $stmt = $conn->prepare("SELECT email FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    // Check if the email exists in the database
    if ($stmt->num_rows > 0) {
        // Generate a unique token for the reset password
        $reset_token = bin2hex(random_bytes(50));

        // Save the reset token in the database (add an expiration time, e.g., 1 hour)
        $stmt = $conn->prepare("UPDATE users SET reset_token = ?, reset_token_expiry = NOW() + INTERVAL 1 HOUR WHERE email = ?");
        $stmt->bind_param("ss", $reset_token, $email);
        $stmt->execute();

        // Send the password reset email to the user
        $reset_link = "http://yourwebsite.com/reset_password.php?token=" . $reset_token;
        $subject = "Password Reset Request";
        $message = "To reset your password, click the following link: \n" . $reset_link;
        $headers = "From: no-reply@yourwebsite.com";

        // Send email
        if (mail($email, $subject, $message, $headers)) {
            echo "A password reset link has been sent to your email address.";
        } else {
            echo "Failed to send the password reset email.";
        }
    } else {
        echo "Email not found!";
    }

    // Close connection
    $stmt->close();
    $conn->close();
}
?>
