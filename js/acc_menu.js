/**
 * Accordion menu CSS
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height:0});
    });
  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height : 0
    });

    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if($(this).data('open') == 'false'){

      menuOpen($(this));
      menuClose($(this));

    } else {

      menuSelfClose( $(this) );

    }
  });
});
/**
 * Accordion menu jQuery
 */

/*
 ※ show/hide 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, hide

 1. 마우스 클릭했을 때 sub 메뉴가 show / hide
 2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth 의 sub 메뉴는 안보여야 함.
 3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
 4. sub 메뉴가 안 보이게 될 때 화살표는 아랫방향 화살표로 변경

 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

  1. 마우스를 클릭했을 때 sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1 depth 의 sub 메뉴가 늘어날 때 다른 1 depth 의 sub 메뉴는 줄어들어야 함.
  3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안 보이게 될 때 화살표는 아랫방향 화살표로 변경

 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height:0});
    });
  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });

    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');

  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });

    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }


  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if($(this).data('open') == 'false'){

      menuOpen($(this));
      menuClose($(this));

    } else {

      menuSelfClose( $(this) );

    }
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFjY19tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEFjY29yZGlvbiBtZW51IENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgLy8g7LKY7J2MIOuhnOuUqeuQmOyXiOydhCDrlYwg7IOB7YOcXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0OjB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGRlcHRoMUxpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jc3MtbG5iLWRlcHRoMicpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jc3MtbG5iLWRlcHRoMS1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZigkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKXtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCQodGhpcykpO1xyXG4gICAgICBtZW51Q2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pOyIsIi8qKlxyXG4gKiBBY2NvcmRpb24gbWVudSBqUXVlcnlcclxuICovXHJcblxyXG4vKlxyXG4g4oC7IHNob3cvaGlkZSDtmJXtg5zsnZgg7JWE7L2U65SU7Ja4IOuplOuJtFxyXG4g4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCBoaWRlXHJcblxyXG4gMS4g66eI7Jqw7IqkIO2BtOumre2WiOydhCDrlYwgc3ViIOuplOuJtOqwgCBzaG93IC8gaGlkZVxyXG4gMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMSBkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDslYjrs7Tsl6zslbwg7ZWoLlxyXG4gMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gNC4gc3ViIOuplOuJtOqwgCDslYgg67O07J206rKMIOuQoCDrlYwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcblxyXG4gKi9cclxuXHJcbi8qXHJcbiAg4oC7IHN1YiDrqZTribTsnZgg7JiB7Jet7J20IOuKmOyWtOuCrOuLpC/spITslrTrk6Tsl4jri6Qg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuICDigLsgQ1NTIOy9lOuUqSA6IHN0eWxpbmcsIOykhOyWtOuTrCjrhpLsnbQgOiAwKVxyXG5cclxuICAxLiDrp4jsmrDsiqTrpbwg7YG066at7ZaI7J2EIOuVjCBzdWIg66mU64m07J2YIOyDge2DnOyXkCDrlLDrnbwgc3ViIOuplOuJtOqwgCDripjslrTrgqgv7KSE7Ja065OsXHJcbiAgMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg64qY7Ja064KgIOuVjCDri6TrpbggMSBkZXB0aCDsnZggc3ViIOuplOuJtOuKlCDspITslrTrk6TslrTslbwg7ZWoLlxyXG4gIDMuIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDtmZTsgrTtkZzripQg7JyX67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICA0LiBzdWIg66mU64m06rCAIOyViCDrs7TsnbTqsowg65CgIOuVjCDtmZTsgrTtkZzripQg7JWE656r67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65Sp65CY7JeI7J2EIOuVjCDsg4Htg5xcclxuICAgICQoJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcubG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0OjB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5sbmItZGVwdGgxLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyl7XHJcblxyXG4gICAgICBtZW51T3BlbigkKHRoaXMpKTtcclxuICAgICAgbWVudUNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7Il19
