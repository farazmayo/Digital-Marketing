document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar-links a');
  const headerLinks = document.querySelectorAll('.links a');
  const content = document.querySelector('.content');

  // Toggle sidebar
  menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
          sidebar.classList.add('active');
      } else {
          sidebar.classList.remove('active');
      }
  });

  // Close sidebar when close button is clicked
  closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
      menuToggle.checked = false;
  });

  // Close sidebar when a link in sidebar is clicked
  sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
          sidebar.classList.remove('active');
          menuToggle.checked = false;
      });
  });

  // Close sidebar when a link in header is clicked
  headerLinks.forEach(link => {
      link.addEventListener('click', () => {
          sidebar.classList.remove('active');
          menuToggle.checked = false;
      });
  });

  // Close sidebar when clicking outside
  content.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== menuToggle) {
          sidebar.classList.remove('active');
          menuToggle.checked = false;
      }
  });
});


// JavaScript for showing/hiding cards on button click
document.addEventListener('DOMContentLoaded', function () {
  const viewMoreBtn = document.getElementById('viewMoreBtn');
  const cardContainer = document.querySelector('.card-container');

  viewMoreBtn.addEventListener('click', function () {
      cardContainer.classList.toggle('hide-extra');
      if (cardContainer.classList.contains('hide-extra')) {
          viewMoreBtn.textContent = 'View More';
      } else {
          viewMoreBtn.textContent = 'View Less';
      }
  });
});

document.getElementById('viewmorecase').addEventListener('click', function () {
  let caseCards = document.querySelectorAll('.case-cards');
  let isViewMore = this.innerText === "View More";
  caseCards.forEach(function (card, index) {
      if (index !== 0) {
          card.style.display = isViewMore ? 'block' : 'none';
      }
  });
  this.innerText = isViewMore ? "View Less" : "View More";
});

function toggleForm() {
  var form = document.getElementById("contactForm");
  if (form.classList.contains("open")) {
      form.classList.remove("open");
      setTimeout(function () {
          form.style.display = "none";
      }, 500); // Delay hiding to match transition duration
  } else {
      form.style.display = "block";
      setTimeout(function () {
          form.classList.add("open");
      }, 10); // Delay adding class to ensure display is set first
  }
}

