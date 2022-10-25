const reviews = [
  {
    id: 1,
    name: "Raquel Lira",
    job: "Full Stack Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMKvjoFY41ypWrRdVnut-cXUZPCAXcY18PA&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae debitis placeat ad tenetur sunt cupiditate quos, quas pariatur, modi velit mollitia error dignissimos nisi vero tempore blanditiis impedit distinctio.",
  },
  {
    id: 2,
    name: "Paulo Santos",
    job: "Front-end Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRXwHqmljcF0xlUgcoqZXuN7d15HGEfUDISUKDqVnWBYoktjYNFdQicDy4E_oQiNMXyE&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae debitis placeat ad tenetur sunt cupiditate quos, quas pariatur, modi velit mollitia error dignissimos nisi vero tempore blanditiis impedit distinctio.",
  },
  {
    id: 3,
    name: "Marcos Felipe",
    job: "Back-end Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNkJpg5tIB3DZsMqxgGCyRtSwDuav9LEdbZI06evMasI6tmkPahgI1ftvuA7qbHSsbgg&usqp=CAU",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore beatae debitis placeat ad tenetur sunt cupiditate quos, quas pariatur, modi velit mollitia error dignissimos nisi vero tempore blanditiis impedit distinctio.",
  },
];

/* pegar os elementos que iram ser modificados */
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial Item

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", () => {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson();
});
// show prev person

prevBtn.addEventListener("click", () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson();
});

// show random person

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})