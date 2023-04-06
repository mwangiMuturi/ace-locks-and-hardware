let desc=document.getElementsByClassName('desc')
let showmore=document.getElementsByClassName('show')
let more=document.querySelectorAll(".more")
const original=desc.innerHTML
const partners=document.querySelectorAll(".partners-logo")

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 600px)')
// Check if the media query is true


more[0].style.display='non' 
for (i=0;i<showmore.length;i++){
  
  showmore[i].addEventListener('click',add)
}
//
function add(a,b){
// need an if stt for show less and to reverse the effect
if (event.target.innerHTML=='Read More'){
  event.target.parentElement.firstElementChild.style.display='none'//childNodes)
  if (mediaQuery.matches) {
    // Then trigger an alert
   // alert('Media Query Matched!')
    
  event.target.parentElement.previousElementSibling.style.display='none' 
   
  }
  
  event.target .previousElementSibling.style.display='inline'

  //event.target.style.display='block'
  event.target.innerHTML='Show Less'
} 
else if (event.target.innerHTML=='Show Less'){
  if (mediaQuery.matches) {
    //alert('Media Query Matched!')
    event.target.parentElement.previousElementSibling.style.display='inline'
  }
  event.target .previousElementSibling.style.display='none'
 event.target.parentElement.firstElementChild.style.display='inline'
  //event.target.style.display='block'
  event.target.innerHTML='Read More'
} 
 
}


