// script.js

function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const sizeInfo = document.getElementById('sizeInfo');
  sizeInfo.innerHTML = `<h1>Width: ${width} Height: ${height}</h1>`;
}

// Initial update when the page loads
document.addEventListener('DOMContentLoaded', updateWindowSize);

// Update size on window resize
window.addEventListener('resize', updateWindowSize);
