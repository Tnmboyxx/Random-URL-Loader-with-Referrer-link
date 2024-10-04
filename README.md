# Random-URL-Loader-with-Referrer-link
Chrome extension for random url automatic load with a given list of urls with random time between 2min to 6 min

# Download the zip file into a folder.
# Edit the url list in the background.js file (add links with the given fromat with commas)

eg: const urlList = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
];

# Edit the maximum time and minimum time as required.

function getRandomInterval() {
let minimum_time = 2; // minimum time is 2 minutes
let maximum_time = 5; // maximum time is 5 minutes

  return Math.random() * (maximum_time - minimum_time) + minimum_time; // Random time between minimum time to max time in minutes
}

# load the extension to the chrome browser by turning on developer mode.
