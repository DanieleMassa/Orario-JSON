const schedule = {
    "domenica": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Riposo"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Riposo"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Riposo"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Riposo"
        },
    ],
    "lunedì": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Storia"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Antologia"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Scienze"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Latino"
        },
    ],
    "martedì": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Scienze"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Educazione Fisica"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Grammatica"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Inglese"
        },
        {
            "ora": "12:20 - 13:25",
            "materia": "Matematica"
        },
    ],
    "mercoledì": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Antologia"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Mito ed Epica"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Latino"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Matematica"
        },
        {
            "ora": "12:20 - 13:25",
            "materia": "Coding"
        },
    ],
    "giovedì": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Inglese"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Religione"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Educazione Fisica"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Disegno tecnico (da confermare)"
        },
    ],
    "venerdì": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Matematica"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Matematica"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Storia dell'arte"
        },
        {
            "ora": "11:20 - 12:20",
            "materia": "Latino"
        },
        {
            "ora": "12:20 - 13:25",
            "materia": "Storia"
        },
    ],
    "sabato": [
        {
            "ora": "08:15 - 09:15",
            "materia": "Storia"
        },
        {
            "ora": "09:15 - 10:10",
            "materia": "Inglese"
        },
        {
            "ora": "10:10 - 11:20",
            "materia": "Matematica"
        },
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