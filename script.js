// start with document.ready function the whole file will live in this function listen for save button clicks

//capture the value of the time input and save it to local storage

//append each saved item from local storage to the page in correct input moment js

//capture the time of each div via its id in the html and compare the mometjs(current time) to the time in each div and change the colour for each input depending off whether they were before during or coming up
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