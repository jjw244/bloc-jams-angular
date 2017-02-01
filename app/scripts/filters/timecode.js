(function() {
     function timecode() {
       return function(timer) {
        
        var mySound = new buzz.sound("/sounds/mysound.ogg"),
        timer = buzz.toTimer(mySound.getDuration());

        $(".current-time, .total-time").innerHTML = timer;

         return timer;
       };
     }
 
     angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();