# Random-URL-Loader-with-Referrer-link
Chrome extension for random url automatic load with a given list of urls with random time between 2min to 6 min

-- Download the zip file into a folder.
-- edit the url list in the background.js file (add links with the given fromat with commas)

eg: const urlList = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
];

-- edit the time interval in minutes in the equation

function getRandomInterval() {
  return Math.random() * (max time - minimum time) + minimum time; // Random time between minimum time to max time in minutes
}


eg:1
function getRandomInterval() {
  return Math.random() * (6 - 2) + 2; // Random time value between 2 to 6 minutes
}

eg2:
function getRandomInterval() {
  return Math.random() * (6 - 2) + 1; // Random time value between 1 to 6 minutes
}

eg3:
function getRandomInterval() {
  return Math.random() * (10 - 0) + 0; // Random time valuebetween 0 to 10 minutes
}


