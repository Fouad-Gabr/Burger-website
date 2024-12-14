const burgerImages = document.querySelectorAll(".burger img");
const toggleImages = document.querySelectorAll(".burger-toggle img");
let currentIndex = 0;

toggleImages[currentIndex].classList.add("active");

burgerImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    toggleImages.forEach((toggleImg) => toggleImg.classList.remove("active"));
    toggleImages[currentIndex].classList.add("active");
    toggleImages[currentIndex].src = burgerImages[index].src;
    currentIndex = (currentIndex + 1) % toggleImages.length;
  });
});

function createStars() {
  const starsContainer = document.getElementById("stars");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * windowWidth}px`;
    star.style.top = `${Math.random() * windowHeight}px`;
    starsContainer.appendChild(star);
  }
}

window.addEventListener("load", createStars);

function reloadPage() {
  window.location.reload();
}

const orderNowButton = document.querySelector(".order-now");
const whatsappIcon = document.querySelector(".whatsapp");
const phoneNumber = "201080379224";
const message = "عايز اطلب اوردر لو سمحت";
const encodedMessage = encodeURIComponent(message);

orderNowButton.addEventListener("click", function (event) {
  event.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappURL = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});

whatsappIcon.addEventListener("click", function (event) {
  event.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappURL = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});
