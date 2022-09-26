const timeRadioBtns = document.querySelectorAll('.timeframe-radio');
const workCurrent = document.getElementById('work-current');
const playCurrent = document.getElementById('play-current');
const studyCurrent = document.getElementById('study-current');
const exerciseCurrent = document.getElementById('exercise-current');
const socialCurrent = document.getElementById('social-current');
const selfCareCurrent = document.getElementById('self-care-current');
const workPrevious = document.getElementById('work-previous');
const playPrevious = document.getElementById('play-previous');
const studyPrevious = document.getElementById('study-previous');
const exercisePrevious = document.getElementById('exercise-previous');
const socialPrevious = document.getElementById('social-previous');
const selfCarePrevious = document.getElementById('self-care-previous');
const weeklyCheckbox = document.getElementById('weekly-checkbox');
const precedingMessages = document.querySelectorAll('.preceding-text')
 


weeklyCheckbox.checked = true; 

fetch("data.json") 
.then(resp => { 
   return resp.json()
}).then(data => { 
    timeRadioBtns.forEach(button => { 
        button.addEventListener('click', () => {  
            if(button.id == 'daily-checkbox' && button.checked) { 
                workCurrent.innerText = `${data[0].timeframes.daily.current}hrs`; 
                playCurrent.innerText = `${data[1].timeframes.daily.current}hrs`; 
                studyCurrent.innerText = `${data[2].timeframes.daily.current}hrs`; 
                exerciseCurrent.innerText = `${data[3].timeframes.daily.current}hrs`; 
                socialCurrent.innerText = `${data[4].timeframes.daily.current}hrs`; 
                selfCareCurrent.innerText = `${data[5].timeframes.daily.current}hrs`; 
                workPrevious.innerText = `${data[0].timeframes.daily.previous}hrs`; 
                playPrevious.innerText = `${data[1].timeframes.daily.previous}hrs`; 
                studyPrevious.innerText = `${data[2].timeframes.daily.previous}hrs`; 
                exercisePrevious.innerText = `${data[3].timeframes.daily.previous}hrs`; 
                socialPrevious.innerText = `${data[4].timeframes.daily.previous}hrs`; 
                selfCarePrevious.innerText = `${data[5].timeframes.daily.previous}hrs`;
                precedingMessages.forEach(message => {
                    message.innerText =  `Yesterday`;
                }) 
            }
            if(button.id == 'weekly-checkbox' && button.checked) {
                workCurrent.innerText = `${data[0].timeframes.weekly.current}hrs`; 
                playCurrent.innerText = `${data[1].timeframes.weekly.current}hrs`; 
                studyCurrent.innerText = `${data[2].timeframes.weekly.current}hrs`; 
                exerciseCurrent.innerText = `${data[3].timeframes.weekly.current}hrs`; 
                socialCurrent.innerText = `${data[4].timeframes.weekly.current}hrs`; 
                selfCareCurrent.innerText = `${data[5].timeframes.weekly.current}hrs`; 
                workPrevious.innerText = `${data[0].timeframes.weekly.previous}hrs`; 
                playPrevious.innerText = `${data[1].timeframes.weekly.previous}hrs`; 
                studyPrevious.innerText = `${data[2].timeframes.weekly.previous}hrs`; 
                exercisePrevious.innerText = `${data[3].timeframes.weekly.previous}hrs`; 
                socialPrevious.innerText = `${data[4].timeframes.weekly.previous}hrs`; 
                selfCarePrevious.innerText = `${data[5].timeframes.weekly.previous}hrs`; 
                precedingMessages.forEach(message => {
                    message.innerText =  `Last Week`;
                }) 
            }
            if(button.id == 'monthly-checkbox' && button.checked) {
                workCurrent.innerText = `${data[0].timeframes.monthly.current}hrs`; 
                playCurrent.innerText = `${data[1].timeframes.monthly.current}hrs`; 
                studyCurrent.innerText = `${data[2].timeframes.monthly.current}hrs`; 
                exerciseCurrent.innerText = `${data[3].timeframes.monthly.current}hrs`; 
                socialCurrent.innerText = `${data[4].timeframes.monthly.current}hrs`; 
                selfCareCurrent.innerText = `${data[5].timeframes.monthly.current}hrs`; 
                workPrevious.innerText = `${data[0].timeframes.monthly.previous}hrs`; 
                playPrevious.innerText = `${data[1].timeframes.monthly.previous}hrs`; 
                studyPrevious.innerText = `${data[2].timeframes.monthly.previous}hrs`; 
                exercisePrevious.innerText = `${data[3].timeframes.monthly.previous}hrs`; 
                socialPrevious.innerText = `${data[4].timeframes.monthly.previous}hrs`; 
                selfCarePrevious.innerText = `${data[5].timeframes.monthly.previous}hrs`; 
                precedingMessages.forEach(message => {
                    message.innerText =  `Last Month`; 
                }) 
            }
        }) 
    }) 
});