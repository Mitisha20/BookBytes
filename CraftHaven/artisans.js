// Function to preview the uploaded image
function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function(){
      var output = document.createElement('img');
      output.src = reader.result;
      output.style.maxWidth = "100%";
      var profilePictureDiv = document.querySelector('.profile-picture');
      profilePictureDiv.innerHTML = "";
      profilePictureDiv.appendChild(output);
  };
  reader.readAsDataURL(event.target.files[0]);
}

// Function to get the bio text
function getBioText() {
  var bioTextArea = document.querySelector('.bio textarea');
  var bioContent = bioTextArea.value;
  return bioContent;
}

// Function to get the email
function getEmail() {
  var emailInput = document.querySelector('.contact-info input[type="text"][placeholder="Email"]');
  var email = emailInput.value;
  return email;
}

// Function to get the social media links
function getSocialMediaLinks() {
  var socialMediaInput = document.querySelector('.contact-info input[type="text"][placeholder="Social Media Links"]');
  var socialMediaLinks = socialMediaInput.value.split(',');
  return socialMediaLinks;
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  var profileUploadInput = document.getElementById('profile-upload');
  profileUploadInput.addEventListener('change', function(event) {
      previewImage(event);
  });

  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', function() {
      var bio = getBioText();
      var email = getEmail();
      var socialMediaLinks = getSocialMediaLinks();

      console.log('Bio:', bio);
      console.log('Email:', email);
      console.log('Social Media Links:', socialMediaLinks);

      
});
  

  var artisanInfoSection = document.querySelector('.artisan-information');
  artisanInfoSection.appendChild(submitButton);
});
//product management
document.addEventListener('DOMContentLoaded', function() {
  // Add Product Form
  var addProductForm = document.getElementById('add-product-form');
  addProductForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      var productName = document.getElementById('product-name').value;
      var productDescription = document.getElementById('product-description').value;
      var productPrice = document.getElementById('product-price').value;
      var productImage = document.getElementById('product-image').files[0];
      
      // Perform validation here if needed
      
      // Create new product element
      var productElement = document.createElement('div');
      productElement.classList.add('product');
      
      var imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(productImage);
      imageElement.alt = productName;
      
      var productInfoElement = document.createElement('div');
      productInfoElement.classList.add('product-info');
      
      var productNameElement = document.createElement('h3');
      productNameElement.textContent = productName;
      
      var productDescriptionElement = document.createElement('p');
      productDescriptionElement.textContent = productDescription;
      
      var productPriceElement = document.createElement('p');
      productPriceElement.textContent = 'Price: $' + productPrice;
      
      var productActionsElement = document.createElement('div');
      productActionsElement.classList.add('product-actions');
      
      var editButton = document.createElement('button');
      editButton.classList.add('edit-product');
      editButton.textContent = 'Edit';
      
      var deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-product');
      deleteButton.textContent = 'Delete';
      
      // Append elements
      productActionsElement.appendChild(editButton);
      productActionsElement.appendChild(deleteButton);
      
      productInfoElement.appendChild(productNameElement);
      productInfoElement.appendChild(productDescriptionElement);
      productInfoElement.appendChild(productPriceElement);
      productInfoElement.appendChild(productActionsElement);
      
      productElement.appendChild(imageElement);
      productElement.appendChild(productInfoElement);
      
      // Append new product to the product list
      var productList = document.querySelector('.product-list');
      productList.appendChild(productElement);
      
      // Reset form fields
      addProductForm.reset();
  });
  
  // Example of handling delete product button
  var productList = document.querySelector('.product-list');
  productList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-product')) {
          var product = event.target.closest('.product');
          product.remove();
      }
  });
});
//order management
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal and the button that opens it
  var modal = document.getElementById('order-details-modal');
  var closeButton = modal.querySelector('.close');

  // Get all "View Details" buttons
  var viewDetailsButtons = document.querySelectorAll('.view-details');

  // Function to open the modal when a "View Details" button is clicked
  function openModal() {
      modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
      modal.style.display = 'none';
  }

  // Event listener for each "View Details" button
  viewDetailsButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          openModal();
      });
  });

  // Event listener for close button
  closeButton.addEventListener('click', function() {
      closeModal();
  });

  // Event listener to close modal if user clicks outside of it
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          closeModal();
      }
  });
});
// interaction features
// Mock data for chat messages
const chatMessages = [
  { user: 'buyer', message: "Hi, I'm interested in your products." },
  { user: 'artisan', message: 'Sure, feel free to ask any questions.' },
  { user: 'buyer', message: 'Do you accept custom orders?' },
  { user: 'artisan', message: 'Yes, we do. Please let me know what you have in mind.' },
  // Add more messages as needed
];

// Function to display chat messages
function displayChatMessages() {
  const chatMessagesContainer = document.getElementById('chat-messages');
  chatMessagesContainer.innerHTML = '';
  chatMessages.forEach(msg => {
      const messageElement = document.createElement('div');
      messageElement.textContent = `${msg.user}: ${msg.message}`;
      chatMessagesContainer.appendChild(messageElement);
  });
}

// Function to send a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  if (message.trim() !== '') {
      chatMessages.push({ user: 'buyer', message: message });
      displayChatMessages();
      messageInput.value = '';
  }
}

// Display initial chat messages
displayChatMessages();

// Event listener for sending a message
const sendMessageBtn = document.getElementById('send-message-btn');
sendMessageBtn.addEventListener('click', sendMessage);
