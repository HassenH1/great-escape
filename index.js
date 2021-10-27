const tooltip = document.querySelector("#tooltip");
tooltip.style.display = "none";

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= 230) {
    // tooltip.style.opacity = 1.0;
    // fade();
    tooltip.style.display = "block";
  }
});

function fade() {
  if (tooltip.style.opacity >= 0.5) {
    return;
  }
  for (let i = 9; i >= 1; i--) {
    // await sleep(1000);

    let num = 1 / i;

    tooltip.style.opacity = num;
    console.log(num, "<=-=what is i?");
  }
}

// function sleep(milliseconds) {
//   return new Promise((resolve) => setTimeout(resolve, milliseconds));
// }
