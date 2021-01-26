$('.button1').on('click', () => {
    console.log('Yeah, you clicked me');
  });

$('.button2').on('click', () => {
    $('.button1').text('Diiiirrrr');
  });

$('.button3').click(() => {
    $('button').css('background', 'purple');
});