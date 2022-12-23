// Normal functions
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) {
    return age;
  } else {
    return `That's imposible.Year needs to be less than or equal to ${currentYear}`;
  }
}

// console.dir(btn);
//console.log(calcFactAge(2000));... test

//Ternary operator
let votesTrue = 12;
let votesFalse = 20;
const msg =
  votesFalse < votesTrue
    ? "The fact is true"
    : "Might be wrong,check more sources...";
alert(msg);

// Arrow functions
let calcFactAge2 = (year) => new Date().getFullYear() - year;

//Arrow function & ternary operator
calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `That's imposible.Year needs to be less than or equal to ${new Date().getFullYear()}`;
console.log(calcFactAge2(2066));
console.log(calcFactAge2(2018));

// Arrays
const fact = ["Lisbon is teh capital of portugal", 2015, true];
const newFact = [...fact, "society"];
const [name, createdIn, isCorrect] = fact;
console.log(newFact);

//objects
const factObj = {
  text: "Lisbon is teh capital of portugal",
  category: "Sociecty",
  createdIn: 2015,
  isCorrect: true,
  createdSummary: function () {
    return `the fact ${
      this.text
    }is from the category ${this.category.toUpperCase()} `;
  },
};
console.log(factObj.createdSummary());

//Loopig over an Array
[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge2(el.createdIn));
console.log(factAges);
console.log(factAges.join(" & "));

// filtering
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
