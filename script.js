//* JSON File Link: https://api.npoint.io/63a88c84843d6c783c74 *//
const scheduleContainer = $('#scheduleList');
const btn = $('#submitDay');


btn.on('click', function () {
    $.ajax({
        url: 'https://api.npoint.io/63a88c84843d6c783c74',
        method: 'GET',
        success: function (data) {
            renderHTML(data)
            const schedule = data.schedule
            const daySchedule = schedule.filter(item => item.days.includes(selectedDay))
        }
    })
})

function renderHTML(data) {
    let htmlString = ''
    const aDayClasses = getClassesForDay('A');
    console.log(aDayClasses);


    scheduleContainer.append(htmlString)
} 