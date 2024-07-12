<?php
$server='localhost';
$username='root';
$password='';

$con=mysqli_connect($server,$username,$password);

if(!$con){
    die('connection failed');
}
echo "successful";
/*$ArtisanID = $_POST['ArtisanID'];
$Name = $_POST['Name'];
$Bio = $_POST['Bio'];
$ContactInfo = $_POST['ContactInfo'];
$ProfilePic = $_POST['ProfilePic'];
$sql = "INSERT INTO `api_data`.`artisans table` (`ArtisanID`, `Name`, `Bio`, `ContactInfo`, `ProfilePic`) VALUES ('$ArtisanID', '$Name', '$Bio', '$ContactInfo', '$ProfilePic']";
echo $sql;
if($con->query($sql)==true){
  echo "successfully inserted";
}
else{
  echo "error";
}
$con ->close();*/
?>





<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CraftHaven</title>
  <link rel="stylesheet" href="artisans.css">
</head>
<body>
  <header>
   <div class="navbar">
<p><h1>CraftHaven</h1></p>

<ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="artisans.html">Artisans</a></li>
      <li><a href="product.html">Products</a></li>
      <li><a href="checkout.html">Checkout</a></li>
</ul>
<div class="search-container">
  <input type="text" class="search-bar" placeholder="Search...">
  <button type="button" class="search-button">Search</button>
</div>
</div>

</header>
<!--Artisan info-->
  <section class="artisan-information">
    <h2>Artisan Information</h2><hr/><br>
    <div class="name">
        <textarea placeholder=" Artisan's Name"></textarea>
    </div>
    <div class="bio">
        <textarea placeholder="Artisan Bio"></textarea>
    </div>
    <div class="contact-info">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Social Media Links">
    </div>
    <p>Upload profile picture.</p><br>
    <div class="profile-picture">
        <input type="file" id="profile-upload" accept="image/*" onchange="previewImage(event)">
    </div>
    <?php include 'artisans.php'; ?>
</section>
<!--portfolio showcase-->
<section class="portfolio-showcase">
  <h2>Portfolio Showcase</h2><br><hr/>
  <div class="craft-gallery">
      <div class="craft-category">
          
          <div class="craft">
              <img src="jewellery1.jpg" alt="Jewelry 1">
              <p>Aesthetic rose gold jewellery set.</p>
              <p>Rs 999.00</p>
          </div>
          <div class="craft">
              <img src="jewellery2.webp" alt="Jewelry 2">
              <p>High quality Kundan Bridal Jewellery Set.</p>
              <p>Rs 1500.00</p>
          </div>
          
      </div>
      <div class="craft-category">
          
          <div class="craft">
              <img src="pottery1.jpg" alt="Pottery 1">
              <p>Blue Pottery Vase.</p>
              <p>Rs 499.00</p>
          </div>
          <div class="craft">
              <img src="pottery2.webp" alt="Pottery 2">
              <p>Floral Tea Pot Set</p>
          </div>
          
      </div>
      
  </div>
</section>
<!--Product management-->
<section class="product-management">
  <h2>Product Management</h2><hr/><br>
  <!-- Add New Product Form -->
  <form id="add-product-form">
      <label for="product-name">Product Name:</label>
      <input type="text" id="product-name" name="product-name" required>
      
      <label for="product-description">Description:</label>
      <textarea id="product-description" name="product-description" required></textarea>
      
      <label for="product-price">Price:</label>
      <input type="number" id="product-price" name="product-price" required>
      
      <label for="product-image">Image:</label>
      <input type="file" id="product-image" name="product-image" accept="image/*" required>
      
      <button type="submit">Add Product</button>
  </form>
  
  <!-- Product List -->
  <div class="product-list">
      <!-- Individual Product -->
      <div class="product">
          <img src="earring.jpg" alt="Product 1">
          <div class="product-info">
              <h3>Earring For Women</h3>
              <p>Latest Stylish Pearl Earrings for Women and Girls.</p>
              <p>Price: Rs 999.00</p>
              <div class="product-actions">
                  <button class="edit-product">Edit</button>
                  <button class="delete-product">Delete</button>
              </div>
          </div>
      </div>
      
  </div>
