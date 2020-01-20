let schedule = {};


$(document).ready(function () {

    let getEvent = localStorage.getItem("schedule");
    console.log(getEvent)

    


    $("#currentDay").text(moment().format("MMM, Do YYYY"));

    //'click' event for saveBtn
    $('.saveBtn').on('click', function () {
        let time = $(this).siblings(".hour").text()
        let text = $(this).siblings(".description").val()
        schedule[time] = text;
        let schedString = JSON.stringify(schedule);
        localStorage.setItem('schedule', schedString)
        console.log('click')
        console.log(text)
        console.log(time)
        
    });

    //let getEvent = localStorage.getItem('schedule');
    //if (getEvent) {
        //schedule = JSON.parse(getEvent);
    //} else {
     //   console.log("You must enter something to store it.")
    //}

    








});