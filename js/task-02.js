const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

let listElements = [];
ingredients.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  li.classList.add("item");
  listElements.push(li);
});
list.append(...listElements);