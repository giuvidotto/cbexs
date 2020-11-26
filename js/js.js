var JS = JS || {};

$(document).ready(function(){
	JS.Common = new Common();
});

Common = function(){
	this.init();
}

Common.prototype = {
	init: function(){
		this.tw;
		this.topmenu = $('.top');
		this.toggle = $('#toggle');
		this.initEvents();
	},

	initEvents: function(){
		var escopo = this;
		escopo.smoothScrolling();
		escopo.autoBreadcrumb();
		escopo.topFix();
		escopo.menuCheck();
	},

	smoothScrolling: function(){
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
				  $('html, body').animate({
					scrollTop: target.offset().top
				  }, 2000, "easeInOutQuint");
				  return false;
				}
			}
		});
	},

	autoBreadcrumb: function(){
		var escopo = this;
		var scrollPoint = [
			$('#home'),
			$('#sobre'),
			//$('#corpo-docente'),
			$('#cronograma'),
			$('#processo-seletivo'),
			$('#investimento'),
			$('#contato')
		];

		$(window).scroll(function(){
			escopo.topFix();
			for(i=0; i<scrollPoint.length; i++){
				var scrollTop = scrollPoint[i].offset().top;
				var margem = Math.abs($(window).scrollTop() - scrollTop);
				if(margem <= 200){
					var url = scrollPoint[i].attr('id');
					window.history.pushState(url, 'DAPX Health | '+url, '#'+url);
					escopo.topmenu.find("a").removeClass("on");
					escopo.topmenu.find("a[href='#"+url+"']").addClass("on");
				}
			}
		});
	},

	topFix: function(){
		var escopo = this;
		if($(window).scrollTop() >= 100){
				escopo.topmenu.addClass("on");
			}else{
				escopo.topmenu.removeClass("on");
			}
	},

	menuCheck: function(){
		var escopo = this;
		$('.top ul li a').click(function(){
			escopo.toggle.attr('checked', false);
		});
	}
}
