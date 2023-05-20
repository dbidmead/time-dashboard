// ---------------DISPLAY ELEMENTS---------------

const workDisplayNow = document.querySelector('#work-now');
const workDisplayPrev = document.querySelector('#work-prev');
// console.log(workDisplayNow.textContent)

const playDisplayNow = document.querySelector('#play-now');
const playDisplayPrev = document.querySelector('#play-prev');
// console.log(playDisplayNow.textContent)

const studyDisplayNow = document.querySelector('#study-now');
const studyDisplayPrev = document.querySelector('#study-prev');
// console.log(studyDisplayNow.textContent)

const exerciseDisplayNow = document.querySelector('#exercise-now');
const exerciseDisplayPrev = document.querySelector('#exercise-prev');
// console.log(exerciseDisplayNow.textContent)

const socialDisplayNow = document.querySelector('#social-now');
const socialDisplayPrev = document.querySelector('#social-prev');
// console.log(socialDisplayNow.textContent)

const selfDisplayNow = document.querySelector('#self-now');
const selfDisplayPrev = document.querySelector('#self-prev');
// console.log(selfDisplayNow.textContent)

const nowDisplays = [
    workDisplayNow,
    playDisplayNow,
    studyDisplayNow,
    exerciseDisplayNow,
    socialDisplayNow,
    selfDisplayNow
];
const prevDisplays = [
    workDisplayPrev,
    playDisplayPrev,
    studyDisplayPrev,
    exerciseDisplayPrev,
    socialDisplayPrev,
    selfDisplayPrev
];

// ---------------BUTTONS---------------

const dailyBtn = document.querySelector('#daily-toggle');
// console.log(dailyBtn)
const weeklyBtn = document.querySelector('#weekly-toggle');
// console.log(weeklyBtn)
const monthlyBtn = document.querySelector('#monthly-toggle');
// console.log(monthlyBtn)

const buttons = [
    dailyBtn,
    weeklyBtn,
    monthlyBtn
];

// ---------------JSON DATA---------------

const data = await fetch('./data.json').then(res => res.json())
// console.log(data)



// ---------------HANDLE STATES---------------

let state = 0;

function toggleState(stateIndex) {
    state = stateIndex;
    setNowMessage();
    setPrevMessage();
    buttons.forEach(button => {
        button.classList.remove('active');
    });

}

dailyBtn.addEventListener('click', (e) => {
    toggleState(0);
    e.target.classList.add('active');
})

weeklyBtn.addEventListener('click', (e) => {
    toggleState(1);
    e.target.classList.add('active');
})

monthlyBtn.addEventListener('click', (e) => {
    toggleState(2);
    e.target.classList.add('active');
})

// ---------------HANDLER FUNCTIONS---------------

function getNowMessage(timeframes, stateIndex) {
    return Object.values(timeframes)[stateIndex].current;
}

function getPrevMessage(timeframes, stateIndex) {
    return Object.values(timeframes)[stateIndex].previous;
}

function setNowMessage() {
    nowDisplays.forEach((display, i) => {
    let timeframes = data[i].timeframes;
    display.textContent = getNowMessage(timeframes, state) + 'hrs';
    })
}

function setPrevMessage() {
    prevDisplays.forEach((display, i) => {
        let timeframes = data[i].timeframes;
        display.textContent = 'Last week - ' + getPrevMessage(timeframes, state) + 'hrs';
    })
}

