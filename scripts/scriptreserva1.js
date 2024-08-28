let peopleCount = 1;

function changePeople(amount) {
    peopleCount += amount;
    if (peopleCount < 1) peopleCount = 1;
    if (peopleCount >10) peopleCount = 10;
    document.getElementById('people-count').innerText = peopleCount;
}

function selectTime(time) {
    alert(`Hora seleccionada: ${time}`);
}

function generateTimeSlots() {
    const startHour = 11; // 11:00 AM
    const endHour = 20.01; // 8:00 PM
    const timeSelector = document.getElementById('time-selector');

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = time;
            option.text = time;
            timeSelector.appendChild(option);
        }
    }
}

function selectTime(time) {
    alert(`Hora seleccionada: ${time}`);
}

// Llama a la función para generar las opciones del menú desplegable
generateTimeSlots();

