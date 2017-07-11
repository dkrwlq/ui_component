/**
 * Tab Menu CSS
 */

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRhYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUYWIgTWVudSBDU1NcbiAqL1xuIiwiLyoqXG4gKiBUYWIgTWVudSBKcXVlcnlcbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgJCgnLnRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgdGFiSW5kZXggPSAkKHRoaXMpLmluZGV4KCcudGFiLWhlYWRpbmcnKTtcblxuICAgICQoJy50YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJCgnLnRhYi1oZWFkaW5nJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgICAkKCcudGFiLWNvbnRlbnQnKS5mYWRlT3V0KDUwMCk7XG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmZhZGVJbig1MDApO1xuXG4gIH0pO1xuXG59KTsiXX0=
