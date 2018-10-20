let $allButtons = $('#buttons > button')
let $images = $('#images')
$allButtons.eq(0).on('click',()=>{
  $images.css({transform:'translateX(0px)'})
})
$allButtons.eq(1).on('click',()=>{
  $images.css({transform:'translateX(-400px)'})
})
$allButtons.eq(2).on('click',()=>{
  $images.css({transform:'translateX(-800px)'})
})
