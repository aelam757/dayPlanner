let schedule = {};


$(document).ready(function () {

    $("#currentDay").text(moment().format("MMM, Do YYYY"));

    //'click' event for saveBtn
    $('.saveBtn').on('click', function () {
        let time = $(this).attr("data-time")
        let text = $(this).siblings(".description").val()
        schedule[time] = text;
        let schedString = JSON.stringify(schedule);
        localStorage.setItem('schedule', schedString)
        console.log('click')
        console.log(text)
        console.log(time)
    });

    let storeEvent = localStorage.getItem('schedule');
    if (storeEvent) {
        schedule = JSON.parse(storeEvent);
    } else {
        console.log("You must enter something to store it.")
    }








});