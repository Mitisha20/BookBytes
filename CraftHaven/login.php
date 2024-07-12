<?php
// Handle user login
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate login credentials
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Retrieve user data from the database (assuming you have a MySQL connection)
    // Example query: SELECT * FROM users WHERE username='$username'
    
    // Compare hashed password
    // Example: if (password_verify($password, $hashedPasswordFromDatabase)) { /* Login successful */ }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form method="post" action="login.php">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>
