const containerElement = document.querySelector(".container");

console.log(containerElement);

window.addEventListener("mousemove", (event) => {
  containerElement.innerHTML = `
 <div class="mouse-event">
        <h4>Mouse X Position (px)</h4>
        <p>${event.clientX}</p>
      </div>
      <div class="mouse-event">
        <h4>Mouse y Position (px)</h4>
        <p>${event.clientY}</p>
      </div>
 `;
});
