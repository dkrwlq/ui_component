/**
 * Ease 값 비교
 */

$(function(){

  $('.box1').stop().animate({top:450}, 2000, 'easeOutBounce');

  function repeat(){

    $('.box1').css({top:0}).stop().animate({top:450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top:450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top:450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top:450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top:450}, 2000, $.bez([.52,.51,.34,-0.94]));

  }

  setInterval(function(){
    repeat();
  }, 2500);

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbWluZ19mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBFYXNlIOqwkiDruYTqtZBcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ib3gxJykuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuICBmdW5jdGlvbiByZXBlYXQoKXtcclxuXHJcbiAgICAkKCcuYm94MScpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdsaW5lYXInKTtcclxuICAgICQoJy5ib3gyJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJ2Vhc2VJbkV4cG8nKTtcclxuICAgICQoJy5ib3gzJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6NDUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcuYm94NCcpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICAkKCcuYm94NScpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICQuYmV6KFsuNTIsLjUxLC4zNCwtMC45NF0pKTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgcmVwZWF0KCk7XHJcbiAgfSwgMjUwMCk7XHJcblxyXG59KTsiXX0=
