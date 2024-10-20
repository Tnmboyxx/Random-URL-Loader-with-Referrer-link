const urlList = [
  "https://translate.google.lk/?hl=en&vi=c&sl=en&tl=si&op=translate",
  "https://chatgpt.com/",
  "https://www.freepik.com/",
  "https://apexonline.lk/#/login?returnUrl=%2Fhome"
];

let currentTabId = null;
let previousUrl = null;

function getRandomInterval() {

  let maximum_time = 3; // 4 minutes
  let minimum_time = 1; // 1 minutes
  return Math.random() * (maximum_time- minimum_time) + minimum_time; // Random time between 1 to 4 minutes
}

function loadRandomUrl() {
  if (!currentTabId) return;

  const randomUrl = urlList[Math.floor(Math.random() * urlList.length)];

  chrome.tabs.update(currentTabId, { url: randomUrl }, function () {
    // Update previousUrl for the next random URL referrer
    previousUrl = randomUrl;
  });
}

// Set up the alarm for random URL loading
function startRandomUrlLoader() {
  const interval = getRandomInterval();
  console.log("Next URL will be loaded in", interval, "minutes.");

  // Create or update the alarm
  chrome.alarms.create("randomUrlLoader", {
    delayInMinutes: interval, // Schedule the next random URL loading
  });
}

// Event listener for alarm trigger
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "randomUrlLoader") {
    chrome.storage.local.get("scriptEnabled", (data) => {
      if (data.scriptEnabled) {
        loadRandomUrl();
        startRandomUrlLoader(); // Schedule the next random URL load
      }
    });
  }
});

// Listen for storage changes (i.e., when the user toggles the script)
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.scriptEnabled) {
    if (changes.scriptEnabled.newValue) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;
        currentTabId = tabs[0].id;
        startRandomUrlLoader();
      });
    } else {
      // Clear the alarm when script is disabled
      chrome.alarms.clear("randomUrlLoader");
    }
  }
});

// Initialize the random URL loader if enabled when the extension starts
chrome.storage.local.get("scriptEnabled", (data) => {
  if (data.scriptEnabled) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      currentTabId = tabs[0].id;
      startRandomUrlLoader();
    });
  }
});
