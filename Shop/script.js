function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var pageContainer = document.getElementById("page-container");
    sidebar.classList.toggle("sidebar-expanded");
    pageContainer.classList.toggle("sidebar-expanded");
    document.body.classList.toggle("sidebar-expanded"); // Apply the class to the body
}

document.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'Escape'
    if (event.key === 'Escape' && sidebar.classList.contains('sidebar-expanded')) {
        toggleSidebar(); // Call your existing toggleSidebar function
    }
    if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
      toggleSidebar(); // Call your existing toggleSidebar function
    }
});

document.getElementById('page-container').addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    // Check if sidebar is currently expanded
    if (sidebar.classList.contains('sidebar-expanded')) {
        toggleSidebar(); // Call your existing toggleSidebar function
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Initialize sections
    var sections = document.querySelectorAll('.section .content');
    sections.forEach(function(content) {
        content.style.display = 'none';
    });

    var infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(function(box) {
      box.addEventListener('click', function() {
        window.location.href = this.querySelector('a').href;
      });
    });
});

function toggleSection(sectionId, button) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('.content');
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        // Toggle expanded class on the button
        button.classList.toggle('expanded');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const infoIcon = document.getElementById('info-icon');
    infoIcon.addEventListener('click', (e) => {
      const tooltip = document.getElementById('myTooltip');
      if (tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
      } else {
        tooltip.style.display = 'block';
        // Position the tooltip - Adjust the values as needed
        tooltip.style.left = e.clientX + 'px';
        tooltip.style.top = (e.clientY + 20) + 'px'; // 20 is an arbitrary value for offset
      }
    });
});
  
  // Close the tooltip when clicking anywhere else on the document
  document.addEventListener('click', function (e) {
    const tooltip = document.getElementById('myTooltip');
    if (e.target.id !== 'info-icon' && tooltip.style.display === 'block') {
      tooltip.style.display = 'none';
    }
});
  
function toggleAccordionContent(element) {
  // This function will toggle the accordion content display
  var content = element.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
    element.children[0].style.transform = "rotate(0deg)"; // Reset the toggle symbol
  } else {
    content.style.display = "block";
    element.children[0].style.transform = "rotate(90deg)"; // Rotate the toggle symbol
  }
}

  // Function to show the cart dropdown
  function showCartDropdown() {
    cartDropdown.classList.remove('hidden');
}

// Function to hide the cart dropdown
function hideCartDropdown() {
    cartDropdown.classList.add('hidden');
}


document.addEventListener('DOMContentLoaded', () => {
  const cartButton = document.querySelector('.shopping-cart-btn');
  const cartDropdown = cartButton.querySelector('.cart-dropdown');
  const cartItemsList = cartDropdown.querySelector('.cart-items');


  // Function to add item to the cart
  function addToCart(itemName, quantity, numberInput) {
      if (quantity > 0) {
          const li = document.createElement('li');
          li.textContent = `${quantity} x ${itemName}`;
          cartItemsList.appendChild(li);

          // Clear the number input
          numberInput.value = '0';

          // Show the cart dropdown
          showCartDropdown();

          // Update the cart count indicator here if you have one
          updateCartCount();
      }
  }

  // Function to update the cart count
  function updateCartCount() {
      const count = cartItemsList.querySelectorAll('li').length;
      // Update the cart count indicator here if you have one
  }

  // Attach click event to each add button
  document.querySelectorAll('.add-btn').forEach(button => {
      button.addEventListener('click', () => {
          const itemContainer = button.closest('.item-container');
          const itemName = itemContainer.querySelector('.item').textContent.trim();
          const numberInput = itemContainer.querySelector('.number-input');
          const quantity = parseInt(numberInput.value, 10);
          addToCart(itemName, quantity, numberInput);
      });
  });

  // Event listeners for showing and hiding the cart dropdown
  cartButton.addEventListener('mouseenter', showCartDropdown);
  cartButton.addEventListener('mouseleave', hideCartDropdown);

});



function incrementValue(button) {
  const input = button.parentNode.querySelector('.number-input');
  const currentValue = parseInt(input.value, 10);
  input.value = currentValue + 1;
}

// Decrement function
function decrementValue(button) {
  const input = button.parentNode.querySelector('.number-input');
  let currentValue = parseInt(input.value, 10);
  if (currentValue > 0) {
      input.value = currentValue - 1;
  }
}

// Function to add item to the cart
function addToCart(itemName, quantity, numberInput) {
  if (quantity > 0) {
      const li = document.createElement('li');
      li.textContent = `${quantity} x ${itemName}`;
      cartItemsList.appendChild(li);

      // Clear the number input
      numberInput.value = '0';

      // Show the cart dropdown
      showCartDropdown();

      // Hide the cart dropdown after 5 seconds (5000 milliseconds)
      setTimeout(hideCartDropdown, 5000);

      // Update the cart count indicator here if you have one
      updateCartCount();
  }
}

const button = document.querySelector('.shopping-button');
const preview = button.closest('.shopping-preview');

button.addEventListener('mouseover', function() {
    preview.classList.add('red-border');
});

button.addEventListener('mouseout', function() {
    preview.classList.remove('red-border');
});


function incrementValue2(button) {
  const input = button.parentNode.querySelector('.number-input2');
  const currentValue = parseInt(input.value, 10);
  input.value = currentValue + 1;
}

// Decrement function
function decrementValue2(button) {
  const input = button.parentNode.querySelector('.number-input2');
  let currentValue = parseInt(input.value, 10);
  if (currentValue > 0) {
      input.value = currentValue - 1;
  }
}

function addToCart2(itemName, quantity, numberInput) {
  if (quantity > 0) {
      const li = document.createElement('li');
      li.textContent = `${quantity} x ${itemName}`;
      cartItemsList.appendChild(li);

      // Clear the number input
      numberInput.value = '0';

      // Show the cart dropdown
      showCartDropdown();

      // Hide the cart dropdown after 5 seconds (5000 milliseconds)
      setTimeout(hideCartDropdown, 5000);

      // Update the cart count indicator here if you have one
      updateCartCount();
  }
}
