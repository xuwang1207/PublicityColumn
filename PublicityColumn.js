(function ($) {
    $.fn.extend({
        publicity: function (options) {

            var settings = $.extend({ speed: 1000, stay: 2000},options);
            var dom = $(this);
            var isScrolling = false;
            var mouseIn = false;
            console.info(dom);

            dom.each(function () { 
                var _this = $(this);              
                var ul = _this.find("ul");
                var li = ul.find("li");
                var scrollHeight = ul.height();
                if(li.length < 2) return;
                interval = setTimeout(scroll, settings.stay);

                _this.mouseenter(function () {
                	 mouseIn = true;
                    if (!isScrolling) {
                        clearTimeout(interval);
                    }
                });
                _this.mouseleave(function () {
                	 mouseIn = false;
                    interval = setTimeout(scroll, settings.stay);
                });
                function scroll() {  
	                if (!mouseIn && !isScrolling) { 
	                	isScrolling = true;
	                	var firstLi = li.first();        		
	                    firstLi.animate({ marginTop: -scrollHeight }, settings.speed, function () {
	                        clearTimeout(interval);       
	                        isScrolling = false;                 
	                        ul.append(firstLi);
	                        li.css("margin-top","0px");
	                        li = ul.find("li");
	                        firstLi = li.first()
	                        interval = setTimeout(scroll, settings.stay);
	                    });  
                    }       
                }
            });
        }
    });
})(jQuery);
