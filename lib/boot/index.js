// $(document).ready(function(){
//   // Collapsible articles
//   $('article').each(function () {
//       var that = $(this);
//       var header = that.children('a');
//       var body = that.children('.body');

//       if (that.data('show') !== true) {
//         body.hide();
//       }

//       $(header).on('click', function(e){
//         if (that.hasClass('active')) {
//             body.slideUp('fast');
//             that.removeClass('active');
//         } else {
//           body.slideDown('fast');
//           that.addClass('active');
//         }
//       });
//   });

//   var anchor = window.location.hash.substring(1);
//   if (anchor) $('article a[name="' + anchor + '"]').trigger('click');

//   // Expanding the article on link click and scrolling down to it
//   $('#sidebar a').each(function () {
//       var that = $(this);
//       var id = that.attr('href').substring(1);
//       that.click(function (e) {
//           var header = $('article a[name="'+ id +'"]')
//           if (!header.parent().hasClass('active')) header.trigger('click');
//           $('html, body').animate({ scrollTop: header.offset().top }, 'fast');
//       });

//       // If we find a link in the body with similar anchor, add the same behavior
//       $('.body a[href="#'+ id +'"]').click(function (e) {
//           $('#sidebar a[href=#'+ id +']').trigger('click');
//       });
//   });
// });
