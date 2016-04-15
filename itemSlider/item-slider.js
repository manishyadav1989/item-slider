/**
 * Item slider directives
 * @author: Yuvraj Yadav
 * @version: 1.0.0 
 * @Copyright (c) 2016, System Tracker and/or its affiliates. All rights reserved.
 **/
angular.module('itmeSlider',[])
.directive('itemSlider', function() {
   		return {
      restrict: 'EA',
	    replace: true,
      scope : {
        data : '=',
      },
      template:'<ul id="swipe-slider" class="swipeSlider" ng-cloak>' + '<li ng-repeat="slide in slides"><div class="subproduct-img"><img ng-src="{{slide.image}}"/></div><p class="font12 text-center blue-font">{{slide.name}}</p></li>' + '</ul>',
      link: function(scope, elm, attrs) {
          //scope.slides = [];
          // watch data variable
          scope.$watch('data', function(newVal, oldVal) { 
              scope.slides = newVal;
              elm.ready(function() {
                setTimeout(function() {
                  $("#swipe-slider").itemslide();
                }, 100);
              });
          });
       }
    }; 
});