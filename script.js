const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("change", toggleMode);

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
/*light / dark;
class CssProcontainer {
  constructor(element) {
    this.element = element;
  }
}
save dark mode
//function to toggle dark mode

function toggleDarkMode() {
  const checkbox = document.getElementById("modeToggle");
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

//add event listener to the checkbox

document
  .getElementById("modeToggle")
  .addEventListener("change", toggleDarkMode);

//optional: check the saved mode from localstorage

document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("dark-mode") == "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("modeToggle").checked = true;
  }
});

//save mode perfer to localStorage
function saveModePreference() {
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
}
document
  .getElementById("modeToggle")
  .addEventListener("change", saveModePreference);
*/
