<?php
// Database connection details
$servername = "localhost"; // or your server address
$username = "root";
$password = "mukul2511";
$dbname = "mp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>

<?php
// Include the database connection script
include 'db_connection.php'; // Make sure this file exists with the same connection code

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Simple email validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Prepare and bind: check if email exists in the database
    $stmt = $conn->prepare("SELECT password FROM sign_in WHERE email = ?");
    $stmt->bind_param("s", $email);

    // Execute the statement
    $stmt->execute();
    $stmt->store_result();
    
    // Check if the email exists
    if ($stmt->num_rows > 0) {
        // Bind the result
        $stmt->bind_result($hashed_password);

        // Fetch the result
        $stmt->fetch();

        // Verify the password against the hashed password stored in the database
        if (password_verify($password, $hashed_password)) {
            echo "Login successful!";
            // You can start a session here if needed (e.g., $_SESSION['user'] = $email)
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "Email not found!";
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
