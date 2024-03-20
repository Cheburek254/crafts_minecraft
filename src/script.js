let btn_history = document.querySelector('.history')
let btn_choose = document.querySelector('.choose')
let btn_all = document.querySelector('.all')
let history_block = document.querySelector('.history-for-js')
let crafts_block = document.querySelector('.craft-to-js')
let choose_block = document.querySelector('.choose-for-js')
let crafts = document.querySelector('.crafts')
//let receips = {
//   название предмета :    [imageurl,[список необходимых предмктов(0  если в этой ячейке предмета нет)]]
//}
let receips = {"bubu" : ["img/craftable/tile004.png"],
"bubu1" : ["img/craftable/tile004.png"],
"bubu2" : ["img/craftable/tile004.png"],
"bubu3" : ["img/craftable/tile004.png"],
"bubu4" : ["img/craftable/tile004.png"],
"bubu5" : ["img/craftable/tile004.png"],
"bubu6" : ["img/craftable/tile004.png"],
"bubu7" : ["img/craftable/tile004.png"],
"bubu8" : ["img/craftable/tile004.png"],
"bubu9" : ["img/craftable/tile004.png"],
"bubu0" : ["img/craftable/tile004.png"],
"bubu-" : ["img/craftable/tile004.png"],
"bubu=" : ["img/craftable/tile004.png"],
"bubu[" : ["img/craftable/tile004.png"],
"bubup" : ["img/craftable/tile004.png"],
"bubuo" : ["img/craftable/tile004.png"],
"bubui" : ["img/craftable/tile004.png"],
}
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

let a = crafts.querySelector('.row')
Object.keys(receips).forEach(key => {
    //console.log(key, receips[key])
    
    
    
    a.innerHTML+=`<div class="icon"><img class="block-img" src="${receips[key]}"></div>`
    
    
        
    
    
    
})
