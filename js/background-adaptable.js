$(document).ready(function() {
   var theWindow = $(window),
   $bg_login = $("#bg_login"),
   aspectRatio = $bg_login.width() / $bg_login.height();
   function resizeBg() {
      if ((theWindow.width() / theWindow.height()) < aspectRatio)
      {
         $bg_login.removeClass().addClass('bgheight');
      } else {
         $bg_login.removeClass().addClass('bgwidth');
      }
   }
   theWindow.resize(resizeBg).trigger("resize");
});