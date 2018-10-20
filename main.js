let $allButtons = $('#buttons > button')
let $images = $('#images')

let current = 0 
$allButtons.eq(0).on('click',()=>{
  console.log(current) //当前位置
  $images.css({transform:'translateX(0px)'})
  current = 0 // 去了哪里
})
$allButtons.eq(1).on('click',()=>{
  console.log(current)
  $images.css({transform:'translateX(-400px)'})
  current = 1
})
$allButtons.eq(2).on('click',()=>{
  console.log(current)
  $images.css({transform:'translateX(-800px)'})
  current = 2
})
