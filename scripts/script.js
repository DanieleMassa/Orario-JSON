const schedule = {
    "domenica": [
        {
            "giorno": "domenica",
            "ora": "08:00 - 09:30",
            "materia": "Domenica"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Storia"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Latino"
        }
        // ... altre lezioni del lunedì
    ],
    "lunedì": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Lunedì"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Storia"
        },
        // ... altre lezioni del lunedì
    ],
    "martedì": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Martedì"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "asdgf"
        },
        // ... altre lezioni del martedì
    ],
    "mercoledì": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Mercoledì"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Stodsavria"
        },
        // ... altre lezioni del lunedì
    ],
    "giovedì": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Giovedì"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Stodsavria"
        },
        // ... altre lezioni del lunedì
    ],
    "venerdì": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Venerdì"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Stodsavria"
        },
        // ... altre lezioni del lunedì
    ],
    "sabato": [
        {
            "ora": "08:00 - 09:30",
            "materia": "Sabato"
        },
        {
            "ora": "09:45 - 11:15",
            "materia": "Stodsavria"
        },
        // ... altre lezioni del lunedì
    ],



    // ... altri giorni della settimana
};

const daysOfWeek = Object.keys(schedule);
let currentDayIndex = 0;

function displaySchedule(day) {
    const currentDaySchedule = schedule[day];
    const scheduleContainer = document.getElementById("currentDaySchedule");
    scheduleContainer.innerHTML = "";
    for (const lesson of currentDaySchedule) {
        scheduleContainer.innerHTML += `<p>${lesson.ora} - ${lesson.materia}</p>`;
    }
}

function showCurrentDay() {
    const currentDay = daysOfWeek[currentDayIndex];
    displaySchedule(currentDay);
    document.getElementById("currentDayLabel").textContent = currentDay;
}

function updateDayIndex(increment) {
    currentDayIndex += increment;
    if (currentDayIndex < 0) {
        currentDayIndex = daysOfWeek.length - 1;
    }
    if (currentDayIndex >= daysOfWeek.length) {
        currentDayIndex = 0;
    }
    showCurrentDay();
}

// Ottieni il giorno attuale
const today = new Date();
const currentDayName = daysOfWeek[today.getDay()];

// Imposta il giorno attuale come giorno corrente
currentDayIndex = daysOfWeek.indexOf(currentDayName);

showCurrentDay();

document.getElementById("prevDay").addEventListener("click", () => updateDayIndex(-1));
document.getElementById("nextDay").addEventListener("click", () => updateDayIndex(1));