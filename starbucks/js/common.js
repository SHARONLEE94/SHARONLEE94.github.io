//search
const serachEl = document.querySelector(".search");
    // const searchInputEl = document.querySelector(".search input");
const searchInputEl = serachEl.querySelector("input");

serachEl.addEventListener("click", function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function() {
  serachEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function() {
  serachEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//Date
const thisYear =  document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); 