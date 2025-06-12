document.addEventListener("DOMContentLoaded", () => {
  // === Инициализация карты ===
  const map = L.map("map").setView([40.7128, -74.006], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // === ФИЛЬТРАЦИЯ СОБЫТИЙ ===
  const events = document.querySelectorAll(".event");
  const typeFilter = document.querySelector("#type-filter");
  const distanceFilter = document.querySelector("#distance-filter");
  const categoryFilter = document.querySelector("#category-filter");

  function filterEvents() {
    const typeValue = typeFilter.value;
    const distanceValue = distanceFilter.value;
    const categoryValue = categoryFilter.value;

    const eventContainers = document.querySelectorAll(".event-inside");
    let visibleEvents = [];

    eventContainers.forEach((wrapper) => {
      const event = wrapper.querySelector(".event");
      const eventType = event.dataset.type;
      const eventDistance = parseInt(event.dataset.distance);
      const eventCategory = event.dataset.category;

      const matchesType = typeValue === "all" || eventType === typeValue;

      let matchesDistance = false;
      if (distanceValue === "all") {
        matchesDistance = true;
      } else if (distanceValue === "30+") {
        matchesDistance = eventDistance >= 30;
      } else if (distanceValue === "5") {
        matchesDistance = eventDistance === 5;
      } else if (distanceValue === "20") {
        matchesDistance = eventDistance === 20;
      }

      const matchesCategory =
        categoryValue === "all" || eventCategory === categoryValue;

      const isMatch = matchesType && matchesDistance && matchesCategory;

      if (isMatch) {
        wrapper.style.display = "";
        visibleEvents.push(wrapper);
      } else {
        wrapper.style.display = "none";
      }
    });

    // Удаляем все старые разделители
    document.querySelectorAll(".stick").forEach((hr) => hr.remove());

    // Вставляем новые разделители между видимыми событиями
    visibleEvents.forEach((wrapper, index) => {
      if (index < visibleEvents.length - 1) {
        const hr = document.createElement("hr");
        hr.classList.add("stick");
        wrapper.after(hr);
      }
    });
  }

  [typeFilter, distanceFilter, categoryFilter].forEach((select) => {
    select.addEventListener("change", filterEvents);
  });

  // начальная фильтрация при загрузке
  filterEvents();
});
