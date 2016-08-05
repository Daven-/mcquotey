$(document).ready(function() {
  splashColor(); // change the color of everything!

  $('#getQuote').click(function() {
    $('.quote-container').addClass('animated hinge');
    getRandomQuote();
  });


});

// darkenize a color
function darken(value){
  var per = .3;
  return Math.ceil(value-(value*per));
}
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// get a random chuck norris quote!
function getRandomQuote(){
  $.ajax({
      url: 'https://api.icndb.com/jokes/random?escape=javascript',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      var quoteO = data.value;

      setTimeout(function() {
        var quote = '"' + quoteO.joke + '"';
        $('.share').attr('href', 'https://twitter.com/intent/tweet?text=' + quote)
        $('#quote').text(quote);
        $('.quote-container').removeClass('animated hinge');

        splashColor(); // change the color of everything!
      }, 1800);
    })
    .fail(function() {
      console.log('error');
      $('#quote').text('"Chuck Norris will never have a heart attack. His heart isn\'t nearly foolish enough to attack him."');
      alert('Sorry the Chuck Norris API is down, Chuck Norris Down!? No he just has better things to do.');
    })
    .always(function() {
      console.log('complete');
    });
}

function splashColor(darkAccent){
  var r = Math.ceil(getRandomArbitrary(0,256));
  var g = Math.ceil(getRandomArbitrary(0,256));
  var b = Math.ceil(getRandomArbitrary(0,256));
  var color = 'rgb('+r+','+g+','+b+')';
  var darkAccent = 'rgb('+darken(r)+','+darken(g)+','+darken(b)+')';

  $('body').css('background-color', color);
  $('.btn').css('active', color);
  $('.btn').css('focus', color);
  $('.quote-container').css('color', darkAccent);
  $('#by').css('color', darkAccent);
  $('.btn').css('background-color', darkAccent);
  $('.btn').css('border-color', darkAccent);

}
