$(document).ready(function() {

      var player = 1;

      //on click method for user to input at their turn
      $('.square').on('click', function(event) {

        var squareSelected = $(this);

        if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
          alert('this one is taken pick another one');
        } else {
          if(player === 1) {
            squareSelected.addClass('ex');
            player = 2;
          } else {
            squareSelected.addClass('oh');
            player = 1;

          }
        }
    });
  });  

//       function checkIfPlayerWon(symbol) {
//         //for rows
//         if ($('.item1').hasClass(symbol) && ('.item2').hasClass(symbol) && ('.itm3').hasClass(symbol)) {
//           return true;
//         } else {
//           return false;
//         }
//       }
// });



      // function checkIfPlayerWon(symbol) {
      //   //for rows
      //   if ($('.item1').hasClass(symbol) && ('.item2').hasClass(symbol) && ('.item3').hasClass(symbol)) {
      //     return true;
      //   } else if ($('.item4').hasClass(symbol) && ('.item5').hasClass(symbol) && ('.item6').hasClass(symbol)) {
      //     return true;
      //   } else if ($('.item7').hasClass(symbol) && ('.item8').hasClass(symbol) && ('.item9').hasClass(symbol)) {
      //     return true;
      //     //for colums
      //   } else if ($('.item1').hasClass(symbol) && ('.item4').hasClass(symbol) && ('.item7').hasClass(symbol)) {
      //     return true;
      //   } else if ($('.item2').hasClass(symbol) && ('.item5').hasClass(symbol) && ('.item8').hasClass(symbol)) {
      //     return true;
      //   } else if ($('.item3').hasClass(symbol) && ('.item6').hasClass(symbol) && ('.item9').hasClass(symbol)) {
      //     return true;
      //     //for diagonals
      //   } else if ($('.item1').hasClass(symbol) && ('.item5').hasClass(symbol) && ('.item9').hasClass(symbol)) {
      //     return true;
      //   } else if ($('.item3').hasClass(symbol) && ('.item5').hasClass(symbol) && ('.item7').hasClass(symbol)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      //
      //
      // });
