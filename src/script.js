let btn_history = document.querySelector('.history')
let btn_choose = document.querySelector('.choose')
let btn_all = document.querySelector('.all')
let history_block = document.querySelector('.history-for-js')
let crafts_block = document.querySelector('.craft-to-js')
let choose_block = document.querySelector('.choose-for-js')

//let receips = {
//   название предмета :    [imageurl,[список необходимых предмктов(0  если в этой ячейке предмета нет)]]
//}
let receips = {}
btn_history.addEventListener('click',function(){
    history_block.style.display = 'flex'
    crafts_block.style.display = 'none'
    choose_block.style.display = 'none'
})

btn_all.addEventListener('click',function(){
    crafts_block.style.display = 'flex'
    history_block.style.display = 'none'
    choose_block.style.display = 'none'
})

btn_choose.addEventListener('click',function(){
    choose_block.style.display = 'flex'
    crafts_block.style.display = 'none'
    history_block.style.display = 'none'
})