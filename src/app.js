/* Example Code
The following is just some example code for you to play around with.
No need to keep this---it's just some code so you don't feel too lonely.
*/
// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");
let sortMe = [];
const randomArr = (arr = []) => {
  if (sortMe.length > 0) sortMe = [];
  for (let i = 0; i < 5; i++) {
    let number = Math.ceil(Math.random() * 70);
    arr.push(number);
    sortMe.push(number);
  }
  sort = new Sort(sortMe);
  return arr;
};

let sort = new Sort(sortMe);

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(sort.returnValue("Quick Sort, by Stefano"));
document.getElementById("title").appendChild(title);

/*
  An simple example of how you can make your project a bit more
  interactive, if you would like.

In our `index.html` page, we have a short form.
Here is the code that talks to it.
*/
function changeTitle() {}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});

const generateSort = document.createElement("input");
generateSort.className = "generateSort";
generateSort.setAttribute("type", "submit");
generateSort.setAttribute("value", "Generate a random array");
form.appendChild(generateSort);

const nextStep = document.createElement("input");
nextStep.className = "nextStep";
nextStep.setAttribute("type", "submit");
nextStep.setAttribute("value", "sort array");
form.appendChild(nextStep);

const visualizeSort = document.createElement("div");
visualizeSort.className = "visualizeSort";
form.appendChild(visualizeSort);

const pivotSide = document.createElement("div");
pivotSide.className = "pivotSide";
// pivotSide.innerHTML = "pivot"
visualizeSort.append(pivotSide);

const greaterSide = document.createElement("div");
greaterSide.className = "greaterSide";
// greaterSide.innerHTML = "greater than pivot";
visualizeSort.append(greaterSide);

const smallerSide = document.createElement("div");
smallerSide.className = "smallerSide";
// smallerSide.innerHTML = "smaller than pivot";
visualizeSort.append(smallerSide);

const blockGenerator = (e) => {
  e.preventDefault();
  let random = randomArr();
  for (let i = 0; i < random.length; i++) {
    if (document.querySelector(`.block${i}`)) {
      document.querySelector(`.block${i}`).innerHTML = random[i];
    } else {
      let block = document.createElement("div");
      block.className = "block" + i;
      block.innerHTML = random[i];
      visualizeSort.appendChild(block);
    }
  }
};
generateSort.addEventListener("click", blockGenerator);

const pivots = (obj) => {
  const pivotArr = Object.keys(obj);
  let weExist = Array.from(document.getElementsByClassName("pivot"));
  if (weExist.length > 0) {
    for (let i = 0; i < weExist.length; i++) {
      weExist[i].parentNode.removeChild(weExist[i]);
    }
  }
  for (let i = 0; i < pivotArr.length; i++) {
    const pivot = document.createElement("div");
    pivot.className = "pivot";
    pivot.innerHTML = pivotArr[i];
    pivotSide.append(pivot);
  }
};
const greater = (obj) => {
  const greaterArr = Object.values(obj);
  let weExist = Array.from(document.getElementsByClassName("greater"));
  if (weExist.length > 0) {
    for (let i = 0; i < weExist.length; i++) {
      weExist[i].parentNode.removeChild(weExist[i]);
    }
  }
  for (let i = 0; i < greaterArr.length; i++) {
    const great = document.createElement("div");
    great.className = "greater";
    great.innerHTML = greaterArr[i];
    greaterSide.append(great);
  }
};

const smaller = (obj) => {
  const smallerArr = Object.values(obj);
  let weExist = Array.from(document.getElementsByClassName("smaller"));
  if (weExist.length > 0) {
    for (let i = 0; i < weExist.length; i++) {
      weExist[i].parentNode.removeChild(weExist[i]);
    }
  }
  for (let i = 0; i < smallerArr.length; i++) {
    const smaller = document.createElement("div");
    smaller.className = "smaller";
    smaller.innerHTML = smallerArr[i];
    smallerSide.append(smaller);
  }
};
const next = document.querySelector(".nextStep");
next.addEventListener("click", (e) => {
  e.preventDefault();
  const x = sort.sort(sortMe);
  console.log(sort.pieces);
  const refresh = (i = 0) => {
    if (i >= x.length) {
      const el = document.getElementsByClassName("block${}");
      // still work in progress!
      console.log(Array.from(el));
      return;
    } else {
      console.log("passing here");
      pivots(sort.funcPivot());
      greater(sort.funcGreater());
      smaller(sort.funcSmaller());
      document.querySelector(`.block${i}`).innerHTML = x[i];
      setTimeout(refresh, 500, i + 1);
    }
  };
  refresh();
});
