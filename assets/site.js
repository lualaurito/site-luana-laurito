const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu-principal");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".sr-only").textContent = isOpen ? "Abrir menu" : "Fechar menu";
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".sr-only").textContent = "Abrir menu";
      menu.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("a[href]") : null;

  if (!(link instanceof HTMLAnchorElement)) {
    return;
  }

  let hostname;

  try {
    hostname = new URL(link.href).hostname.toLowerCase();
  } catch {
    return;
  }

  const isWhatsAppLink = hostname === "wa.me"
    || hostname === "whatsapp.com"
    || hostname.endsWith(".whatsapp.com");

  if (!isWhatsAppLink || typeof gtag !== "function") {
    return;
  }

  gtag("event", "conversion", {
    send_to: "AW-18432093454/_InoCLbqge8cEI7ajdVE",
    value: 1.0,
    currency: "BRL",
  });
});
