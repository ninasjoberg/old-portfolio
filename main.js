
const iconList = document.getElementsByClassName('icon');
//loop through the list of icons
for(let i = 0; i < iconList.length; i++) {
  //get the icon at position i
  const icon = iconList[i];
  //add an eventlistener to that icon
  icon.addEventListener('click', function(event) {
    changeContent(event);
    changeActiveIcon(event, iconList);
    // event.target is the icon that was clicked
    // take the second class and use it to get 
    // the corresponding info div by id
    let linkElement = ''; 
    if(event.target.classList.contains('icon')){
      linkElement = event.target;
    }
    else{
      linkElement = event.target.parentElement;
    }
    let info = document.getElementById(linkElement.classList[1]);
    info.classList.toggle('visible')  

    linkElement.classList.toggle('pressed');  
  });
}


function changeContent(event){
  const active = document.getElementsByClassName('info');
  for (let i = 0; i < active.length; i++) {
    if(active[i].classList.contains('visible')){
      active[i].classList.remove('visible');
    }
  }
}


function changeActiveIcon(event, icons){
  for (let i = 0; i < icons.length; i++) {
    if(icons[i].classList.contains('pressed')){
      icons[i].classList.remove('pressed');
    }
  }
}

