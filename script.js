

const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");


const hideAllSections = () => {
  sections.forEach((section) => {
    section.style.opacity = "0"; 
    setTimeout(() => {
      section.style.display = "none"; 
    }, 500);
  });
};

const showSection = (sectionId) => {
  hideAllSections();
  const targetSection = document.querySelector(`#${sectionId}`);
  setTimeout(() => {
    targetSection.style.display = "block"; // Show the desired section
    setTimeout(() => {
      targetSection.style.opacity = "1"; // Set opacity to 1 for fade-in effect
    }, 50); // Small delay to ensure display change is applied
  }, 500); // Match the duration of the fade-out effect
};

// Function to update the active link in the navigation bar
const updateActiveLink = (targetId) => {
  navLinks.forEach((link) => {
    if (link.getAttribute("href").substring(1) === targetId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

// Add click event to navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute("href").substring(1); // Get section ID
    showSection(targetId); // Show the corresponding section
    updateActiveLink(targetId); // Update the active link
  });
});

// Show the home section by default
document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.querySelector("#home");
  homeSection.style.display = "block"; // Show home section
  setTimeout(() => {
    homeSection.style.opacity = "1"; // Set opacity to 1 for fade-in effect
  }, 50); // Small delay to ensure display change is applied
  updateActiveLink("home"); // Set home link as active by default
});


// JavaScript for Interactive Resume
const resumeSections = document.querySelectorAll(".resume-section");

resumeSections.forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});
