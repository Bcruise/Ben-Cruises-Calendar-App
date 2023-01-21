// Set Date

var today = moment();

$('#currentDay').text(today.format('dddd, MMMM Do'));


// Main Array

if (localStorage.getItem('mainArray') == null) {
    var mainArray = 
 [{
    time: "9AM",
    timeToTest: 9,
    innerText: "",
},
{
    time: "10AM",
    timeToTest: 10,
    innerText: "",
},
{
    time: "11AM",
    timeToTest: 11,
    innerText: "",
},
{
    time: "12PM",
    timeToTest: 12,
    innerText: "",
},
{
    time: "1PM",
    timeToTest: 13,
    innerText: "",
},
{
    time: "2PM",
    timeToTest: 14,
    innerText: "",
},
{
    time: "3PM",
    timeToTest: 15,
    innerText: "",
},
{   
    time: "4PM",
    timeToTest: 16,
    innerText: "",
},
{   
    time: "5PM",
    timeToTest: 17,
    innerText: "",
}];

} else {
    mainArray = JSON.parse(localStorage.getItem('mainArray'));
}

// function

for (var a = 0; a < mainArray.length; a++) {
    var eachHour = $('<div>');
    eachHour.addClass("col-12 eachHour");
    eachHour.attr('id', 'eachHour');

    var timeSection = $('<div>');
    timeSection.addClass("col-1 timeSection");
    timeSection.text(mainArray[a].time);

    var saveButton = $('<button>');
    saveButton.addClass("col-1 saveButton");
    saveButton.attr('id', a);

    var textArea = $('<textarea>');
    textArea.attr('id', a);
    if (mainArray[a].innerText != "") {
        textArea.text(mainArray[a].innerText);
    }
    
    var hourNow = moment().format('HH');
    
    if ((hourNow - mainArray[a].timeToTest) < 0) {
        textArea.addClass("col-10 textArea green");
    } else if ((hourNow - mainArray[a].timeToTest) == 0) {
        textArea.addClass("col-10 textArea red");
    } else {
        textArea.addClass("col-10 textArea grey");
    }

    var carryTextArray = ['', '', '', '', '', '', '', '', ''];
    textArea.on('input', function (event) {
        carryTextArray[event.target.id] = event.target.value;
    });

    saveButton.on('click', function (event) {
        mainArray[event.target.id].innerText = carryTextArray[event.target.id];
        localStorage.setItem('mainArray', JSON.stringify(mainArray));
    })
    
    var faSaveIcon = $('<i></i>');   
    faSaveIcon.addClass("far fa-save fa-lg");
    faSaveIcon.attr('id', a);

    var container = $('.container');
    container.append(eachHour);
    eachHour.append(timeSection);
    eachHour.append(textArea);
    eachHour.append(saveButton);
    saveButton.append(faSaveIcon);

    localStorage.setItem('mainArray', JSON.stringify(mainArray));
}

