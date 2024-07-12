<?php
// Handle user registration
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input
    $username = $_POST["username"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password
    
    // Insert user data into the database (assuming you have a MySQL connection)
    // Example query: INSERT INTO users (username, password) VALUES ('$username', '$password')
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
</head>
<body>
    <h2>User Registration</h2>
    <form method="post" action="register.php">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Register</button>
    </form>
</body>
</html>
