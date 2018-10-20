let $allButtons = $('#buttons > button')
let $slides = $('#slides')
let $images = $slides.children('img')
//clone(true) 意思是连带子孙元素一起克隆
$firstCopy = $images.eq(0).clone(true)
$lastCopy = $images.eq($images.length - 1).clone(true)
//append()：最后一个元素后追加
//prepend()：第一个元素前插入
$slides.append($firstCopy)
$slides.prepend($lastCopy)

//因为当前
$slides.css({transform:'translateX(-400px)'})


let current = 0 //记录当前点 
$allButtons.eq(0).on('click',()=>{
  if(current === 2){
    console.log('说明是从最后一张过来的')
    $slides.css({transform:'translateX(-1600px)'})
    current = 0 // 去了哪里
  }else{
      $slides.css({transform:'translateX(-400px)'})
      current = 0 // 去了哪里
  }

})
$allButtons.eq(1).on('click',()=>{
  console.log(current)
  $slides.css({transform:'translateX(-800px)'})
  current = 1
})
$allButtons.eq(2).on('click',()=>{
  if(current === 0){
    console.log('说明是从第一张过来的')
  }
  $slides.css({transform:'translateX(-1200px)'})
  current = 2
})
