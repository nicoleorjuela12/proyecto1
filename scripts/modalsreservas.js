const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM'
];

function renderTimeSlots() {
    const timeSelection = document.querySelector('.time-selection');
    timeSelection.innerHTML = ''; // Clear existing slots

    timeSlots.forEach(time => {
        const button = document.createElement('button');
        button.textContent = time;
        timeSelection.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', renderTimeSlots);