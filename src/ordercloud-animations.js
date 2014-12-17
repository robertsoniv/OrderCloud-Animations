angular.module('orderCloud.animations', ['ngAnimate'])
	.animation('.dashboard-animation', function() {
		var width;
		return {
			beforeAddClass : function(element, className, done) {
				if(className == 'ng-hide') {
					width = $(element).width();
					TweenMax.to(element, 0.3, { maxWidth: 0, onComplete: done, ease:Power2.easeIn});
				} else {
					done();
				}
			},
			removeClass : function(element, className, done) {
				if(className == 'ng-hide') {
					//set the height back to zero to make the animation work properly
					TweenMax.to(element, 0.3, { maxWidth: width, onComplete: done, ease:Power2.easeOut });

					//this function is called when the animation ends or is cancelled
					return function() {
						//remove the style so that the CSS inheritance kicks in
						element[0].style.maxWidth = '';
					}
				} else {
					done();
				}
			}
		}
	})
;