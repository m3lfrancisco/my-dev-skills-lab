$(document).ready(function () {
    console.log("the page is ready");
});

$('tr').hide();

$('#addSkill').on('click', function () {
    let input = $('#input').val();
    // console.log('input');
    let newSkills = `
        <tr>
        <td><button class="btn-x">X</button>${input}</td>
        </tr>
    `;
    $('table').append(newSkills);
});

$('#table').on('click', 'button', function () {
    console.log("Clicked");
    $(this).closest('tr').fadeOut(1000, function () {
        $(this).remove();
    });
});

