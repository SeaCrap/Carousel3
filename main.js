let $allButtons = $('#buttons > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0 //记录当前点 

//克隆
makeFakeSlides()

//初始位置是克隆的第一张 需要把真正的第一张放到初始位置
$slides.css({transform:'translateX(-400px)'})

//监听事件
bindEvents()

//goToSlides ===> 上一张下一张
$(next).on('click',()=>{
  goToSlides(current+1)
})
$(previous).on('click',()=>{
  goToSlides(current-1)
})
// 克隆图片
function makeFakeSlides(){
  //clone(true) 意思是连带子孙元素一起克隆
  $firstCopy = $images.eq(0).clone(true)
  $lastCopy = $images.eq($images.length - 1).clone(true)
  //append()：最后一个元素后追加
  //prepend()：第一个元素前插入
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)  
}

//事件监听
function bindEvents(){
  //事件委托:只有#buttons下的button被点击了才会触发事件 
  $('#buttons').on('click','button',(e)=>{
    let $button = $(e.currentTarget) //当前被点击的按钮
    let index = $button.index()//被点击的是第几个
    goToSlides(index)
  })
}

function goToSlides(index){
  //上一张下一张不能超过length做判断
  if(index > $allButtons.length - 1){
    index = 0
  }else if(index < 0){
    index = $allButtons.length - 1
  }
  //最后一张到第一张
  if(current === $allButtons.length - 1 && index === 0){
    $slides.css({transform:`translateX(${-($allButtons.length + 1) * 400}px)`})
    .one('transitionend',()=>{
      $slides.hide().offset()
      $slides.css({transform:`translateX(${-(index+1) * 400}px)`}).show()
    })
  //第一张到最后一张
  }else if(current === 0 && index === $allButtons.length - 1){
    $slides.css({transform:`translateX(0px)`})
      .one('transitionend',()=>{
        $slides.hide().offset()
        $slides.css({transform:`translateX(${-(index+1) * 400}px)`}).show()
      })
      //其他正常程序走
  }else{
    $slides.css({transform:`translateX(${-(index+1) * 400}px)`})
  }
  current = index
}
