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
let receips = {"bubu" : ["img\craftable\tile004.png"],
                "stone" : ["ing\craftable\tile000"]

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
let cnt2 = 1
let cnt3 = Object.keys(receips).length
let cnt = 0
let check = true
Object.keys(receips).forEach(key => {
    //console.log(key, receips[key])
    if (cnt == 6){
        crafts.innerHTML += `</div>`
        cnt = 0
        check = false
    }
    
    if (cnt == 0){
        crafts.innerHTML += `<div class = "row">`
        
    }
    cnt += 1
    if(cnt<=6){
        crafts.innerHTML+=`<div class="icon"><img class="block-img" src="${key[0]}"></div>`
        check = true
    }
    cnt2 += 1
    if (cnt2 == cnt3){
        if (check == true){
        crafts.innerHTML += `</div>`}
    }
    
})
