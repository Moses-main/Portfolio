const carouselWrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".arrow.prev");
const nextButton = document.querySelector(".arrow.next");
const cardWidth = document.querySelector(".card").offsetWidth;
let slidePosition = 0;

// Function to move the carousel to a specific position
function moveToSlide(position) {
  carouselWrapper.style.transform = `translateX(-${position * cardWidth}px)`;
  slidePosition = position;
}

// Move to the next slide
function moveToNextSlide() {
  if (slidePosition < document.querySelectorAll(".card").length - 1) {
    slidePosition++;
    moveToSlide(slidePosition);
  }
}

// Move to the previous slide
function moveToPrevSlide() {
  if (slidePosition > 0) {
    slidePosition--;
    moveToSlide(slidePosition);
  }
}

// Event listeners for arrow buttons
nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPrevSlide);

// Automatic movement of the carousel
setInterval(moveToNextSlide, 3000); // Change the duration (in milliseconds) as needed

// FOR SHOWING THE VARIOUS PROJECTS DONE ON THE HOME PAGE
const projects = [
  {
    title: "blogApp",
    description: "A mini blogging site.",
    url: "https://blog-app-main.onrender.com/",
  },
  // {
  //   title: "Project 2",
  //   description: "Description of Project 2",
  //   url: "https://project2url.com",
  // },
  // Add more projects as needed
];

// Function to generate project cards
function generateProjectCards() {
  const projectContainer = document.getElementById("projectContainer");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.textContent = "View Project";
    link.href = project.url;
    link.target = "_blank";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    projectContainer.appendChild(card);
  });
}

// Generate project cards when the page loads
document.addEventListener("DOMContentLoaded", generateProjectCards);
