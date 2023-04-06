let desc=document.getElementsByClassName('desc')
let showmore=document.getElementsByClassName('show')
let more=document.querySelectorAll(".more")
const original=desc.innerHTML
const partners=document.querySelectorAll(".partners-logo")


more[0].style.display='non' 
for (i=0;i<showmore.length;i++){
  
  showmore[i].addEventListener('click',add)
}
//
function add(a,b){
// need an if stt for show less and to reverse the effect
if (event.target.innerHTML=='Read More'){
  event.target.parentElement.firstElementChild.style.display='none'//childNodes)
  event.target .previousElementSibling.style.display='inline'
  event.target.parentElement.previousElementSibling.style.display='none' 
  //event.target.style.display='block'
  event.target.innerHTML='Show Less'
} 
else if (event.target.innerHTML=='Show Less'){
  event.target .previousElementSibling.style.display='none'
  event.target.parentElement.previousElementSibling.style.display='inline'
  event.target.parentElement.firstElementChild.style.display='inline'
  //event.target.style.display='block'
  event.target.innerHTML='Read More'
} 
 
}




// const flexContainer = document.querySelector('.partners-links');
// const images = flexContainer.querySelectorAll('.partners-logo');
// const containerWidth = flexContainer.offsetWidth;
// const imageWidth = images[0].offsetWidth;
// const numVisibleImages = 4;
// let slideIndex = 0;

// setInterval(() => {
//   slideIndex++;
//   if (slideIndex >= images.length - numVisibleImages) {
//     slideIndex = 0;
//   }
//   const translateXValue = -(slideIndex * imageWidth * numVisibleImages) + 'px';
//   flexContainer.style.transform = `translateX(${translateXValue})`;
// }, 2000);


// const flexContainer = document.querySelector('.flex-container');
// const images = flexContainer.querySelectorAll('img');
// let slideIndex = 0;

// setInterval(() => {
//   slideIndex++;
//   if (slideIndex >= images.length - 3) {
//     slideIndex = 0;
//   }
//   flexContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
// }, 2000);



// const flexContainer = document.querySelector('.flex-container');
// let slideIndex = 0;

// setInterval(() => {
//   slideIndex++;
//   flexContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
// }, 2000);




// let slideIndex=0
// slide()
// console.log(partners)
// document.getElementById("scroll").addEventListener('click',slide)
// function slide () {
//  for (i=0;i<partners.length;i++){
//   partners[i].style.display='none'
//   console.log('run')
//  }
//  slideIndex++

//  if (slideIndex > partners.length) {slideIndex = 1}
//  partners[slideIndex-1].style.display = "block";
//  setTimeout(slide,2000);
 
// }
// //setInterval(slide,5000)

 