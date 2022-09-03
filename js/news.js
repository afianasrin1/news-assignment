const loadAllNewsCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((categories) => displayCategoriesName(categories.data.news_category));
};

const displayCategoriesName = (names) => {
  for (const name of names) {
    // console.log(name.category_name);
    const menu = document.getElementById("menu_all");
    const li = document.createElement("li");
    li.innerHTML = `<a>${name.category_name}</a>`;
    menu.appendChild(li);
  }
};

loadAllNewsCategories();
