//TEST UPDATE
angular.module('orderCloud.animations', ['ngAnimate'])
	.animation('.MasterUI', function() {
		return {
			enter : function(element, done) {
				if (element.children()[0] && element.children()[0].nodeName == "HEADER") {
					TweenMax.from(element, 1, { opacity: 0, onComplete: done, ease:Power2.easeIn});
				} else {
					TweenMax.from(element, 1, {top:-300, onComplete: done, ease:Back.easeOut});
				}
			},
			leave : function(element, done) {
				if (element.children()[0] && element.children()[0].nodeName == "HEADER") {
					TweenMax.to(element, 1, { opacity: 0, onComplete: done, ease:Power2.easeIn});
				} else {
					TweenMax.to(element, 1, {top:-300, onComplete: done, ease:Back.easeIn});
				}
			}
		}
	})
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
	.animation('.ContentUI', function() {
		return {
			enter : function(element, done) {
				element[0].style.zIndex = 2;
				TweenMax.from(element, 0.5, { left: '-100%', right:'100%', onComplete: done, ease:Power2.easeOut, delay:0.1});
			},
			leave : function(element, done) {
				element[0].style.zIndex = 1;
				TweenMax.to(element, 0.3, { opacity: 0, scale: 0.8, onComplete: done, ease:Power1.easeIn});
			}
		}
	})
	.animation('.dropdown', function() {
		var dropdownMenuElement;
		return {
			beforeAddClass : function(element, className, done) {
				if(className == 'open') {
					dropdownMenuElement = element.children()[1];
					TweenMax.to(dropdownMenuElement, 0.3, { scale: 1, onComplete: done, ease:Power2.easeIn});
				} else {
					done();
				}
			},
			removeClass : function(element, className, done) {
				if(className == 'open') {
					dropdownMenuElement = element.children()[1];
					TweenMax.to(dropdownMenuElement, 0.3, { scale: 0, onComplete: done, ease:Power2.easeIn});
				} else {
					done();
				}
			}
		}
	})
;