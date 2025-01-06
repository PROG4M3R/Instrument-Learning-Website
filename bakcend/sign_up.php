<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "mukul2511";
$dbname = "mp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone_number = $_POST['phone_number'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Validation: Check if passwords match
if ($password !== $confirm_password) {
    echo "Passwords do not match!";
    exit();  // Stop the script if passwords don't match
}

// Optional: Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// SQL query to insert data into the database
$sql = "INSERT INTO users (first_name, last_name, phone_number, email, password) 
        VALUES ('$first_name', '$last_name', '$phone_number', '$email', '$hashed_password')";

// Execute the query and check if it's successful
if ($conn->query($sql) === TRUE) {
    // Redirect to another page after successful submission
    header("Location: miniproject.html");
    exit(); // Ensure no further code is executed after redirection
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>

