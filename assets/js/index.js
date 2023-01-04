const userButton = document.querySelector(".navbar .user");
const userDropdown = document.querySelector(".navbar .user .user-dropdown");

userButton.addEventListener("click", () => {
  userDropdown.classList.toggle("display");
});
