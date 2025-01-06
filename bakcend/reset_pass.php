<?php
// Include the database connection script
include 'db_connection.php';

if (isset($_GET['token'])) {
    $token = $_GET['token'];

    // Verify the token in the database
    $stmt = $conn->prepare("SELECT email FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Token is valid, allow the user to reset the password
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $new_password = $_POST['password'];
            $confirm_password = $_POST['confirm_password'];

            // Check if passwords match
            if ($new_password !== $confirm_password) {
                echo "Passwords do not match!";
                exit();
            }

            // Hash the new password
            $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

            // Update the password in the database
            $stmt = $conn->prepare("UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE reset_token = ?");
            $stmt->bind_param("ss", $hashed_password, $token);
            $stmt->execute();

            echo "Your password has been successfully reset. You can now log in with the new password.";
            header("Location: login_page.php"); // Redirect to the login page
            exit();
        }
    } else {
        echo "Invalid or expired token.";
    }

    $stmt->close();
    $conn->close();
}
?>

<!-- Form to enter the new password -->
<form method="POST" action="reset_password.php?token=<?php echo $_GET['token']; ?>">
    <label for="password">Enter your new password:</label>
    <input type="password" name="password" id="password" required>
    <label for="confirm_password">Confirm your new password:</label>
    <input type="password" name="confirm_password" id="confirm_password" required>
    <button type="submit">Reset Password</button>
</form>
