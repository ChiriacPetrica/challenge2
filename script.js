"use strict";

const buttonEl = document.querySelector(".component-cta");
const preview = document.querySelector(".preview");
const submitted = document.querySelector(".submitted");

buttonEl.addEventListener("click", function () {
  const selectedRating = document.querySelector('input[name="rating"]:checked');
  if (selectedRating) {
    const selectedRatingValue = selectedRating.value;
    document.querySelector(
      ".submitted-rating"
    ).textContent = `You selected ${selectedRatingValue} out of 5`;
  }
  preview.classList.toggle("hidden");
  submitted.classList.toggle("hidden");
});
