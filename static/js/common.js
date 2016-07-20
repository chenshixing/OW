/**
 * 占位符
 */
;(function($){
  var input = document.createElement('input');
  var hasPl = 'placeholder' in input;

  $.fn.placeholder = function(){
    return $(this).each(function(){
      var that = $(this), pl = $(this).data('pl');
      if(!hasPl && !pl) {
        var placeholder = that.attr('placeholder');
        pl = $('<label />').html(placeholder);
        that.before(pl);
        that.data('pl', pl);

        that.on('blur', function(){
          if($.trim(that.val()) === ''){
            pl.show();
          } else {
            pl.hide();
          }
        })

        that.on('focus', function(){
          pl.hide();
        })
      }
    })
  }

  // $(function(){ $('input[placeholder]').placeholder() })
})(jQuery);

/* 反馈 */
;(function($){

  var App = {
    init: function(){
      this.listen();
    },
    listen: function(){
      $('.j-feedback').on('click', function(e){
        var target = $($(this).data('target'));
        console.log(target)
        target.length && App.show(target);

        e.preventDefault();
      });

      $('.j-feedback-close').on('click', function(e){
        var target = $($(this).data('popup'));
        target && App.hide(target);
        e.preventDefault();
      });

      $('#J_popup_fb input[placeholder]').placeholder()
    },
    show: function(obj){
      obj.show();
    },
    hide: function(obj){
      obj.hide();
    }
  };

  $(document).ready(function(){ App.init(); })
})(jQuery);

// global
$(function() {
  var $items = $('.position-item');
  $('[data-toggle="tab"]').on('click', function(e) {
    e.preventDefault();
    var $target = $(this.hash);
    var $parent = $(this).parent();
    $parent.addClass('active').siblings().removeClass('active');
    $items.stop(true, true).slideUp();
    $target.slideDown();
  })
});