let counter = 0;

$('#up').click(() => {
    counter = counter+1;
    $('#counter').text(counter);
});

$("#down").click (() => {
    counter = counter-1;
    $('#counter').text(counter);
});