</section>
<!-- order management -->
<section class="order-management">
  <h2>Order Overview</h2><hr/><br>
  <div class="order-list">
      <!-- Sample Order Overview -->
      <div class="order">
          <p>Order ID: 12345</p>
          <p>Product:Handmade Painting. </p>
          <p>Buyer: Gagan varma</p>
          <p>Status: Processing</p>
          <button class="view-details">View Details</button>
      </div>
      <!-- Add more orders as needed -->
  </div>

  <div id="order-details-modal" class="modal">
      <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Order Details</h2>
          <div class="details">
              <p>Order ID: 12345</p>
              <p>Product: Product Name 1</p>
              <p>Buyer: John Doe</p>
              <p>Status: Processing</p>
              <!-- Add more order details here -->
          </div>
      </div>
  </div>
</section>
<!--interaction features-->
<section class="interaction-features">
    <div class="customer-reviews">
        <h2>Customer Reviews and Ratings</h2><hr/><br>
        <div class="review">
            <div class="rating">⭐⭐⭐⭐</div>
            <p class="comment">"Great product, highly recommended!"</p>
            <p class="customer">- Rahul Singh</p>
        </div><br>
        <div class="rating">⭐⭐⭐</div>
            <p class="comment">"Affordable, good quality product!"</p>
            <p class="customer">- Gurpreet Kaur</p>
        </div>
        <!-- Add more reviews as needed -->
    </div>
    <div class="messaging">
        <h2>Chat with artisans!</h2><hr/><br>
        <div id="chat-messages" class="chat-messages">
            <!-- Chat messages will be displayed here -->
        </div>
        <textarea id="message-input" placeholder="Type your message here"></textarea>
        <button id="send-message-btn">Send</button>
    </div>
</section>
<!-- social proofs-->
<section class="social-proof">
    <div class="testimonials">
        <h2>Testimonials</h2><hr/><br>
        <div class="testimonial">
            <p class="quote">"Absolutely stunning craftsmanship! Couldn't be happier with my purchase."</p>
            <p class="author">- Jessica Joy</p>
        </div>
        <div class="testimonial">
            <p class="quote">"Absolutely blown away by the quality of the artwork I received! Each piece is a true masterpiece that adds a touch of elegance to my home decor. Highly recommend this artist's products to anyone looking for unique and beautiful pieces."</p>
            <p class="author">- Deepika Kakkar</p>
        </div>
        <div class="testimonial">
            <p class="quote">"Vibrant colors and rich textures!"</p>
            <p class="author">- Neha Mehta</p>
        </div>
        <!-- Add more testimonials as needed -->
    </div>
    <div class="badges">
        <h2>Badges/Awards</h2><hr/><br>
        <img src="certificate.png" alt="Certification Badge">
        <p>Certified Artisan</p>
        <!-- Add more badges or awards as needed -->
    </div>
</section>
<!-- promotional features -->
<section class="promotional-features">
    <div class="discounts">
        <h2>Discounts/Promotions</h2><hr/><br>
        <div class="promotion">
            <p class="promotion-title">Limited Time Offer!</p>
            <p class="promotion-details">Get 20% off on all handmade items. Use code HANDMADE20 at checkout.</p>
        </div>
        <!-- Add more promotions as needed -->
    </div>
    <div class="featured-products">
        <h2>Featured Products</h2><hr/><br>
        <div class="product">
            <img src="featuredProduct.webp" alt="Featured Product 1">
            <p class="product-name">Emerald Drops Diamond Setting Statement Necklace.</p>
            <p class="product-price">Rs 4500.00</p>
        </div>
        <div class="product">
            <img src="featuredProduct2.webp" alt="Featured Product 1">
            <p class="product-name">American Diamond Necklace.</p>
            <p class="product-price">Rs 7500.00</p>
        </div>
        <!-- Add more featured products as needed -->
    </div>
</section>

<script src="artisans.js"></script>
  </body>



