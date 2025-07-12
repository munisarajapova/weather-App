 let inp = document.getElementById('inp')
 let btn = document.getElementById('btn')

 btn.addEventListener('click', ()=>{
  let val = inp.value
  getData(val)
 })