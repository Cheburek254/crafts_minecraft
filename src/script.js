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
let receips = {"bubu" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu1" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu2" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu3" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu4" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu5" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu6" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu7" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu8" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu9" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu0" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu-" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu=" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubu[" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubup" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubuo" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]],
"bubui" : ["img/craftable/tile004.png",[0,0,0,"img/craftable/tile004.png","img/craftable/tile004.png","img/craftable/tile004.png",0,0,0]]
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
     
    a.innerHTML+=`<div class="icon spa"><img class="block-img" src="${receips[key][0]}"></div>`
        
})
let items = document.querySelectorAll('.spa')
let objects = Object.keys(receips)
let open = document.querySelector('.open')
console.log(objects,objects.length)
for (let i = 0;i<objects.length;i++){
    items[i].addEventListener('click',function(){
        open.innerHTML = `<div class="left">
        <div class="row1">
          <img class="block-img" src="${receips[objects[i]][1][0]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][1]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][2]}" alt = "">
        </div>
        <div class="row1">
          <img class="block-img" src="${receips[objects[i]][1][3]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][4]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][5]}" alt = "">
        </div>
        <div class="row1">
          <img class="block-img" src="${receips[objects[i]][1][6]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][7]}" alt = "">
          <img class="block-img" src="${receips[objects[i]][1][8]}" alt = "">
        </div>
      </div>
      <div class="arrow"><img src="img/arrow.png"></div>
      <div class="icon"><img class="block-img" src="${receips[objects[i]][0]}"></div>
        `
        console.log(i)

    })
}
