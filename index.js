
// Инициализация карты Leaflet в div с id="map"
const map = L.map('map').setView([40.7128, -74.0060], 13); // Центр - Нью-Йорк

// Добавляем слой OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);



/* const events = document.querySelectorAll('.event');

const typeFilter = document.getElementById('type-filter');
const distanceFilter = document.getElementById('distance-filter');
const categoryFilter = document.getElementById('category-filter');

function filterEvents() {
  const typeValue = typeFilter.value;
  const distanceValue = distanceFilter.value;
  const categoryValue = categoryFilter.value;

  events.forEach(event => {
    const matchesType = typeValue === 'all' || event.dataset.type === typeValue;
    const matchesDistance = distanceValue === 'all' || event.dataset.distance === distanceValue;
    const matchesCategory = categoryValue === 'all' || event.dataset.category === categoryValue;

    if (matchesType && matchesDistance && matchesCategory) {
      event.parentElement.style.display = ''; // показать событие
    } else {
      event.parentElement.style.display = 'none'; // скрыть событие
    }
  });
}

// Слушатели изменения фильтров
[typeFilter, distanceFilter, categoryFilter].forEach(select =>
  select.addEventListener('change', filterEvents)
);

// Можно вызвать один раз при загрузке
filterEvents();
