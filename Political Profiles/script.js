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
    else if (event.key === 'M' || event.key === 'm') {
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
  

