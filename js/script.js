let arr = [
    "Diploma in Data Science With University Certificate",
    "Corporate Training",
    "On Job Training With Live Projects",
    "Diploma in Data Science With University Certificate"
  ];
  let i = 0;
  setInterval(function() {
    document.getElementById("detail-box").innerText = arr[i];
    i = (i + 1) % arr.length;
  }, 2000); // Change text every 3 seconds



// navbar color changing....

document.addEventListener("scroll",()=>{
  const header=document.getElementsByClassName("header_section");
  const list=document.getElementsByClassName("navbar-nav");
  
  if(window.scrollY>0){
    header[0].classList.add("scrolled");
    list[0].classList.add("list-scroll")
  }
  else{
    header[0].classList.remove("scrolled");
    list[0].classList.remove("list-scroll");
  }
  })
