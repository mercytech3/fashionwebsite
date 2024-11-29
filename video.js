document.addEventListener("DOMContentLoaded", () => {
  const shopNowButton = document.querySelector(".shop-now");

  shopNowButton.addEventListener("click", () => {
      alert("Redirecting to the shop page...");
      // Simulate a page redirection
      window.location.href = "shop.html";
  });
});
