document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
  
    // Load the saved toggle state when the popup opens
    chrome.storage.local.get("scriptEnabled", (data) => {
      if (data.scriptEnabled) {
        toggleSwitch.checked = true;  // Reflect the saved "on" state
      } else {
        toggleSwitch.checked = false; // Reflect the saved "off" state
      }
    });
  
    // Add an event listener to handle toggle changes
    toggleSwitch.addEventListener('change', function () {
      const isEnabled = toggleSwitch.checked;
      chrome.storage.local.set({ scriptEnabled: isEnabled }); // Save the state in storage
    });
});
  