$('p:eq(1)').attr('id', 'nimi');
$('#fp').remove();
$('#fdiv').css(
    {
    backgroundColor: "grey",
    color: 'white'
    }
);

$('#ab').click(function(){
    $('p:last').after('<p id="tp">Hello User</p>');
});

$('#4p').hide();

$('div:last').hover(
    function () {
        $('#4p').show(function () {
            $('#4p').text('About to select a link...');
        });
    },
    function () {
        $('#4p').hide();
    }
);
/*
$('div:last').mouseenter(function(){
    $('#4p').text('About to select a link...').show();
});

$('div:last').mouseleave(function(){
    $('#4p').hide();
});
*/