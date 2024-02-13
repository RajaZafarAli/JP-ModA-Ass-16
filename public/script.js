let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let darkModeCheckbox = document.getElementById("darkModeCheckbox");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// Add event listener for the dark mode toggle
darkModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeCheckbox.checked);
});
