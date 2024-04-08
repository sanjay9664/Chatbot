function interpretDream() {
   
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Clear input field
    document.getElementById("user-input").value = "";
  
    if (userInput.trim() !== "") {
      // Display user's dream in chat box
      chatBox.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
  
      // Call API to interpret dream (placeholder function)
      var dreamMeaning = interpretDreamAPI(userInput);
  
      // Display interpreted dream meaning in chat box
      chatBox.innerHTML += "<p><strong>Chat Bot:</strong> " + dreamMeaning + "</p>";
  
      // Scroll chat box to bottom
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
   const btn  = document.getElementById("btn")
   btn.addEventListener("click", ()=>{
     chatBox = document.getElementById("chat-box");
    chatBox.innerText = ""
   })
  // Placeholder function for dream interpretation API
  function interpretDreamAPI(dream) {
    // Here you can call your API or use some logic to interpret the dream
    // For now, let's return a simple interpretation
    return "Your dream may signify a desire for freedom and exploration.";
  }
  


 var isDarkMode = false;

function toggleMode() {
  var container = document.querySelector(".container");
  var modeToggle = document.getElementById("mode-toggle");

  if (isDarkMode) {
    container.classList.remove("dark-mode");
    modeToggle.innerText = "Dark Mode";
    isDarkMode = false;
  } else {
    container.classList.add("dark-mode");
    modeToggle.innerText = "Light Mode";
    isDarkMode = true;
  }
}