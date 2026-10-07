const target = document.querySelector('#target');

const browser = navigator.userAgent;
const operatingSystem = navigator.platform;

let browserName = 'Unknown';
let browserVersion = 'Unknown';

if (browser.includes('Edg')) {
  browserName = 'Microsoft Edge';
  browserVersion = browser.split('Edg/')[1].split(' ')[0];
} else if (browser.includes('Chrome')) {
  browserName = 'Google Chrome';
  browserVersion = browser.split('Chrome/')[1].split(' ')[0];
} else if (browser.includes('Firefox')) {
  browserName = 'Mozilla Firefox';
  browserVersion = browser.split('Firefox/')[1];
}

const screenWidth = screen.width;
const screenHeight = screen.height;

const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;

const currentDate = new Date();

const date = currentDate.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const time = currentDate.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit'
});

target.innerHTML = `
  <p>Browser: ${browserName}, ${browserVersion}</p>
  <p>Operating system: ${operatingSystem}</p>
  <p>Screen width: ${screenWidth}</p>
  <p>Screen height: ${screenHeight}</p>
  <p>Available screen width: ${availableWidth}</p>
  <p>Available screen height: ${availableHeight}</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>
`;