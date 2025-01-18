function generatepoem(event) {
    event.preventDefault();

let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "La tombe dit à la rose" ;


new Typewriter('poem', {
  strings: ["La tombe dit à la " ],
  autoStart: true,
  delay : 1,
  cursor: "",
});
}




let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatepoem)