document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("search");
  const input = document.getElementById("search_input");

  search.addEventListener("click", function () {
    input.focus();
    search.classList.add("active");
  });

  input.addEventListener("blur", function () {
    search.classList.remove("active");
  });
});
