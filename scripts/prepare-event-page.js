// Supondo que você passe o ID do evento pela URL, exemplo: evento.html?id=1
const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');

// Função para carregar os dados do evento com base no ID
function loadEventDetails() {
    const event = eventData.find(event => event.id == eventId);

    if (event) {
        document.getElementById('event-name').textContent = event.name;
        document.getElementById('event-address').textContent = event.address;
        document.getElementById('event-time').textContent = `Horário: ${event.time}`;
        document.getElementById('event-price').textContent = `Valor: ${event.price}`;
        document.getElementById('event-description').textContent = event.description;
        document.getElementById('event-environment').textContent = `Ambiente ${event.environment}`;
        document.getElementById('event-lotation').textContent = `Evento ${event.lotation}`;
        document.getElementById('event-evaluation').textContent = `Avaliação dos usuários: ${event.evaluation}`;
        if (event.evaluation == 1){
            document.getElementById('stars').textContent = '\u2B50;';
        }else if(event.evaluation == 2){
            document.getElementById('stars').textContent = '\u2B50\u2B50';
        }else if(event.evaluation == 3){
            document.getElementById('stars').textContent = '\u2B50\u2B50\u2B50';
        }else if(event.evaluation == 4){
            document.getElementById('stars').textContent = '\u2B50\u2B50\u2B50\u2B50';
        }else if(event.evaluation == 5){
            document.getElementById('stars').textContent = '\u2B50\u2B50\u2B50\u2B50\u2B50';
        }
    } else {
        document.querySelector('.event-details').innerHTML = '<p>Evento não encontrado.</p>';
    }
}

// Carregar detalhes do evento ao carregar a página
loadEventDetails();