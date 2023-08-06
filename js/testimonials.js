
const clients_data = [
    {
        "personImg": "/assets/person.webp",
        "Name": "JAVIER HURTADO",
        "Review": "Llevamos más de 10 años contando con Update Informática como departamento informático de nuestra empresa y estamos más que satisfechos. Un equipo de profesionales de la más alta competencia y profesionalidad."
    },
    {
        "personImg": "/assets/person.webp",
        "Name": "JOSÉ GRANADOS",
        "Review": "Después de varios intentos hemos dado en el clavo. Update Empresas ha sido la solución a nuestros problemas informáticos. Han realizado la digitalización de nuestra empresa con soluciones tecnológicas de primer nivel. Muy Recomendables."
    },
    {
        "personImg": "/assets/person.webp",
        "Name": "JOSE RAMÍREZ",
        "Review": "Necesitábamos contar con profesionales de la informática que pudieran resolver nuestros problemas en el momento en que se presentan. Desde que contamos con Update Empresas como servicio externalizado de mantenimiento informático tenemos resueltas todas nuestras necesidades tecnológicas."
    },
]


let reviews_amount = clients_data.length - 1;
let selectedReview = 0;
let animation_active = false;

function secureReviewIncrement(review) {
  return review === reviews_amount ? 0 : review + 1;
}

function secureReviewDecrement(review) {
  return review === 0 ? reviews_amount : review - 1;
}

function moveForward() {
  if (animation_active) return;

  animation_active = true;
  const clientReview = document.getElementById("clientReview");
  const clientName = document.getElementById("clientName");
  const clientReviewText = document.getElementById("clientReviewText");

  clientReview.classList.add("client-review-animation");

  setTimeout(() => {
    animation_active = false;
    clientReview.classList.remove("client-review-animation");
    selectedReview = secureReviewIncrement(selectedReview);

    clientName.innerText = clients_data[selectedReview].Name;
    clientReviewText.innerText = clients_data[selectedReview].Review;

    updateCircles();
  }, 200);
}

function moveBack() {
  if (animation_active) return;

  animation_active = true;
  const clientReview = document.getElementById("clientReview");
  const clientName = document.getElementById("clientName");
  const clientReviewText = document.getElementById("clientReviewText");

  clientReview.classList.add("client-review-animation");

  setTimeout(() => {
    animation_active = false;
    clientReview.classList.remove("client-review-animation");
    selectedReview = secureReviewDecrement(selectedReview);

    clientName.innerText = clients_data[selectedReview].Name;
    clientReviewText.innerText = clients_data[selectedReview].Review;

    updateCircles();
  }, 200);
}

document.getElementById("moveForwardBtn").addEventListener("click", moveForward);
document.getElementById("moveBackBtn").addEventListener("click", moveBack);

// Dynamically add circles to represent the reviews
const reviewsCircles = document.getElementById("reviewsCircles");

function updateCircles() {
  const circles = reviewsCircles.getElementsByClassName("reviews-circle");
  for (let i = 0; i < circles.length; i++) {
    if (i === selectedReview) {
      circles[i].classList.add("selected-circle");
    } else {
      circles[i].classList.remove("selected-circle");
    }
  }
}

for (let i = 0; i < clients_data.length; i++) {
  const circle = document.createElement("div");
  circle.classList.add("reviews-circle");
  if (i === selectedReview) {
    circle.classList.add("selected-circle");
  }
  reviewsCircles.appendChild(circle);
}

// Update the review content with the first review
const clientName = document.getElementById("clientName");
const clientReviewText = document.getElementById("clientReviewText");
clientName.innerText = clients_data[selectedReview].Name;
clientReviewText.innerText = clients_data[selectedReview].Review;

