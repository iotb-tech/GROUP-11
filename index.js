
const hourlyDropdown = document.getElementById ("hourlyDropdown")
const daysOfTheWeek = document.getElementById("daysOfTheWeek")









 fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m')


hourlyDropdown.addEventListener("click" , () => {

    daysOfTheWeek.style.display = 'block'
    console.log('dhghugdqhg')

})