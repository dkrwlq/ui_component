/**
 * Tab Menu CSS
 */

$(function(){

  $('.css-tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.css-tab-heading');

    $('.css-tab-heading>a').removeClass('on');
    $('.css-tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.css-tab-content').removeClass('on');
    $('.css-tab-content').eq(tabIndex).addClass('on');

  });

});
/**
 * Tab Menu Jquery
 */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(500);
    $('.tab-content').eq(tabIndex).fadeIn(500);

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGFiX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRhYiBNZW51IENTU1xuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAkKCcuY3NzLXRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcuY3NzLXRhYi1oZWFkaW5nJyk7XG5cbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgICAkKCcuY3NzLXRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJCgnLmNzcy10YWItY29udGVudCcpLmVxKHRhYkluZGV4KS5hZGRDbGFzcygnb24nKTtcblxuICB9KTtcblxufSk7IiwiLyoqXG4gKiBUYWIgTWVudSBKcXVlcnlcbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgJCgnLnRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcudGFiLWhlYWRpbmcnKTtcblxuICAgICQoJy50YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJCgnLnRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgICAkKCcudGFiLWNvbnRlbnQnKS5mYWRlT3V0KDUwMCk7XG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmZhZGVJbig1MDApO1xuXG4gIH0pO1xuXG59KTsiXX0=
