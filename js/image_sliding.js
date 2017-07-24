/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){

    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if( prevIndex >= $('.css-sliding-view-image').length){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = nextIndex + 1;
    nextIndex--;
  }

  function autoRolling(){

    timeID = setInterval(function(){
      if($('.css-sliding-btn-control').hasClass('play')){
        $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
      }
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.css-sliding-control-wrap').width();

    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){

    var imgNumber = $('.css-sliding-view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.css-sliding-paging').append('<li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i+1) + '</a></li>');

    }
  }

  function pauseAndReAuto(){
    // autoRolling() 의 setInterval 을 중지 => 자동롤링 일시정지
    clearInterval( timeID );
    if($('.css-sliding-btn-control').hasClass('pause')){
      $('.css-sliding-btn-control').removeClass('pause').addClass('play').text('play');
    }
    clearInterval( checkID );
    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        if($('.css-sliding-btn-control').hasClass('play')){
          $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
        }
        autoRolling();
        clearInterval( checkID );
      }
      console.log(count);
      count++;
    }, 1000);
  }


  //실행부
  init();

  autoRolling();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.' + dir);

    setTimeout(function(){
      // 재귀함수
      $selector.one('click',function(){
        activeClick(dir);
      });

      /*
      if(dir == 'left'){
        $('.css-sliding-arrow.right').one('click', function(){
          activeClick(dir);
        });
      } else {
        $('.css-sliding-arrow.left').one('click', function(){
          activeClick(dir);
        });
      }
      */

    }, 1000);
  };

  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
     activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('play');
  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();

    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('pause');
  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }
      } else if( currentIndex == $('.css-sliding-view-image').length-1 ){

        if( indexNumber == 0 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('left');
        } else{
          activeClick('right');
        }
      }
    }
  });


});


/**
 * Image Sliding jQuery
 */
