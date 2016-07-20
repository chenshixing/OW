/*! 
 * by tommyshao
 * 2016-03-16
*/

// css3扩展
;(function($){
    function supportTransition() {
        var el = document.createElement('ui')

        var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            transition       : 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] }
            }
        }

        return false // explicit for ie8 (  ._.)
    }

    var setOpt = function(attr, value) {
        var prefix = ['-webkit-', '-moz-', '-ms-', '-o-'],
            props = {},
            i = 0;

        props[attr] = value;    
        for(; i < prefix.length; i++) {
            props[prefix[i]+attr] = value;
        }

        return props;
    }; 
    $.fn.css3 = function(attr, value) {
        return $(this).each(function() {
            $(this).css(setOpt(attr, value))
        });
    }

    $.supportTransition = supportTransition();
})(jQuery);

$(function() {
    // 变量参数
    var pic2Scroll = { 'introduce': '0', 'case': '-25%'},
        pic2Index = {'introduce': 0, 'case': 1}
        pic3Scroll = { 'introduce': '0', 'scene': '-25%', 'case': '-50%' },
        pic3Index = { 'introduce': 0, 'scene': 1, 'case': 2 },
        pathsId = {
            'accountsReceivable': 1,
            'insurance': 2,
            'housingLoan': 3,
            'creditable': 4,
            'receipt': 5,
            'investment': 1,
            'prepayment': 2,
            'ecommerce': 3,
            'guarantee': 4,
            'deduction': 5,
            'memberPrepay': 6,
            'settlement': 7
        };

    // loayImg
    function lazyImg() {
        var self = $(this);
        if(self[0].tagName.toUpperCase() === 'IMG') {
            self.attr('src', function(){ return $(this).attr('data-src')})
        } else {
            self.find('img').map(lazyImg);
        }

        return this;
    }

    // 所有路由
    var allRoutes = function() {
        // 路由地址
        var route = window.location.hash.slice(2);
        // id 当前路由编号(供应链融资), oid 兄弟频道路由编号(债权支付)
        var id = 2, oid = 3;

        // 路由为债权支付
        if(route.indexOf('debtPay') > -1) {
            // 交换编号
            id = 3, oid = 2;
        }
    // ---- 第一层路由 action 动作
        // 隐藏主页图片,进入频道
        $('.pic1,.pic'+ oid).addClass('exit');
        // 显示放大第一级图片,内容
        $('.pic'+ id +', .pic'+ id +'-content, .pic'+ id +'-info-img').addClass('open-pic'+ id +'-content').map(lazyImg);

    // ---- 第二层+ action 动作
        if(route.indexOf('/') === -1) {
            // 显示隐藏遮罩层,由第三级路径返回的情况触发
            $('.solution-content-shadow').removeClass('active');
            $('.solution-slider-wrap').removeClass('ss-part-show');
            $('.ss-tab-wrap').addClass('ss-tab-exit');
        }
    };

    // 单独处理路由
    var routes = {
        '/:root' : {
            // 一级由 allRoutes 触发
            on: function(){
                $('.back-to-fs').fadeIn();
            },
            // 三级目录
            '/:path/:param': function(path, param, value) {
                // id 元素标识
                // domId 第一级频道元素标识
                // moveLeft 移动切换的数值
                var id = pathsId[param] || 1,
                    domId = 2, 
                    idx = pic2Index[value] || 0,
                    moveLeft = pic2Scroll[value],
                    viewW = $(window).width() * 4;

                $('.back-to-fs').fadeOut();

                // 债权支付    
                if(path === 'debtPay') {
                    domId = 3, moveLeft = pic3Scroll[value], idx = pic3Index[value];
                }    

                // 显示详情屏,并针对路径进行切换
                if($.supportTransition) {
                    $('#pic'+ domId +'-content-'+ id).addClass('ss-part-show').map(lazyImg).find('.ss').css3('transform', 'translate('+ moveLeft +', 0)');
                } else { // ie8
                    $('#pic'+ domId +'-content-'+ id).addClass('ss-part-show').map(lazyImg).find('.ss').animate({'margin-left':  parseInt(moveLeft) * viewW / 100 + 'px'}, 500);
                }

                // 显示遮罩层
                $('.solution-content-shadow').addClass('active');
                // 导航展开
                $('.pic'+ domId +'-content .ss-tab-wrap').eq(id - 1).removeClass('ss-tab-exit').addClass('ss-tab-in').map(lazyImg);
                // 导航高亮
                $('#pic'+ domId+'-nav'+ id).find('li').removeClass('curr').eq(idx).addClass('curr');
            }
        }
      };

      // 详细页左右切换
      function navigatorTab(dir) {
        // 左右切换
        var linkClick = function(dir) {
            // dir 1 - next
            //     0 - prev
            return function() {
                // 对应导航
                var $target = $($(this).attr('data-target'));
                // 上一个高亮项
                var $activeNav = $target.find('.curr');
                // 下一个高亮项
                var $targetNav = $activeNav[dir > 0 ? 'next' : 'prev']('li');
                // 下一个高亮项存在还没到边界
                if(!$targetNav.length) { // 无限循环
                    // 去掉上一个高亮
                    //$activeNav.removeClass('curr');
                    // 当前高亮
                    //$targetNav.addClass('curr');
                    // 触发当前高亮导航链接点击,实现 url 跳转
                    //$targetNav.find('a')[0].click();
                    $targetNav = $activeNav.siblings()[dir > 0 ? 'first' : 'last']();
                }

                // 触发当前高亮导航链接点击,实现 url 跳转
                $targetNav.find('a')[0].click();
            }
            
        };
        // 下一个
        $(document).on('click', '.ss-next', linkClick(1));
        // 上一个
        $(document).on('click', '.ss-prev', linkClick(0));
        // 导航
        $(document).on('click', '.ss-tab-ul a', function() {
            $(this).parent('li').addClass('curr').siblings().removeClass('curr');
        });
      }

      // 清除动画

      // 绑定路由
      var router = Router(routes);
      router.configure({
        on: allRoutes 
      });
      router.init();
      // 绑定左右切换
      navigatorTab();
});