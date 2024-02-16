var isPlaying = false;

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var pageContainer = document.getElementById("page-container");
    sidebar.classList.toggle("sidebar-expanded");
    pageContainer.classList.toggle("sidebar-expanded");
    document.body.classList.toggle("sidebar-expanded"); // Apply the class to the body
}

function togglePlayPause() {
    var playPauseBtn = document.getElementById('play-pause-btn');
    if (isPlaying) {
        // Change to play icon
        playPauseBtn.innerHTML = '&#x25BA;';
        playPauseBtn.classList.remove('pause');
        playPauseBtn.classList.add('play');
    } else {
        // Change to pause icon
        playPauseBtn.innerHTML = '&#x2590;&#x2590;';
        playPauseBtn.classList.remove('play');
        playPauseBtn.classList.add('pause');
    }
    // Toggle the isPlaying state
    isPlaying = !isPlaying;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // All DOMContentLoaded related code here
    var sidebar = document.getElementById('sidebar');
    var playPauseBtn = document.getElementById('play-pause-btn');

    // Sidebar toggle on key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('sidebar-expanded')) {
            toggleSidebar();
        }
        if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
          toggleSidebar(); // Call your existing toggleSidebar function
      }
    });

    // Sidebar toggle on click outside
    document.getElementById('page-container').addEventListener('click', function(event) {
        if (sidebar.classList.contains('sidebar-expanded')) {
            toggleSidebar();
        }
    });

    // Initialize play/pause button
    playPauseBtn.addEventListener('click', togglePlayPause);

    var fullscreenBtn = document.getElementById('full-screen');
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    var sendMessageBtn = document.getElementById('send-message-btn');
    var messageInput = document.getElementById('chat-message-input');

    sendMessageBtn.addEventListener('click', function() {
      var message = messageInput.value;
      if (message.trim() !== '') {
          addMessageToChat("Name", message); // Add the message to the chat
          messageInput.value = ''; // Clear the input field after sending
      }
  });
    // Optionally, send the message when the Enter key is pressed
    messageInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          sendMessageBtn.click();
      }
    });

    const chatMessages = [
      { name: "Alice", message: "Hello everyone!" },
      { name: "Bob", message: "How's it going?" },
      { name: "Charlie", message: "Can't wait for the next debate." },
      { name: "Diana", message: "Excited for the next one" },
      { name: "Ethan", message: "I am an Ai Chatbot by OpenAi" },
      { name: "Fiona", message: "I do not agree to this." },
      { name: "George", message: "Hello, everyone! Just joined." },
      { name: "Hannah", message: "Anyone here into politics?" },
      { name: "Ian", message: "Happy to be a part of this event." },
      {name: "ChatGPT", message: "As an AI developed by OpenAI, I am a program designed to process information and generate responses based on data and algorithms. My interactions are based on patterns and rules from the data I've been trained on, not emotions or personal experiences. "}
    ];

    const chatContainer = document.getElementById('chat-messages');

    chatMessages.forEach(msg => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('chat-message');
      messageElement.innerHTML = `<strong>${msg.name}</strong>: ${msg.message}`; // Use innerHTML to parse the <strong> tag
      chatContainer.appendChild(messageElement);
    });
      
});

function toggleFullscreen() {
  var elem = document.getElementById("video-container");

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    elem.classList.add('fullscreen-video'); // Add fullscreen class
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
    elem.classList.remove('fullscreen-video'); // Remove fullscreen class
  }
}

// Listen for fullscreen changes to adjust styles
document.addEventListener('fullscreenchange', adjustStylesForFullscreen);
document.addEventListener('webkitfullscreenchange', adjustStylesForFullscreen);
document.addEventListener('mozfullscreenchange', adjustStylesForFullscreen);
document.addEventListener('MSFullscreenChange', adjustStylesForFullscreen);

function adjustStylesForFullscreen() {
  var videoPlayer = document.getElementById("video-container");
  var streamInfo = document.querySelector(".stream-info"); // Get the stream info element
  var controlsWrapper = document.querySelector(".video-controls-wrapper"); // Get the controls wrapper

  if (document.fullscreenElement) {
    videoPlayer.classList.add('fullscreen-video');
    streamInfo.style.display = 'none'; // Hide the stream info
    controlsWrapper.style.bottom = '0'; // Position controls at the bottom
  } else {
    videoPlayer.classList.remove('fullscreen-video');
    streamInfo.style.display = 'block'; // Show the stream info
    controlsWrapper.style.bottom = ''; // Reset controls position
  }
}

function addMessageToChat(name, message) {
  const chatContainer = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = `<strong>${name}</strong>: ${message}`; // Use innerHTML to parse the <strong> tag
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat
}