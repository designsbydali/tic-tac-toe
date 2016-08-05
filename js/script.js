$(document).ready(function() {

  var player = 1;
  var turn = $('.turn');
  displayNextPlayer = (turn, player);

  //on click method for user to input at their turn
  $('.square').on('click', function(event) {

    var squareSelected = $(this);

    if (squareSelected.hasClass('fa fa-times-circle') || squareSelected.hasClass('fa fa-check-circle')) {
      alert('this one is taken pick another one');
    } else {
      if (player === 1) {
        squareSelected.addClass('fa fa-times-circle');
        if (checkIfPlayerWon('fa fa-times-circle')) {
          alert('You have won player' + player + ' ');
        } else {
          player = 2;
        }

      } else {
        squareSelected.addClass('fa fa-check-circle');
        if (checkIfPlayerWon('fa fa-check-circle')) {
          alert('You have won player ' + player + ' ');
        } else {
          player = 1;
        }
      }
    }
  });

  function checkIfPlayerWon(symbol) {
    //for rows
    if ($('.item1').hasClass(symbol) && $('.item2').hasClass(symbol) && $('.item3').hasClass(symbol)) {
      return true;
    } else if ($('.item4').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item6').hasClass(symbol)) {
      return true;
    } else if ($('.item7').hasClass(symbol) && $('.item8').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;

      //for columns
    } else if ($('.item1').hasClass(symbol) && $('.item4').hasClass(symbol) && $('.item7').hasClass(symbol)) {
      return true;
    } else if ($('.item2').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item8').hasClass(symbol)) {
      return true;
    } else if ($('.item3').hasClass(symbol) && $('.item6').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;

      //for diagonals
    } else if ($('.item1').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;
    } else if ($('.item3').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item7').hasClass(symbol)) {
      return true;

      //false
    } else {
      return false;
    }
  }
});

// function displayNextPlayer(turn, player) {
//   turn.h2('Current Player : ' + player);
// }


// function reset(table) {
//   table.find('td').each(function() {
//     $(this).removeClass('circle').removeClass('cross');
//   });
// }
