/**
 * Image Sliding CSS
 */

/**
 * Image Sliding jQuery
 */
$(function(){

  // 선언부
  function init(){
    $('.view-image').eq(0).css({left : 0});
    $('.view-image').eq(1).css({left : 300});
    $('.view-image').eq(2).css({left : -300});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0; // 지역변수

  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.view-image').length){
      nextIndex = 0;
    }


    $('.view-image').eq(currentIndex).stop().animate({left:-300}, 2000, 'easeOutBounce');

    $('.view-image').eq(nextIndex).css({left:300}).stop().animate({left:0}, 2000, 'easeOutBounce');


    currentIndex = nextIndex;

    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }


    $('.view-image').eq(currentIndex).stop().animate({left:300}, 2000, 'easeOutBounce');

    $('.view-image').eq(nextIndex).css({left:-300}).stop().animate({left:0}, 2000, 'easeOutBounce');


    currentIndex = nextIndex;

    nextIndex--;
  }

  function autoRolling(){

    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.control-wrap').width();

    $('.control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){

    var imgNumber = $('.view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

    }
  }


  // 실행부 (함수실행 혹은 함수호출(call))
  init();

      autoRolling();


  $('.arrow.right').on('click', function(){

    clearInterval( timeID );
    clearInterval( checkID );

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval( checkID );
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;

    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });


  $('.arrow.left').on('click', function(){
    clearInterval( timeID );
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval( checkID );
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;

    if( !$('.view-image').is(':animated') ) {
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);

    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('play');
  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();

    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('pause');
  });

  $(document).on('click', '.paging-item', function(e){

    e.preventDefault();

    var indexNumber = $(this).index('.paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.view-image').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ) {
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }
      } else if( currentIndex == $('.view-image').length-1 ){

        if( indexNumber == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ) {
            moveRight();
          }
        }

      } else {

        if( currentIndex < indexNumber ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else{
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ) {
            moveRight();
          }
        }
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfc2xpZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIENTU1xyXG4gKi9cclxuIiwiLyoqXHJcbiAqIEltYWdlIFNsaWRpbmcgalF1ZXJ5XHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcSgxKS5jc3Moe2xlZnQgOiAzMDB9KTtcclxuICAgICQoJy52aWV3LWltYWdlJykuZXEoMikuY3NzKHtsZWZ0IDogLTMwMH0pO1xyXG5cclxuICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbiAgICBwYWdpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwOyAvLyDsp4Dsl63rs4DsiJhcclxuXHJcbiAgdmFyIHRpbWVJRDtcclxuICB2YXIgY2hlY2tJRDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCcudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTMwMH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDozMDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjMwMH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgJCgnLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDotMzAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7XHJcblxyXG4gICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuXHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcblxyXG4gICAgJCgnLmNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy52aWV3LWltYWdlJykubGVuZ3RoO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyDsi6TtlonrtoAgKO2VqOyImOyLpO2WiSDtmLnsnYAg7ZWo7IiY7Zi47LacKGNhbGwpKVxyXG4gIGluaXQoKTtcclxuXHJcbiAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG5cclxuICAkKCcuYXJyb3cucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG5cclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG5cclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcblxyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApIHtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGF1c2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgncGxheScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BsYXknKS5hZGRDbGFzcygncGF1c2UnKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ3BhdXNlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFnaW5nLWl0ZW0nLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLnBhZ2luZy1pdGVtJyk7XHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlciApe1xyXG5cclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApIHtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
