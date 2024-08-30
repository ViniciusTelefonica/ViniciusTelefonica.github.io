// Função para calcular a distância entre dois pontos de latitude e longitude
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em quilômetros
    return distance;
}

// Função para encontrar os dois eventos mais próximos
function findClosestEvents(position) {
    const distances = eventData.map(event => {
        const distance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            event.latitude,
            event.longitude
        );
        return { event, distance };
    });

    // Ordena os eventos pela distância e seleciona os dois mais próximos
    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, 2).map(d => d.event);
}

// Função para renderizar os eventos
function renderEvents(events) {
    const eventsContainer = document.querySelector('.events');
    eventsContainer.innerHTML = ''; // Limpa o conteúdo atual

    if (events.length > 0) {
        const message = document.createElement('h2');
        message.textContent = "Estes são os eventos mais próximos de você";
        eventsContainer.appendChild(message);
    }

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        
        eventItem.innerHTML = `${event.name}</h3>
            <p>Endereço: ${event.address}</p>
            <p>Categoria: ${event.category}</p>
            <a href='events.html?id=${event.id}' class='info-button'>MAIS INFORMAÇÕES</a>`;

        eventsContainer.appendChild(eventItem);
    });
}

// Obtém a localização do usuário
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    position => {
        const closestEvents = findClosestEvents(position);
        renderEvents(closestEvents);
    },
    error => {
        console.error('Erro ao obter a localização:', error);
        alert('Não foi possível obter sua localização. Iremos mostrar todos os eventos.');
    }
); 
} else {
    alert('Geolocalização não é suportada por este navegador.');
}