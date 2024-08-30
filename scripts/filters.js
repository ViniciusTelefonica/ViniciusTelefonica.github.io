// Função para criar filtros de categorias
function renderFilters(events) {
    const filtersContainer = document.querySelector('.filters');
    filtersContainer.innerHTML = ''; // Limpa o conteúdo atual

    // Obtém as categorias únicas
    const categories = [...new Set(events.map(event => event.category))];

    categories.forEach(category => {
        const filterButton = document.createElement('button');
        filterButton.classList.add('filter');
        filterButton.textContent = category;

        filterButton.addEventListener('click', () => {
            document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
            filterButton.classList.add('active');
            filterEvents(category);
        });

        filtersContainer.appendChild(filterButton);
    });

    // Adiciona um botão para "Todos"
    const allButton = document.createElement('button');
    allButton.classList.add('filter');
    allButton.textContent = 'Todos os próximos';
    allButton.classList.add('active'); // "Todos" é o filtro padrão

    allButton.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        //renderEvents(events);
        window.location.reload();
    });

    filtersContainer.appendChild(allButton);
}

// Função para filtrar eventos por categoria
function filterEvents(category) {
    const filteredEvents = eventData.filter(event => event.category === category);
    renderEvents(filteredEvents);
}

// Chama as funções para renderizar filtros e eventos
renderFilters(eventData);
renderEvents(eventData);