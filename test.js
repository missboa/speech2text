// Create a new SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set the language for speech recognition
recognition.lang = 'en-US'; // Set to the desired language code

// Get the input box element
const inputBox = document.getElementById('inputBox');

// Flag to track if speech recognition is in progress
let isListening = false;

// Function to start or stop speech recognition
function toggleSpeechRecognition() {
  if (isListening) {
    // Stop speech recognition
    recognition.stop();
    isListening = false;
  } else {
    // Clear previous input value
    inputBox.value = '';

    // Start speech recognition
    recognition.start();
    isListening = true;
  }
}

// Event handler for when speech is recognized
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;

  // Set the recognized speech as the input value
  inputBox.value += transcript;
};

// Event handler for when the button is clicked
document.getElementById('startButton').addEventListener('click', toggleSpeechRecognition);
