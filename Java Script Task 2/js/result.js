var fisrtName = document.getElementById("fName"),
    lastName = document.getElementById("lName"),
    dateOfBirth = document.getElementById("date"),
    male = document.getElementById("male"),
    female = document.getElementById("female"),
    btnGenerate = document.getElementById("generate"),
    result = document.getElementById("result"),
    resultS = document.getElementById("resultSpan");

function generateID(){
    var currentDate = new Date();
        currentHour = currentDate.getHours();
        currentMinute = currentDate.getMinutes();
        currentSecond = currentDate.getSeconds();

    var dateString = dateOfBirth.value.toString();
    const currentDateID = dateString.split("-");

    result.style.visibility = "visible"
    resultS.innerHTML = fisrtName.value.toLowerCase() + currentDateID[0] + currentDateID[1] + currentDateID[2] + lastName.value.toLowerCase() + currentHour + currentMinute + currentSecond;
}