$('#btn__modal_open').click(function () {
    $("#modal").modal({
        fadeDuration: 300
    });
})

$('#slider').owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    autoheight: true,
    navText: ["<img src='img/Vector 6.svg'>", "<img src='img/Vector 5.svg'>"],
})


document.querySelector('#modal__form').addEventListener('submit', function (e) {
    e.preventDefault();
    $.ajax({
        url: 'action_ajax_form.php', //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "JSON", //формат данных
        data: $("#" + 'modal__form').serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно
            $('.close-modal').click();
            addRow(response)
        },
        error: function (response) { // Данные не отправлены
            $('.close-modal').click();
        }
    });
});

function addRow(response) {
    var table = document.querySelector('#table');
    var tbody = table.querySelector('tbody');
    var new_row = document.createElement('tr');
    var td;

    for (i = 0; i < 7; i++) {
        td = document.createElement('td');
        if (i == 0) {
            td.classList.add('table__left');
            if (response.value2 != 0) {
                td.innerHTML = `${response.material1}/${response.material2} ${response.value1}/${response.value2}`
            }
            else {
                td.innerHTML = `${response.material1} ${response.value1}`
            }
        }
        new_row.append(td);
    }
    tbody.append(new_row);
}