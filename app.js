const eventsList = document.querySelector(".events__list");

fetch('./events.json')
  .then(response => response.json())
  .then(json => {
    json.forEach(eventObjet => {
      const li = document.createElement('li');
      li.className = 'event';

      li.innerHTML = `
        <img src="${eventObjet.poster}" alt="event" class="event__img">
        <h3 class="event__title">${eventObjet.event}</h3>
        <p class="event__date">${eventObjet.date}</p>
        <p class="event__location">
          <img class="event__location-icon" src="./imgs/location.svg" alt="location icon">
          ${eventObjet.location}
        </p>
      `;

      eventsList.appendChild(li);

      li.addEventListener(`click`, () => {
        
      });
    });
  })
