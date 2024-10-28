// JSON File Link: https://api.npoint.io/63a88c84843d6c783c74 //
const scheduleContainer = $('#scheduleList');
const btn = $('#submitDay');


btn.on('click', function () {


    //Valdidate the input

    let selectedDay = $('#dayInput').val().trim().toUpperCase()
    console.log(selectedDay)

    if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
        alert('You need to type a valid letter day!');
        return;
    }

    else {
        $.ajax({
            url: 'https://api.npoint.io/63a88c84843d6c783c74',
            method: 'GET',
            success: function (data) {

                const schedule = data.schedule
                const daySchedule = schedule.filter(item => item.days.includes(selectedDay))
                $("#scheduleList").clear()
                renderHTML(data)
            }
        })

    }
})

//filter the data to show only the classes that meet on the letter day entered // 
function renderHTML(data) {
    var htmlString = ''
    daySchedule.forEach(function (classItem) {
        htmlString.append(`
            <tr>
                <td>${classItem.period}</td>
                <td>${classItem.time}</td> 
                <td>${classItem.class}</td>
                <td>${classItem.teacher}</td>
                <td>${classItem.room}</td>
                }`)
    });


    scheduleContainer.append(htmlString)
}
