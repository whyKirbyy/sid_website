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

// Event listener for clicking outside the sidebar
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


const menuItems = document.querySelectorAll('.menu-item');
//adding event listener
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    menuItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked item
    this.classList.add('active');
  });
});

// Script for toggling the search input field
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search'); // The search button
    const searchContainer = document.getElementById('search-container'); // The search input container
  
    searchButton.addEventListener('click', function () {
      const isHidden = searchContainer.style.display === 'none';
      // Toggle the display property
      searchContainer.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        // Focus the input field when showing it
        document.getElementById('search-input').focus();
      }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search'); // The search button
    const searchContainer = document.getElementById('search-container'); // The search input container
    const searchInput = document.getElementById('search-input'); // The search input field
  
    // Function to show the search bar
    function showSearchBar() {
      searchContainer.style.display = 'block';
      searchInput.focus();
    }
  
    // Function to hide the search bar
    function hideSearchBar() {
      searchContainer.style.display = 'none';
    }
  
    // Event listener for the search button
    searchButton.addEventListener('click', function (event) {
      showSearchBar();
      event.stopPropagation(); // Prevent the click from being immediately caught by the document
    });
  
    // Event listener for the Enter key in the search input
    searchInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        hideSearchBar();
      }
    });
  
    // Event listener for clicking outside the search bar
    document.addEventListener('click', function (event) {
      const isClickInside = searchContainer.contains(event.target);
  
      if (!isClickInside) {
        hideSearchBar();
      }
    });
});

window.addEventListener('scroll', function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
