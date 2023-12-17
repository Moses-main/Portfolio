// const carouselWrapper = document.querySelector(".carousel-wrapper");
// const prevButton = document.querySelector(".arrow.prev");
// const nextButton = document.querySelector(".arrow.next");
// const cardWidth = document.querySelector(".card").offsetWidth;
// let slidePosition = 0;

// // Function to move the carousel to a specific position
// function moveToSlide(position) {
//   carouselWrapper.style.transform = `translateX(-${position * cardWidth}px)`;
//   slidePosition = position;
// }

// // Move to the next slide
// function moveToNextSlide() {
//   if (slidePosition < document.querySelectorAll(".card").length - 1) {
//     slidePosition++;
//     moveToSlide(slidePosition);
//   }
// }

// // Move to the previous slide
// function moveToPrevSlide() {
//   if (slidePosition > 0) {
//     slidePosition--;
//     moveToSlide(slidePosition);
//   }
// }

// // Event listeners for arrow buttons
// nextButton.addEventListener("click", moveToNextSlide);
// prevButton.addEventListener("click", moveToPrevSlide);

// // Automatic movement of the carousel
// setInterval(moveToNextSlide, 3000); // Change the duration (in milliseconds) as needed

// const carouselWrapper = document.querySelector(".carousel-wrapper");
// const prevButton = document.querySelector(".arrow.prev");
// const nextButton = document.querySelector(".arrow.next");
// const cardWidth = document.querySelector(".card").offsetWidth;
// const totalCards = document.querySelectorAll(".card").length;
// let currentSlide = 0;

// // Function to move the carousel to a specific card
// function moveToSlide(slideIndex) {
//   carouselWrapper.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
//   currentSlide = slideIndex;
// }

// // Move to the next card
// function moveToNextSlide() {
//   if (currentSlide < totalCards - 1) {
//     moveToSlide(currentSlide + 1);
//   } else {
//     moveToSlide(0);
//   }
// }

// // Move to the previous card
// function moveToPrevSlide() {
//   if (currentSlide > 0) {
//     moveToSlide(currentSlide - 1);
//   } else {
//     moveToSlide(totalCards - 1);
//   }
// }

// // Event listeners for arrow buttons
// nextButton.addEventListener("click", moveToNextSlide);
// prevButton.addEventListener("click", moveToPrevSlide);

// // Automatic movement of the carousel (one card at a time)
// let intervalId;

// function startCarousel() {
//   intervalId = setInterval(moveToNextSlide, 3000); // Change the duration (in milliseconds) as needed
// }

// function stopCarousel() {
//   clearInterval(intervalId);
// }

// startCarousel();

// const carouselWrapper = document.querySelector(".carousel-wrapper");
// const prevButton = document.querySelector(".arrow.prev");
// const nextButton = document.querySelector(".arrow.next");
// const cardWidth = document.querySelector(".card").offsetWidth;
// const totalCards = document.querySelectorAll(".card").length;
// let currentSlide = 0;

// // Function to move the carousel to a specific card
// function moveToSlide(slideIndex) {
//   carouselWrapper.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
//   currentSlide = slideIndex;
// }

// // Move to the next card
// function moveToNextSlide() {
//   if (currentSlide < totalCards - 1) {
//     moveToSlide(currentSlide + 1);
//   } else {
//     moveToSlide(0);
//   }
// }

// // Move to the previous card
// function moveToPrevSlide() {
//   if (currentSlide > 0) {
//     moveToSlide(currentSlide - 1);
//   } else {
//     moveToSlide(totalCards - 1);
//   }
// }

// // Event listeners for arrow buttons
// nextButton.addEventListener("click", moveToNextSlide);
// prevButton.addEventListener("click", moveToPrevSlide);

// // Automatic movement of the carousel (one card at a time)
// let intervalId;

// function startCarousel() {
//   intervalId = setInterval(() => {
//     moveToNextSlide();
//     setTimeout(() => {
//       moveToPrevSlide();
//     }, 2500); // Adjust this delay (in milliseconds) between each card movement
//   }, 5000); // Adjust this delay (in milliseconds) for overall movement
// }

// function stopCarousel() {
//   clearInterval(intervalId);
// }

// startCarousel();

// Data for projects (you can replace this with your projects' details)
const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    url: "https://project1url.com",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    url: "https://project2url.com",
  },
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
