
var screenAnimateElements = {
    // 当前屏幕那些元素有动画   
    '.screen-1' : [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__heading',
        '.screen-2__subheading',
        '.screen-2__phone',
        '.screen-2__point_index_1',
        '.screen-2__point_index_2',
        '.screen-2__point_index_3',
    ],
    '.screen-3' : [
        '.screen-3__heading',
        '.screen-3__subheading',
        '.screen-3__phone',
        '.screen-3__features',
    ],
    '.screen-4' : [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_index_1',    
        '.screen-4__type__item_index_2',    
        '.screen-4__type__item_index_3',    
        '.screen-4__type__item_index_4',    
    ],
    '.screen-5' : [
        '.screen-5__heading',
        '.screen-5__subheading',
        '.screen-5__bg',
    ],
};
function setScreenAnimate(screenCls) {
    var screen = document.querySelector(screenCls); // 获取当前屏的元素
    var animateElements =  screenAnimateElements[screenCls]; // 需要设置动画的元素
    // console.log(animateElements);
    var isSetAnimateClass = false; // 是否有初始化子元素的样式
    
    var isAnimateDone = false; // 当前屏幕下所有子元素的状态是DONE？
    
    screen.onclick = function(){
        
        //  初始化样式，增加init A A_init
        if( isSetAnimateClass === false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
            }
            isSetAnimateClass = true;
            return ;
        }
        //  切换所有 animateElements 的  init -> done   A A_done
        if(isAnimateDone === false){
            for(var i=0;i<animateElements.length;i++){
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
            }
            isAnimateDone = true;
            return ;
        }
    }
}
for(k in screenAnimateElements){
    setScreenAnimate(k);
  }
  