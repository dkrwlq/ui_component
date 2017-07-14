/**
 * Gnb Menu CSS
 */

$(function(){

  var timeID; // setInterval, clearInterval 에서 사용할 변수

  $('.css-menu-depth1-link').on('mouseenter', function(){

    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() : ~초 이후에 한번만 실행
      // 빠르게 실행했을때 depth2가 사라지는 실행--
      //setTimeout(function(){
      //  $depth2Wrap.removeClass('on');
      //}, 300);


      /*
       1. 타이머 함수 실행 횟수/취소
       2. 실행문의 횟수/시간 을 실행/취소

       를 고려해서 알고리즘 만들기

       1. 일반 코딩

          setInterval(function(){
            실행문
          }, 단위시간);

          - 단위시간마다 setInterval 과 실행문이 매번 실행

          Ex) 단위시간 1000(1초), 회수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행
              3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 3번 실행


       2. 시간이 취소되는 기능 구현 코딩

        var i = 0;
        setInterval(function(){
          if( i == 10 ){
            실행문
          }
          i++;
        }, 단위시간);

        - 단위시간마다 setInterval 은 매번 실행, 실행문은 i가 10일때 한번 실행

        Ex) 3.5초 시점에서 clearInterval 실행 => setInterval 3번, 실행문 0번(실행 취소)

       */

      var count = 0;

      timeID = setInterval(function(){
        if( count == 300 ){
          $depth2Wrap.removeClass('on');
        }
        count++;
      }, 1);

   });

  });

  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });

});

/**
 * Gnb Menu jQuery
 */

$(function(){

  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);
    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity:1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index':1}).stop().animate({
        height:0,
        opacity:0
      }, 200); // children 은 여러가지 이기때문에 이름을 명시해줌
    });
  });


  $('.menu-depth1-link').on('.mouseleave', function(){
    // depth1 border 줄어드는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height:0,
      opacity:0
    }, 300);
  });





});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR25iIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCDsl5DshJwg7IKs7Jqp7ZWgIOuzgOyImFxyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8gcmVtb3ZlQ2xhc3Mg7ZWY6riw7JyE7ZW0IOyLpO2WieuQmOqzoCDsnojripQgc2V0SW50ZXJ2YWwg7Leo7IaMXHJcbiAgICBjbGVhckludGVydmFsKHRpbWVJRCk7XHJcblxyXG4gICAgLy8gcHJvbWlzZSgpIDog7JWe7ISgIOuPmeyekeydtCDrqqjrkZAg64Gd64KcIO2bhCDtirnsoJUg6riw64ql7J2EIOyLpO2WiSDsi5ztgqzrlYwg7IKs7JqpXHJcbiAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnb24nKS5wcm9taXNlKCkuZG9uZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdmFyICRkZXB0aDJXcmFwID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKTtcclxuXHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKSA6IH7stIgg7J207ZuE7JeQIO2VnOuyiOunjCDsi6TtlolcclxuICAgICAgLy8g67mg66W06rKMIOyLpO2Wie2WiOydhOuVjCBkZXB0aDLqsIAg7IKs65287KeA64qUIOyLpO2WiS0tXHJcbiAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAvLyAgJGRlcHRoMldyYXAucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgIC8vfSwgMzAwKTtcclxuXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgMS4g7YOA7J2066i4IO2VqOyImCDsi6Ttlokg7Zqf7IiYL+y3qOyGjFxyXG4gICAgICAgMi4g7Iuk7ZaJ66y47J2YIO2an+yImC/si5zqsIQg7J2EIOyLpO2WiS/st6jshoxcclxuXHJcbiAgICAgICDrpbwg6rOg66Ck7ZW07IScIOyVjOqzoOumrOymmCDrp4zrk6TquLBcclxuXHJcbiAgICAgICAxLiDsnbzrsJgg7L2U65SpXHJcblxyXG4gICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFsIOqzvCDsi6TtlonrrLjsnbQg66ek67KIIOyLpO2WiVxyXG5cclxuICAgICAgICAgIEV4KSDri6jsnITsi5zqsIQgMTAwMCgx7LSIKSwg7ZqM7IiYIDEwID0+IDEw7LSI64+Z7JWIIHNldEludGVydmFsIDEw67KIIOyLpO2WiSwg7Iuk7ZaJ66y4IDEw67KIIOyLpO2WiVxyXG4gICAgICAgICAgICAgIDMuNey0iCDsi5zsoJDsl5DshJwgY2xlYXJJbnRlcnZhbCDsi6TtlokgPT4gc2V0SW50ZXJ2YWwgM+uyiCwg7Iuk7ZaJ66y4IDPrsogg7Iuk7ZaJXHJcblxyXG5cclxuICAgICAgIDIuIOyLnOqwhOydtCDst6jshozrkJjripQg6riw64qlIOq1rO2YhCDsvZTrlKlcclxuXHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpZiggaSA9PSAxMCApe1xyXG4gICAgICAgICAgICDsi6TtlonrrLhcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAtIOuLqOychOyLnOqwhOuniOuLpCBzZXRJbnRlcnZhbCDsnYAg66ek67KIIOyLpO2WiSwg7Iuk7ZaJ66y47J2AIGnqsIAgMTDsnbzrlYwg7ZWc67KIIOyLpO2WiVxyXG5cclxuICAgICAgICBFeCkgMy417LSIIOyLnOygkOyXkOyEnCBjbGVhckludGVydmFsIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggMOuyiCjsi6Ttlokg7Leo7IaMKVxyXG5cclxuICAgICAgICovXHJcblxyXG4gICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgdGltZUlEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiggY291bnQgPT0gMzAwICl7XHJcbiAgICAgICAgICAkZGVwdGgyV3JhcC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSwgMSk7XHJcblxyXG4gICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNzcy1tZW51LWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtZGVwdGgxLWJvcmRlcicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH0sIDMwMCk7XHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICB2YXIgZGVwdGgxSW5kZXggPSAkKHRoaXMpLmluZGV4KCcubWVudS1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyIG1vdGlvbkhlaWdodCA9IDU0O1xyXG5cclxuICAgIGlmKCBkZXB0aDFJbmRleCA9PSAxICl7XHJcbiAgICAgIG1vdGlvbkhlaWdodCA9IDgwO1xyXG4gICAgfVxyXG5cclxuICAgICQodGhpcykubmV4dCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6bW90aW9uSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5OjFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCc6MX0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBoZWlnaHQ6MCxcclxuICAgICAgICBvcGFjaXR5OjBcclxuICAgICAgfSwgMjAwKTsgLy8gY2hpbGRyZW4g7J2AIOyXrOufrOqwgOyngCDsnbTquLDrlYzrrLjsl5Ag7J2066aE7J2EIOuqheyLnO2VtOykjFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCcubW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aDowXHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKCcubWVudS1kZXB0aDItd3JhcCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0OjAsXHJcbiAgICAgIG9wYWNpdHk6MFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsiXX0=
