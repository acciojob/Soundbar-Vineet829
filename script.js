document.querySelector("#buttons").addEventListener(("click"), (e) => {
  if(e.target.tagName === "BUTTON"){
	  let sound = e.target.textContent
	 let  audio = new Audio(`sounds/${sound}.mp3`)
	  audio.play()
  }
		  
  


		  
  }
	
})
