
/* function initMap() {
  var location = { lat: 40.7128, lng: -74.006 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const typeFilter = document.getElementById("type-filter");
  const distanceFilter = document.getElementById("distance-filter");
  const categoryFilter = document.getElementById("category-filter");
  const events = document.querySelectorAll(".event");

  function filterEvents() {
    const selectedType = typeFilter.value;
    const selectedDistance = distanceFilter.value;
    const selectedCategory = categoryFilter.value;

    events.forEach((event) => {
      const eventType = event.getAttribute("data-type");
      const eventDistance = event.getAttribute("data-distance");
      const eventCategory = event.getAttribute("data-category");

      const typeMatch = selectedType === "all" || eventType === selectedType;
      const distanceMatch =
        selectedDistance === "all" || eventDistance === selectedDistance;
      const categoryMatch =
        selectedCategory === "all" || eventCategory === selectedCategory;

      event.style.display =
        typeMatch && distanceMatch && categoryMatch ? "block" : "none";
    });
  }

  typeFilter.addEventListener("change", filterEvents);
  distanceFilter.addEventListener("change", filterEvents);
  categoryFilter.addEventListener("change", filterEvents);
});
