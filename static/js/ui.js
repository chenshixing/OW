/*! frontui v1.0.0
*  by frontpay FE Team
*  (c) 2015-09-15 www.frontpay.cn
*  Licensed under Apache License
*/+function(t){"use strict";t.fn.accordion=function(e){var i={item:"li",target:">div",active:"active",except:!1};return e=t.extend({},i,e),t(this).switcher(e),t(this).each(function(){var i=t(this).find(e.item);t(this).on("select.ui.switcher",function(o){var s=t(o.relatedTarget),n=s.hasClass(e.active),a=i.find(e.target),r=s.find(e.target);!e.except&&a.slideUp(),r.stop()[n?"slideDown":"slideUp"](),o.stopPropagation(),o.preventDefault()})})}}(jQuery),+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),o=i.data("ui.alert");o||i.data("ui.alert",o=new s(this,e)),"string"==typeof e&&o[e].call(t(this))})}var i='[data-dismiss="alert"]',o="em",s=function(e,i){var s=this;"function"==typeof i?t(e).on("click",o,function(){var e=t(this);i(function(){s.close.call(e)})}):t(e).on("click",o,this.close)};s.VERSION="1.0.0",s.TRANSITION_DURATION=150,s.prototype.close=function(e){function i(){var e=t.Event("closed.ui.alert",{relatedTarget:a});a.detach().remove(),o.trigger(e)}var o=t(this),n=t(this).attr("data-target");n||(n=o.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var a=t(n);e&&e.preventDefault(),a.length||(a=o.closest(".alert")),a.trigger(e=t.Event("close.ui.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("uiTransitionEnd",i).emulateTransitionEnd(s.TRANSITION_DURATION):a.fadeOut(s.TRANSITION_DURATION,i))},t.fn.alert=e,t.fn.alert.Constructor=s,t(function(){t(document).on("click.ui.alert",i,s.prototype.close)})}(jQuery),+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),s=i.data("ui.checkAll");s||i.data("ui.checkAll",s=new o(this)),"string"==typeof e&&s[e]()})}var i='[data-toggle="checkAll"]',o=function(e){var i=this;i.$el=t(e),i.$target=t(i.$el.data("target")),i.isReverse=i.$el.data("reverse"),i.$el.on("click",t.proxy(i.isReverse?this.reverse:this.activate,this))};o.VERSION="1.0.0",o.prototype.activate=function(){var e=this.$el.is(":checked"),i=t.Event("checked.ui.checkAll",{relatedTarget:this.$el});this.$target.prop("checked",e),this.$el.trigger(i)},o.prototype.reverse=function(){var e=t.Event("reversed.ui.checkAll",{relatedTarget:this.$el});this.$target.map(function(){return t(this).prop("checked",!this.checked)}),this.$el.trigger(e)},t.fn.checkAll=e,t.fn.checkAll.Constructor=o,t(document).ready(function(){t(i).checkAll()})}(jQuery),+function(t){"use strict";function e(t,e){var o=a(t);c=t.data("active")||c;var s=o.hasClass(c);void 0===e&&i(),s||(o.addClass(c),t.attr("aria-expanded",!0).trigger("show.ui.dropdown",this))}function i(e,i){t(d).each(function(){var o=t(this),n=a(o),r=n.find(d),l=o.attr("data-auto");c=o.data("active")||c,n.hasClass(c)&&(e&&e.isDefaultPrevented()||(i&&l&&s(o,r),n.removeClass(c).find(f).removeClass("hover").show(),o.attr("aria-expanded","false").trigger("hide.ui.dropdown",this).data("currentItem",-1),r.length&&r.trigger("blur")))})}function o(t){i(t,1)}function s(e,i){var o,s=r(e),n=0,a="",l=t.trim(i.val());o=s.filter(function(){return t(this).is(":visible")?(0===n&&(a=t.trim(t(this).text()),n=a==l?1:0),!0):!1}),n||(0===o.length?s.eq(0).trigger("click"):o.eq(0).trigger("click.ui.dropSelect"))}function n(){var e=t(this),i=e.attr("placeholder"),o=t.trim(e.val()),s=r(e);""!==o&&o!==i&&s.hide().filter(function(){var e=t.trim(t(this).text())||"";return e==o&&t(this).addClass("hover"),e.indexOf(o)>-1}).show()}function a(e){var i=t(e).data("target")||t(e).parent();return i}function r(t){var e=a(t);return e.find(f)}function l(t,e){var i=t.parent(),o=t.eq(e).position().top;i.scrollTop(o)}function h(e){return t(this).each(function(){var i=t(this),o=i.data("ui.dropdown");o||i.data("ui.dropdown",o=new g(this)),"string"==typeof e&&o[e].call(t(this))})}var c="active",d='[data-toggle="dropdown"],.form-control-dropdown-value',u='.form-control-dropdown-btn, [data-toggle="dropdown-btn"]',p=".form-control-dropdown-menu",f='.form-control-dropdown-menu li, [role="list"] li',g=function(e){t(e).on("click.ui.dropdown",this.toggle),/input/i.test(e.tagName)&&t(e).on("keyup.ui.dropFilter",this.filter);var i=a(e);i.on("click.ui.dropSelect",f,this.selected(i))};g.VERSION="1.0.0",g.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled,:disabled"))return e(o),!1},g.prototype.keydown=function(e){if(27===e.which)return void i(e);if(/(38|40|27|32|13|46|8)/.test(e.which)){var o=t(this),s=void 0===o.data("currentItem")?-1:o.data("currentItem");if(e.stopPropagation(),!o.is(".disabled, :disabled")){var n=a(o);c=o.data("active")||c;var r=n.hasClass(c);if(!r&&27!=e.which||r&&27==e.which)return 27==e.which&&n.find(d).trigger("focus"),o.trigger("click");var h=n.find(f).filter(":visible");if(h.length){if(13==e.which&&h.filter(".hover").length)return void h.filter(".hover").trigger("click.ui.dropSelect");var u=h.index(e.target)>-1?h.index(e.target):s;38==e.which&&u>=0&&u--,40==e.which&&u<h.length&&u++,0>u&&(u=h.length-1),u>=h.length&&(u=0),l(h,u),o.data("currentItem",u),h.removeClass("hover").eq(u).addClass("hover").trigger("focus")}}}},g.prototype.selected=function(e){var o=e.find(d);return function(e){e.preventDefault(),e.stopPropagation();var s=/input/i.test(o[0].tagName),n=t.trim(t(this)[s?"text":"html"]());return o[s?"val":"html"](n).trigger("selected.ui.dropdown",this),i(),!1}},g.prototype.filter=function(e){if(/input/i.test(e.target.tagName)){var i=t(this),o=t.trim(i.val()),s=r(i);return""===o?void s.show():void(s.length&&s.map(function(){var e=t(this).text();return e.indexOf(o)>-1?t(this).show():t(this).hide()}))}},g.prototype.focusIn=function(i){var o=t(this);e(o,!0)},t.fn.dropdown=h,t.fn.dropdown.Constructor=g,t(function(){t(d).dropdown(),t(document).on("click.ui.dropdown",o).on("click.ui.dropdown-btn",u,function(e){var i=t(this).siblings(d);return i.length&&i.dropdown("toggle"),!1}).on("click.ui.dropdown",p,function(t){return t.stopPropagation(),!1}).on("focus.ui.dropdown",d,n).on("keydown.ui.dropdown",d,g.prototype.keydown)})}(jQuery),+function(t){"use strict";function e(e,o){if(!t(this).length&&e&&/^#(\w*)/gi.test(t(this).selector)){var s,n;"string"==typeof e&&(n=e,e={title:"标题",content:""}),e.mid=t(this).selector.replace(/^#/g,"");var a=i.CreateModal(e);a.data("mid",e.mid);var r=t.extend({},i.DEFAULTS,"object"==typeof e&&e);return a.data("ui.modal",s=new i(a,r)),n&&"function"==typeof s[n]&&s[n](o),e.callback&&e.callback.call(a),s.show(o),t(this)}return t(this).each(function(){var s=t(this),n=s.data("ui.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("ui.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&(a.title&&n.setTitle(a.title),a.content&&n.setContent(a.content),n.show(o))})}var i=function(e,i){this.$el=t(e),this.options=i,this.$body=t(document.body),this.$dialog=this.$el.find(".modal-wrap"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.options.remote&&this.$el.find(".modal-body").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.ui.modal")},this))};i.VERSION="1.0.0",i.TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.TEMPLATE=['<div class="modal-background fade" id="{{mid}}">','<div class="modal-layer">','<div class="modal-position">','<div class="modal-wrap">','<div class="modal-head">','<span class="modal-title">{{title}}</span>','<button class="modal-close">',"<i></i>","</button>","</div>",'<div class="modal-body">',"{{content}}","</div>","</div>","</div>","</div>","</div>"].join(""),i.CreateModal=function(e){var o,s=t(document.body);return e&&"object"==typeof e&&(o=i.TEMPLATE.replace(/{{(\w*)}}/gi,function(i,o){return e[o]&&"string"==typeof e[o]?/^(\.|#)\w*/gi.test(e[o])?t(e[o]).html():e[o]:e[o]&&e[o].length&&e.length>0?e[o].html():void 0}),o=t(o).hide().appendTo(s)),o},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.ui.modal",{relatedTarget:e});if(!this.isShown&&!s.isDefaultPrevented()){this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$el.on("click.dismiss.ui.modal",'[data-dismiss="modal"],.modal-close',t.proxy(this.hide,this));var n=t.support.transition&&o.$el.hasClass("fade");o.$el.show().scrollTop(0).attr("tabindex",-1),o.adjustDialog(),n&&o.$el[0].offsetWidth,o.enforceFocus(),n?(o.$el.addClass("in").attr("aria-hidden",!1),o.$dialog.one("uiTransitionEnd",function(){o.$el.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION)):o.$el.hide().addClass("in").attr("aria-hidden",!1).fadeIn(i.TRANSITION_DURATION,function(){t(this).trigger("focus").trigger(s)}).attr("aria-hidden",!1)}},i.prototype.hide=function(e){e&&e.preventDefault();var o=this;(this.$el.is(":visible")||this.isShown)&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.ui.modal").off("keydown.ui.modal"),this.$el.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.ui.modal").off("mouseup.dismiss.ui.modal"),this.$dialog.off("mousedown.dismiss.ui.modal"),t.support.transition&&this.$el.hasClass("fade")?this.$el.one("uiTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):function(){o.$el.fadeOut(i.TRANSITION_DURATION,function(){o.hideModal()})}())},i.prototype.close=function(e){t(e).data("ui.modal").hide()},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$el.on("keydown.dismiss.ui.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$el.off("keydown.dismiss.ui.modal")},i.prototype.hideModal=function(){var e=this,i=t.Event("hide.ui.modal",{relatedTarget:e.$el});e.$el.hide(),e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$el.trigger(i)},i.prototype.resize=function(){},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){return},i.prototype.resetAdjustments=function(){this.$el.css({paddingLeft:"",paddingRight:""})},i.prototype.enforceFocus=function(){t(document).off("focusin.ui.modal").on("focusin.ui.modal",t.proxy(function(t){this.$el[0]===t.target||this.$el.has(t.target).length||this.$el.trigger("focus")},this))},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e},i.prototype.setContent=function(t){var e=this.$el.find(".modal-body");e.length&&e.html(t||"")},i.prototype.setTitle=function(t){var e=this.$el.find(".modal-title");e.length&&e.html(t||"")},i.prototype.layerUpdate=function(t){var e,i=this.$el;for(var o in t)"buttons"!=o&&(e=i.find('[role="'+o+'"]'),"icon"==o?e.attr("class","notice-wrap "+t[o]+" in-modal"):i.find('[role="'+o+'"]').html(t[o]))},t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.showLoading=function(e,i){var e=e||"处理中...",i=i||"请不要关闭浏览器，系统正在处理";if(t(this).length)e&&t(this).find(".modal-body h3").html(e),i&&t(this).find(".loading-content").html(i),t(this).modal("show");else{var o=['<div class="notice-wrap waiting in-modal">','<div class="notice-box">','<span class="notice-img"></span>',"<h3>"+e+"</h3>",'<div class="loading-content">'+i+"</div>","</div>","</div>"].join("");t(this).modal({title:"提示",content:o,callback:function(){t(this).find(".modal-close").hide()}})}},t.fn.hideLoading=function(){t(this).length&&t(this).modal("hide")},t.fn.modalLayer=function(e){var i,o={icon:"success",title:"成功",content:"",buttons:[{text:"确定",href:!1,style:"btn primary",target:!1,ok:t.noop}]},s=t(this);if(s.length){var n=s.data("ui.modal"),a=s.data("options");i=t.extend(o,a,e),n&&"object"==typeof i&&n.layerUpdate(i),s.modal("show")}else{i=t.extend({},o,e);for(var r=['<div class="notice-wrap '+i.icon+' in-modal" role="icon">','<div class="modalLayer notice-box">','<span class="notice-img"></span>','<h3 role="title" class="modalLayer-title '+(""==t.trim(i.content)?"fn-mt-20":"")+'">'+i.title+"</h3>",'<div class="modalLayer-content" role="content">'+i.content+"</div>","</div>","</div>",'<div class="in-modal-btns text-align-center">',"</div>"],l=[],h=i.buttons,c=0;c<h.length;c++)h[c].href?l.push('<a href="'+h[c].href+'" '+(h[c].target?'target="'+h[c].target+'"':"")+' class="'+(h[c].style||"btn primary")+'" data-index="'+c+'">'+h[c].text+"</a>"):l.push('<button type="button" class="'+(h[c].style||"btn primary")+'" data-index="'+c+'">'+h[c].text+"</button>");r.splice(-1,0,l.join("")),s=t(this).modal({title:"提示",content:r.join(""),callback:function(e){t(this).on("click",".in-modal-btns .btn",function(){var e=t(this).data("index"),o=!0;i.buttons.length&&i.buttons[e]&&i.buttons[e].ok&&i.buttons[e].ok&&"function"==typeof i.buttons[e].ok&&(o=i.buttons[e].ok.call(null,t(this),e)===!1?!1:!0),t(s.selector).data("options",i),o&&t(s.selector).modal("hide")})}})}};var o=function(){t(document).on("click.ui.modal",'[data-toggle="modal"]',function(i){var o=t(this),s=t(this).attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("ui.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());e.call(n,a,this)})};t(document).ready(o)}(jQuery),+function(t){"use strict";function e(e){return t(this).on("click",function(){e="string"==typeof e?{message:e}:e;var t=new a(e);t.show()})}var i={},o={},s=function(e){return"string"==typeof e&&(e={message:e}),arguments[1]&&(e=t.extend(e,"string"==typeof arguments[1]?{status:arguments[1]}:arguments[1])),new a(e).show()},n=function(t,e){var i;if(t)for(i in o)t===o[i].group&&o[i].close(e);else for(i in o)o[i].close(e)},a=function(e){this.timeout=!1,this.currentStatus="",this.group=!1,this.options=t.extend({},a.DEFAULTS,e),this.uuid="Notify_"+Math.random().toString(36).substr(2),this.$el=t(['<div class="notify-message">','<a class="notify-close">&times;</a>',"<div></div>","</div>"].join("")).data("ui.notify",this),this.content(this.options.message),this.options.status&&(this.$el.addClass("notify-message-"+this.options.status),this.currentStatus=this.options.status),this.group=this.options.group,o[this.uuid]=this,i[this.options.pos]||(i[this.options.pos]=t('<div class="notify notify-'+this.options.pos+'"></div>').appendTo(t("body")).on("click",".notify-message",function(){var e=t(this).data("ui.notify");e.$el.trigger("manualclose.ui.notify",[e]),e.close()}))};a.VERSION="1.0.0",a.DEFAULTS={message:"",status:"",opacity:.85,timeout:5e3,group:null,pos:"top-center",onClose:function(){}},a.prototype.show=function(){if(!this.$el.is(":visible")){var t=this;i[this.options.pos].show().prepend(this.$el);var e=parseInt(this.$el.css("margin-bottom"),10);return this.$el.css({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0}).animate({opacity:this.options.opacity,"margin-top":0,"margin-bottom":e},function(){if(t.options.timeout){var e=function(){t.close()};t.timeout=setTimeout(e,t.options.timeout),t.$el.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(e,t.options.timeout)})}}),this}},a.prototype.close=function(t){var e=this,s=function(){e.$el.remove(),i[e.options.pos].children().length||i[e.options.pos].hide(),e.options.onClose.apply(e,[]),e.$el.trigger("close.ui.notify",[e]),delete o[e.uuid]};this.timeout&&clearTimeout(this.timeout),t?s():this.$el.animate({opacity:0,"margin-top":-1*this.$el.outerHeight(),"margin-bottom":0},function(){s()})},a.prototype.content=function(t){var e=this.$el.find(">div");return t?(e.html(t),this):e.html()},a.prototype.status=function(t){return t?(this.$el.removeClass("nofity-message-"+this.currentStatus).addClass("notify-message-"+t),this.currentStatus=t,this):this.currentStatus},t.notify=s,t.notify.closeAll=n,t.fn.notify=e,t.fn.notify.Constructor=a}(jQuery),+function(t){"use strict";function e(e){var i=arguments;return t(this).each(function(){var o=t(this),n=o.data("ui.pagination");n||o.data("ui.pagination",n=new s(o,t.extend({},o.data(),e))),"string"==typeof e&&n[e].apply(n,[].slice.call(i,1))})}var i="active",o='<p class="pull-left fs-12 lh-26">共{$pages}页，{$items}条记录，每页显示{$itemsOnPage}条。</p>',s=function(e,i){this.$el=t(e),this._init(i)};s.VERSION="1.0.0",s.DEFAULTS={items:1,itemsOnPage:1,pages:0,displayedPages:8,edges:1,currentPage:0,pageStr:{show:!1,template:""},lblPrev:"上一页",lblNext:"下一页",onSelectPage:function(){}},s.prototype._init=function(e,i){var o=this;this._setOption(e),o.itemsOnPage=this.options.itemsOnPage,o.items=this.options.items,o.current=this.options.currentPage,o.pages=o.options.pages?o.options.pages:Math.ceil(o.items/this.itemsOnPage)?Math.ceil(o.items/o.itemsOnPage):1,o.currentPage=o.options.currentPage-1,o.halfDisplayed=o.options.displayedPages/2,o._render(),!i&&o.$el.on("click","a[data-page]",function(e){e.preventDefault(),o.selectPage(t(this).data("page"))})},s.prototype.init=function(t){this._init(t,!0)},s.prototype._setOption=function(e){this.options=t.extend({},s.DEFAULTS,e)},s.prototype.selectPage=function(t,e){this.currentPage=t-1,this.current=t,this.render(e),this.options.onSelectPage(t,this),this.$el.trigger("select.ui.pagination",[t,this])},s.prototype._render=function(){var t,e=this.options,i=this._getInterval();if(this.$el.empty().prevAll().remove(),!(this.pages<=1)){if(e.lblPrev&&this.currentPage-1>=0&&this._append(this.currentPage-1,{text:e.lblPrev},!0),i.start>0&&e.edges>0){var o=Math.min(e.edges,i.start);for(t=0;o>t;t++)this._append(t);e.edges<i.start&&i.start-e.edges!=1?this.$el.append("<li><span>...</span></li>"):i.start-e.edges==1&&this._append(e.edges)}for(t=i.start;t<i.end;t++)this._append(t);if(i.end<this.pages&&e.edges>0){this.pages-e.edges>i.end&&this.pages-e.edges-i.end!=1?this.$el.append("<li><span>...</span></li>"):this.pages-e.edges-i.end==1&&this._append(i.end++);var s=Math.max(this.pages-e.edges,i.end);for(t=s;t<this.pages;t++)this._append(t)}e.lblNext&&this.currentPage<this.pages-1&&this._append(this.currentPage+1,{text:e.lblNext},!0),this.renderPageStr()}},s.prototype.renderPageStr=function(){if(this.options.pageStr&&this.options.pageStr.show){var e=this,i=e.$el.prevAll(),s=this.options.pageStr.template||o;s=s.replace(/{\$(\w*)}/gi,function(t,i,o){return e[i]?e[i]:0}),i.length&&i.remove(),e.$el.before(t(s))}},s.prototype.render=function(t){this.pages=t?t:this.pages,this._render()},s.prototype._getInterval=function(){return{start:Math.ceil(this.currentPage>this.halfDisplayed?Math.max(Math.min(this.currentPage-this.halfDisplayed,this.pages-this.options.displayedPages),0):0),end:Math.ceil(this.currentPage>this.halfDisplayed?Math.min(this.currentPage+this.halfDisplayed,this.pages):Math.min(this.options.displayedPages,this.pages))}},s.prototype._append=function(e,o,s){var n,a,r=this;e=0>e?0:e<this.pages?e:this.pages-1,a=t.extend({text:e+1},o),n=e==this.currentPage?"<li "+(s?"":'class="'+i+'"')+'><a href="javascript:void(0);">'+a.text+"</a></li>":'<li><a href="#page-'+(e+1)+'" data-page="'+(e+1)+'">'+a.text+"</a></li>",r.$el.append(n)},t.fn.pagination=e,t.fn.pagination.Constructor=s,t(document).ready(function(){t("[ui-pagination],.pagination").pagination()})}(jQuery),+function(t){"use strict";function e(){return t(this).each(function(){var e=t(this),i=e.data("ui.placeholder");i||e.data("ui.placeholder",i=new n(this))})}var i="input[placeholder]",o=document.createElement("input"),s="placeholder"in o,n=function(e){var i=this;i.$el=t(e),this.init()};n.VERSION="1.0.0",n.prototype.init=function(){if(!s){var e=this;if(this.$placeholder=e.$el.data("placeholder"),!s&&!this.$placeholder){var i=e.$el.attr("placeholder");e.$placeholder=t('<label class="form-placeholder" />').html(i),e.$el.data("placeholder",e.$placeholder).before(e.$placeholder)}e.$el.on("focus",t.proxy(this.focus,this)),e.$el.on("blur",t.proxy(this.blur,this)),e.$placeholder.on("click",t.proxy(this.focus,this))}},n.prototype.focus=function(){this.$placeholder.hide()},n.prototype.blur=function(){this.$placeholder[""===t.trim(this.$el.val())?"show":"hide"]()},t.fn.placeholder=e,t.fn.placeholder.Constructor=n,t(document).ready(function(){t(i).placeholder()})}(jQuery),+function(t,e){"use strict";function i(e,i){this.length;return this.each(function(o){var n=t(this),a=n.data(),r=n.data("ui.slider");r||(e=t.extend({},e,a),r=(new s).init(n,e),n.data("ui.slider",r)),i=t.extend({},i,a),"string"==typeof e&&r[e]&&r[e](n,i)})}var o='[data-toggle="slider"]';if(!t)return e;var s=function(){this.el=e,this.items=e,this.sizes=[],this.max=[0,0],this.current=0,this.interval=e,this.opts={speed:500,delay:e,complete:e,keys:e,dots:e,fluid:!e,prev:e,next:e,arrows:e};var i=this;this.init=function(e,i){return this.el=e,this.ul=e.children("ul"),this.max=[e.outerWidth()||e.parent().outerWidth(),e.outerHeight()||e.parent().outerHeight()],this.items=this.ul.children("li").each(this.calculate),this.opts=t.extend(this.opts,i),this.setup(),this},this.calculate=function(e){var o=t(this),s=o.outerWidth(),n=o.outerHeight();i.sizes[e]=[s,n],s>i.max[0]&&(i.max[0]=s),n>i.max[1]&&(i.max[1]=n)},this.setup=function(){var o=t.Event("init.ui.slider",{relatedTarget:this.el});if(this.el.css({overflow:"hidden",width:i.max[0],height:this.items.first().outerHeight()}),this.ul.css({width:100*this.items.length+"%",position:"relative"}),this.items.css("width",100/this.items.length+"%"),this.opts.delay!==e&&(this.start(),this.el.hover(this.stop,this.start)),this.opts.keys&&t(document).keydown(this.keys),this.opts.dots&&this.dots(),this.opts.fluid){var s=function(){i.el.css("width",Math.min(Math.round(i.el.width()/i.el.parent().width()*100),100)+"%")};s(),t(window).off("resize.ui.slider").on("resize.ui.slider",s)}this.opts.arrows&&this.el.parent().append('<p class="arrows"><span class="prev">'+(this.opts.prevText||"prev")+'</span><span class="next">'+(this.opts.nextText||"next")+"</span></p>").find(".arrows span").off("click").on("click",function(){t.isFunction(i[this.className])&&i[this.className]()}),this.opts.prev&&t(this.opts.prev).off("click").on("click",t.proxy(this.prev,this)),this.opts.next&&t(this.opts.next).off("click").on("click",t.proxy(this.next,this)),t.event.swipe&&this.el.off("swipeleft").on("swipeleft",i.prev).off("swiperight").on("swiperight",i.next),this.el.trigger(o)},this.move=function(e,o){this.items.eq(e).length||(e=0),0>e&&(e=this.items.length-1);var s=this.items.eq(e),n={height:s.outerHeight()},a=o?5:this.opts.speed,r=t.Event("move.ui.slider",{relatedTarget:s,curIndex:e});this.ul.is(":animated")||(i.el.find(".dot:eq("+e+")").addClass("active").siblings().removeClass("active"),this.el.animate(n,a).trigger(r)&&this.ul.animate(t.extend({left:"-"+e+"00%"},n),a,function(s){i.current=e,t.isFunction(i.opts.complete)&&!o&&i.opts.complete(i.el)}))},this.start=function(){i.interval=setInterval(function(){i.move(i.current+1)},i.opts.delay)},this.stop=function(){return i.interval=clearInterval(i.interval),i},this.keys=function(e){var o=e.which,s={37:i.prev,39:i.next,27:i.stop};t.isFunction(s[o])&&s[o]()},this.next=function(t){return t&&t.preventDefault(),i.stop().move(i.current+1)},this.prev=function(t){return t&&t.preventDefault(),i.stop().move(i.current-1)},this.dots=function(){var e='<ol class="dots">';t.each(this.items,function(t){e+='<li class="dot'+(1>t?" active":"")+'">'+(t+1)+"</li>"}),e+="</ol>",this.el.addClass("has-dots").append(e).find(".dot").off("click").on("click",function(){i.move(t(this).index())})}};t.fn.slider=i,t.fn.slider.Constructor=s,t(document).ready(function(){t(o).slider()})}(jQuery,!1),+function(t){"use strict";function e(e){return function(){var i=t.Event("done.ui.smoothscroll",{relatedTarget:e});e.trigger(i)}}function i(i,o,n){n=t.extend({},s.DEFAULTS,n);var a=o.offset().top-n.offset,r=t(document).height(),l=t(window).height();a+l>r&&(a=r-l),t("html,body").stop().animate({scrollTop:a},n.duration,n.transition).promise().done([n.complete,e(i)])}function o(e){return t(this).each(function(){var i=t(this),o=i.data("ui.smoothScroll");o?i.trigger("click.ui.smoothScroll"):i.data("ui.smoothScroll",new s(this,t.extend({},i.data(),e)))})}t.easing.easeOutExpo||(t.easing.easeOutExpo=function(t,e,i,o,s){return e==s?i+o:o*(-Math.pow(2,-10*e/s)+1)+i});var s=function(e,i){this.$el=t(e),this.options=i,this.init()};s.VERSION="1.0.0",s.DEFAULTS={duration:500,transition:"easeOutExpo",offset:0,complete:t.noop},s.prototype.init=function(){this.$el.on("click.ui.smoothScroll",this.scroll(this.$el,this.options))},s.prototype.scroll=function(e,o){return function(s){s.preventDefault(),i(e,t(t(this.hash).length?this.hash:"body"),o)}},t.fn.smoothScroll=o,t.fn.smoothScroll.Constructor=s,t(document).ready(function(){t('[data-toggle="smooth-scroll"]').smoothScroll()})}(jQuery),+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),s=i.data("ui.switcher");s||i.data("ui.switcher",s=new o(this,e)),"string"==typeof e&&s[e]()})}var i='[data-toggle="switcher"]',o=function(e,i){var s=this;this.$el=t(e),this.option=t.extend({},o.DEFAULTS,i,this.$el.data()),this.$el.on("click.ui.switcher",this.option.item,function(e){e.stopPropagation(),e.preventDefault(),s.select(t(this))})};o.VERSION="1.0.0",o.DEFAULTS={item:"li",active:"active",except:!1,keep:!1},o.prototype.select=function(e){var i=this.option,o=t.Event("select.ui.switcher",{relatedTarget:e});i.keep&&e.hasClass(i.active)||(e.toggleClass(i.active).trigger(o),i.except||e.siblings(i.item).removeClass(i.active))},t.fn.switcher=e,t.fn.switcher.Constructor=o,t(document).ready(function(){t(i).switcher()})}(jQuery),+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),s=i.data("ui.tab");s||i.data("ui.tab",s=new o(this)),"string"==typeof e&&s[e]&&s[e]()})}var i='[data-toggle="tab"],.tabs-btn',o=function(e){this.$el=t(e)};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.prototype.show=function(){var e=this.$el,i=e.closest(".tabs"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.hasClass("active")){var s=i.find(".active a"),n=t.Event("hide.ui.tab",{relatedTarget:e[0]}),a=t.Event("show.ui.tab",{relatedTarget:s[0]});if(s.trigger(n),e.trigger(a),!a.isDefaultPrevented()&&!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.ui.tab",relatedTarget:e[0]}),e.trigger({type:"shown.ui.tab",relatedTarget:s[0]})})}}},o.prototype.activate=function(e,s,n){function a(){r.removeClass("active").find(i).attr("aria-expanded",!1),e.addClass("active").find(i).attr("aria-expanded",!0),l?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),n&&n()}var r=s.find("> .active"),l=n&&t.support.transition&&(r.length&&r.hasClass("fade")||!!s.find("> .fade").length);r.length&&l?r.one("uiTransitionEnd",a).emulateTransitionEnd(o.TRANSITION_DURATION):a(),r.removeClass("in")},t.fn.tab=e,t.fn.tab.Constructor=o;var s=function(i){t(i.target).hasClass("tab-disabled")||(i.preventDefault(),e.call(t(this),"show"))};t(function(){t(document).on("click.ui.tab",i,s)})}(jQuery),+function(t){"use strict";function e(e){return t(this).each(function(){var i=t(this),s=i.data("ui.tooltips");s||i.data("ui.tooltips",s=new o(this,e)),"string"==typeof e&&s[e]()})}var i='[data-toggle="tooltips"]',o=function(e,i){this.$el=t(e),this.options=t.extend({},o.DEFAULTS,this.$el.data(),i&&"object"==typeof i),this.$tooltip=null,this.content="",this.tooltipdelay=null,this.checkdelay=null,this.init()};o.VERSION="1.0.0",o.TRANSITION_DURATION=150,o.DEFAULTS={offset:9,pos:"top",animation:!0,delay:0,cls:"",active:"active",content:function(t,e){return e=t.attr("title"),e&&t.data("cached-title",e).removeAttr("title"),t.data("cached-title")}},o.prototype.init=function(){var e=this;e.$tooltip||(e.$tooltip=t('<div class="tooltips"><div class="tooltips-inner"></div><span class="tips-arrow-border"></span><span class="tips-arrow"></span></div>').appendTo("body")),e.$el.on({focus:function(){e.show()},blur:function(){e.hide()},mouseenter:function(){e.show()},mouseleave:function(){e.hide()}})},o.prototype.show=function(){if(this.content="function"==typeof this.options.content?this.options.content(this.$el):this.options.content,this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.content.length){this.$tooltip.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.active).show(),this.$tooltip.find(".tooltips-inner").html(this.content);var e=this,i=t.extend({},this.$el.offset(),{width:this.$el[0].offsetWidth,height:this.$el[0].offsetHeight}),o=this.$tooltip[0].offsetWidth,s=this.$tooltip[0].offsetHeight,n="function"==typeof this.options.offset?this.options.offset.call(this.$el):this.options.offset,a="function"==typeof this.options.pos?this.options.pos.call(this.$el):this.options.pos,r=a.split("-"),l={display:"none",visibility:"visible",top:i.top+i.height+s,left:i.left},h={bottom:{top:i.top+i.height+n,left:i.left+i.width/2-o/2},top:{top:i.top-s-n,left:i.left+i.width/2-o/2},left:{top:i.top+i.height/2-s/2,left:i.left-o-n},right:{top:i.top+i.height/2-s/2,left:i.left+i.width+n}};t.extend(l,h[r[0]]),2==r.length&&(l.left="left"==r[1]?i.left:i.left+i.width-o);var c=this.checkBoundary(l.left,l.top,o,s);if(c){switch(c){case"x":a=2==r.length?r[0]+"-"+(l.left<0?"left":"right"):l.left<0?"right":"left";break;case"y":a=2==r.length?(l.top<0?"bottom":"top")+"-"+r[1]:l.top<0?"bottom":"top";break;case"xy":a=2==r.length?(l.top<0?"bottom":"top")+"-"+(l.left<0?"left":"right"):l.left<0?"right":"left"}r=a.split("-"),t.extend(l,h[r[0]]),2==r.length&&(l.left="left"==r[1]?i.left:i.left+i.width-o)}l.left-=t("body").position().left,this.tooltipdelay=setTimeout(function(){e.$tooltip.css(l).attr("class",["tooltips","tooltips-"+a,e.options.cls].join(" ")),e.options.animation?e.$tooltip.css({opacity:0,display:"block"}).addClass(e.options.active).animate({opacity:1},parseInt(e.options.animation,10)||400):e.$tooltip.show().addClass(e.options.active),e.tooltipdelay=!1,e.checkdelay=setInterval(function(){e.$el.is(":visible")||e.hide()},150)},parseInt(this.options.delay,10)||0)}},o.prototype.hide=function(){if(!this.$el.is("input")||this.$el[0]!==document.activeElement)if(this.tooltipdelay&&clearTimeout(this.tooltipdelay),this.checkdelay&&clearTimeout(this.checkdelay),this.$tooltip.stop(),this.options.animation){var t=this;this.$tooltip.fadeOut(parseInt(this.options.animation,10)||400,function(){t.$tooltip.removeClass(t.options.active)})}else this.$tooltip.hide().removeClass(this.options.active)},o.prototype.checkBoundary=function(e,i,o,s){var n="";return(0>e||e-t(document).scrollLeft()+o>t(window).width())&&(n+="x"),(0>i||i-t(document).scrollTop()+s>t(window).height())&&(n+="y"),n},t.fn.tooltips=e,t.fn.tooltips.Constructor=o;var s=function(){t(this).tooltips("show")};t(function(){t(document).on("mouseenter.tooltip.ui focus tooltip.ui",i,s)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("ui"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("uiTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.uiTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);