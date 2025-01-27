

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
    targetSection.style.display = "block"; 
    setTimeout(() => {
      targetSection.style.opacity = "1"; 
    }, 50); 
  }, 500); 
};


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


document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.querySelector("#home");
  homeSection.style.display = "block"; 
  setTimeout(() => {
    homeSection.style.opacity = "1"; 
  }, 50); 
  updateActiveLink("home"); 
});



const resumeSections = document.querySelectorAll(".resume-section");

resumeSections.forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.toggle("active");
  });
});
