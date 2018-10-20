let $allButtons = $('#buttons > button')
let $images = $('#images')
let $allImages = $images.children('img')
//clone(true) 意思是连带子孙元素一起克隆
$firstCopy = $images.eq(0).clone(true)
$lastCopy = $images.eq($images.length - 1).clone(true)
//append()：最后一个元素后追加
//prepend()：第一个元素前插入
$images.append($firstCopy)
$images.prepend($lastCopy)

let current = 0 //记录当前点 
$allButtons.eq(0).on('click',()=>{
  if(current === 2){
    console.log('说明是从最后一张过来的')
  }

  $images.css({transform:'translateX(0px)'})
  current = 0 // 去了哪里
})
$allButtons.eq(1).on('click',()=>{
  console.log(current)
  $images.css({transform:'translateX(-400px)'})
  current = 1
})
$allButtons.eq(2).on('click',()=>{
  if(current === 0){
    console.log('说明是从第一张过来的')
  }
  $images.css({transform:'translateX(-800px)'})
  current = 2
})
