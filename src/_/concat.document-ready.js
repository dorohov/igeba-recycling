$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1});
$("img").addClass("img-responsive");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")});
"use strict";$(function(){var s=$('[data-slider-slick="slick-header"]'),o=$('[data-slider-slick="slick-catalog-cold"]'),i=$('[data-slider-slick="slick-catalog-hot"]'),e=$('[data-slider-slick="slick-articles"]'),t=$('[data-slider-slick="slick-reviews"]'),l=$('[data-slider-slick="slick-video"]'),r=$(".tabs__link.tabs--catalog-hot"),n=$(".tabs__link.tabs--reviews"),d=$(".tabs__link.tabs--video"),c='<button type="button" class="slick-prev  is--horizontal"><svg class="icon-svg icon-slick-left" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#slick-left"></use></svg></button>',a='<button type="button" class="slick-next  is--horizontal"><svg class="icon-svg icon-slick-right" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/wp-content/themes/azbn7theme/img/svg/sprite.svg#slick-right"></use></svg></button>';s.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,infinite:!0,prevArrow:c,nextArrow:a,fade:!0,responsive:[{breakpoint:1025,settings:{dots:!1}}]}),o.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,infinite:!1,prevArrow:c,nextArrow:a,responsive:[{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),r.on("shown.bs.tab",function(s){i.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,infinite:!1,prevArrow:c,nextArrow:a,responsive:[{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),e.slick({dots:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,infinite:!1,responsive:[{breakpoint:1199,settings:{dots:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{dots:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}],prevArrow:c,nextArrow:a}),n.on("shown.bs.tab",function(s){t.slick({dots:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,infinite:!1,responsive:[{breakpoint:1024,settings:{dots:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}],prevArrow:c,nextArrow:a})}),d.on("shown.bs.tab",function(s){l.slick({dots:!0,slidesToShow:2,slidesToScroll:2,arrows:!0,infinite:!1,responsive:[{breakpoint:1024,settings:{dots:!1}},{breakpoint:480,settings:{dots:!1,slidesToShow:1,slidesToScroll:1}}],prevArrow:c,nextArrow:a})})});
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');