$(function(){

  // 선언부
  function init(){
    $('.js-sliding .view-image').eq(0).css({left : 0});
    $('.js-sliding .view-image').eq(1).css({left : 300});
    $('.js-sliding .view-image').eq(2).css({left : -300});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0; // 지역변수

  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }


    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-300}, 2000, 'easeOutBounce');

    $('.js-sliding .view-image').eq(nextIndex).css({left:300}).stop().animate({left:0}, 2000, 'easeOutBounce');


    currentIndex = nextIndex;

    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.js-sliding .view-image').length-1;
    }


    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:300}, 2000, 'easeOutBounce');

    $('.js-sliding .view-image').eq(nextIndex).css({left:-300}).stop().animate({left:0}, 2000, 'easeOutBounce');


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

    var wrapWidth = $('.js-sliding .control-wrap').width();

    $('.js-sliding .control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){

    var imgNumber = $('.js-sliding .view-image').length;

    for(var i=0; i<imgNumber; i++){

      $('.js-sliding .paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfc2xpZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbWFnZSBTbGlkaW5nIENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja07KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reyLnO2CtFxyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCBwcmV2SW5kZXggPj0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBwcmV2SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQgYW5pJykuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgcHJldkluZGV4ID0gbmV4dEluZGV4ICsgMTtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuXHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZigkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5oYXNDbGFzcygncGxheScpKXtcclxuICAgICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpLnRleHQoJ3BhdXNlJyk7XHJcbiAgICAgIH1cclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuXHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmNzcy1zbGlkaW5nLWNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcblxyXG4gICAgJCgnLmNzcy1zbGlkaW5nLWNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuXHJcbiAgICAgICQoJy5jc3Mtc2xpZGluZy1wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhdXNlQW5kUmVBdXRvKCl7XHJcbiAgICAvLyBhdXRvUm9sbGluZygpIOydmCBzZXRJbnRlcnZhbCDsnYQg7KSR7KeAID0+IOyekOuPmeuhpOungSDsnbzsi5zsoJXsp4BcclxuICAgIGNsZWFySW50ZXJ2YWwoIHRpbWVJRCApO1xyXG4gICAgaWYoJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykuaGFzQ2xhc3MoJ3BhdXNlJykpe1xyXG4gICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGF1c2UnKS5hZGRDbGFzcygncGxheScpLnRleHQoJ3BsYXknKTtcclxuICAgIH1cclxuICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoY291bnQgPT0gNSl7XHJcbiAgICAgICAgaWYoJCgnLmNzcy1zbGlkaW5nLWJ0bi1jb250cm9sJykuaGFzQ2xhc3MoJ3BsYXknKSl7XHJcbiAgICAgICAgICAkKCcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wnKS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpLnRleHQoJ3BhdXNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICBhdXRvUm9sbGluZygpO1xyXG5cclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpciA9PSAncmlnaHQnICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmNzcy1zbGlkaW5nLWFycm93LicgKyBkaXIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7J6s6reA7ZWo7IiYXHJcbiAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLypcclxuICAgICAgaWYoZGlyID09ICdsZWZ0Jyl7XHJcbiAgICAgICAgJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgICovXHJcblxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgJCgnLmNzcy1zbGlkaW5nLWFycm93LnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYXVzZUFuZFJlQXV0bygpO1xyXG4gICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY3NzLXNsaWRpbmctYXJyb3cubGVmdCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGF1c2VBbmRSZUF1dG8oKTtcclxuICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wucGF1c2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdwbGF5Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuXHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgncGF1c2UnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIHBhdXNlQW5kUmVBdXRvKCk7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5jc3Mtc2xpZGluZy1wYWdpbmctaXRlbScpO1xyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuXHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG5cclxuICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4iLCIvKipcclxuICogSW1hZ2UgU2xpZGluZyBqUXVlcnlcclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDEpLmNzcyh7bGVmdCA6IDMwMH0pO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcSgyKS5jc3Moe2xlZnQgOiAtMzAwfSk7XHJcblxyXG4gICAgbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgIHBhZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7IC8vIOyngOyXreuzgOyImFxyXG5cclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotMzAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjMwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MzAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Oi0zMDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuXHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG5cclxuICAgIHZhciB3cmFwV2lkdGggPSAkKCcuanMtc2xpZGluZyAuY29udHJvbC13cmFwJykud2lkdGgoKTtcclxuXHJcbiAgICAkKCcuanMtc2xpZGluZyAuY29udHJvbC13cmFwJykuY3NzKHtcclxuICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuXHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5sZW5ndGg7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG5cclxuICAgICAgJCgnLmpzLXNsaWRpbmcgLnBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwicGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIOyLpO2Wieu2gCAo7ZWo7IiY7Iuk7ZaJIO2YueydgCDtlajsiJjtmLjstpwoY2FsbCkpXHJcbiAgaW5pdCgpO1xyXG5cclxuICAgICAgYXV0b1JvbGxpbmcoKTtcclxuXHJcblxyXG4gICQoJy5hcnJvdy5yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KXtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcblxyXG4gICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnLmFycm93LmxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbiAgICBjbGVhckludGVydmFsKCBjaGVja0lEICk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH0sIDEwMDApO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuXHJcbiAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG5cclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdwbGF5Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuXHJcbiAgICAkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygncGxheScpLmFkZENsYXNzKCdwYXVzZScpO1xyXG4gICAgJChlLnRhcmdldCkudGV4dCgncGF1c2UnKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYWdpbmctaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuXHJcbiAgICBpZiggY3VycmVudEluZGV4ICE9IGluZGV4TnVtYmVyICl7XHJcblxyXG4gICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuXHJcbiAgICAgICAgaWYoIGluZGV4TnVtYmVyID09ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTEgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiggY3VycmVudEluZGV4ID09ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTEgKXtcclxuXHJcbiAgICAgICAgaWYoIGluZGV4TnVtYmVyID09IDAgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICkge1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKSB7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiXX0=
