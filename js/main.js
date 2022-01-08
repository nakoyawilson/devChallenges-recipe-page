const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  if (localStorage.getItem(checkbox.id) === null) {
    localStorage.setItem(checkbox.id, checkbox.checked);
  } else {
    let isCheckboxChecked;
    if (localStorage.getItem(checkbox.id) === "true") {
      isCheckboxChecked = true;
    } else if (localStorage.getItem(checkbox.id) === "false") {
      isCheckboxChecked = false;
    }
    checkbox.checked = isCheckboxChecked;
  }
  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });
});
