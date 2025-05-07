document.addEventListener("DOMContentLoaded", function () {

    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.getElementById("navbarSupportedContent");

    if (toggler && menu) {
      toggler.addEventListener("click", function () {
        const isExpanded = toggler.getAttribute("aria-expanded") === "true";
        toggler.setAttribute("aria-expanded", (!isExpanded).toString());
        menu.classList.toggle("show");
      });
    }

    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && acceptBtn && declineBtn) {
      if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
        cookieBanner.style.display = "flex"; 
      }

      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
      });

      declineBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDeclined", "true");
        cookieBanner.style.display = "none";
      });
    }
  });

