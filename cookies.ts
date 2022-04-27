let cookie = document.querySelector("#Fortune")
let unfortune = document.querySelector("#unfortune")



export type Fortune = {
  fortune : string,
  value? : number,
}

export let Fortunes = [
  {
    fortune: 'You will stub your toe in the near future'
  },
  {
   fortune: "The traffic will be immense on your next journey"
  },
  {
    fortune: "The next event you want to go to will sell out instantly"
  },
  {
    fortune: "You will go on twitter"
  },
  {
    fortune: "Your favorite movie is about to be removed from Netflix"
  },
  {
    fortune: "You will sleep through your next alarm"
  },
  
]

cookie.addEventListener("click",function(event){
  let index = Math.floor(Fortunes.length*Math.random())
  let itm = Fortunes[index];
  Fortunes.splice(index,1)
  

  
  unfortune.textContent = itm.fortune
}
)
