let schedule = {};


$(document).ready(function () {

    $("#currentDay").text(moment().format("MMM, Do YYYY"));

    //'click' event for saveBtn
    $('.saveBtn').on('click', function () {
        let text = $(this).siblings(".description").val()
        let time = $(this).parent().attr("data-time")
        schedule[time] = text;
        let schedString = JSON.stringify(schedule);
        localStorage.setItem('schedule', schedString)
    });

    let storeEvent = localStorage.getItem('schedule');
    if (storeEvent) {
        schedule = JSON.parse(storeEvent);
    } else {
        console.log("You must enter something to store it.")
    }








});