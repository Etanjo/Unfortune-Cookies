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
  {
   fortune: "Your next shower will turn cold half way through" 
  },
  {
    fortune: "Your next fortune will be backwards",
    back : true,
    
  },
  {
    fortune: "Your phone will be plugged in, but not charge"
  },
  {
    fortune: "Your next flight will be delayed"
  },
  {
    fortune: "Your leg will fall asleep when you try to go for a walk"
  },
  {
    fortune: "This fortune is intentionally left blank"
  },
  {
    fortune: "You will lose your pen, even though you put it in your bag"
  },
  {
    fortune: "The Wifi will be slow the next time you try to download something."
  },
  {
    fortune: "It will rain"
  },
  {
    fortune: "It will snow"
  },
  {
    fortune: "It will thunder"
  },
  {
    fortune: "Dogs will bark while you try to sleep"
  },
  {
    fortune: "Gas prices will rise"
  },
  {
    fortune: "The backup batteries in your clocks will not work the next time the power goes out"
  },
  
]
let backFuture = false;

cookie.addEventListener("click",function(event){
  
  let index = Math.floor(Fortunes.length*Math.random())
  let itm = Fortunes[index];
  Fortunes.splice(index,1)
  

  
  unfortune.textContent = itm.fortune
  if (backFuture) {
    unfortune.style.transform = 'rotateY(180deg)'
    backFuture = false;
  } else {
    unfortune.style.transform = '';
  }
  if (itm.back) {
    backFuture = true;
  }
  
}
)
