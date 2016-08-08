$(document).ready(function() {

  var player = 1;
  var turn = $('.turn');
  var displayNextPlayer = (turn, player);
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var tie = 0;



  //on click method for user to input at their turn
  $('.square').on('click', function(event) {

    var squareSelected = $(this);
    //Brings back this alert if clicked on an already marked box.
    if (squareSelected.hasClass('fa fa-times-circle') || squareSelected.hasClass('fa fa-check-circle')) {
      alert('CMON, pick another box!');
    } else
    if (player === 1) {
      //adds cross icon as class to the selected box
      squareSelected.addClass('fa fa-times-circle');
      //runs the checkIfPlayerWon function and alerts win when true.
      if (checkIfPlayerWon('fa fa-times-circle')) {
        alert('You have won player' + player + ' ');
        score();
        reset();
        //if player won then resets board
      } else {
        //if not switches to player 2.
        player = 2;
      }

    } else {
      //adds a check icon as class to the box selected
      squareSelected.addClass('fa fa-check-circle');
      //runs the checkIfPlayerWon function and alerts win when true.
      if (checkIfPlayerWon('fa fa-check-circle')) {
        alert('You have won player ' + player + ' ');
        score();
        reset();
        //if not switches to player 1.
      } else {
        player = 1;
      }
    }
  });

  //checkIfPlayerWon function
  function checkIfPlayerWon(symbol) {
    //check for rows
    if ($('.item1').hasClass(symbol) && $('.item2').hasClass(symbol) && $('.item3').hasClass(symbol)) {

      return true;
    } else if ($('.item4').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item6').hasClass(symbol)) {
      return true;
    } else if ($('.item7').hasClass(symbol) && $('.item8').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;

      //check for columns
    } else if ($('.item1').hasClass(symbol) && $('.item4').hasClass(symbol) && $('.item7').hasClass(symbol)) {
      return true;
    } else if ($('.item2').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item8').hasClass(symbol)) {
      return true;
    } else if ($('.item3').hasClass(symbol) && $('.item6').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;

      //check for diagonals
    } else if ($('.item1').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item9').hasClass(symbol)) {
      return true;
    } else if ($('.item3').hasClass(symbol) && $('.item5').hasClass(symbol) && $('.item7').hasClass(symbol)) {
      return true;

      //false
    } else {
      return false;
    }
  }
  //Score keeping
  function score() {
      if (checkIfPlayerWon("fa fa-times-circle")) {
      playerOneScore++
      $('#one').text(playerOneScore++)

    } else if (checkIfPlayerWon('fa fa-check-circle')) {
      playerTwoScore++
      $('#two').text(playerTwoScore++)
        // alert('no way')
    }
  }
  //clear the board
  function reset() {
    $('.square').removeClass('fa fa-times-circle fa fa-check-circle');
  }

});
