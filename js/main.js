let d = document;

document.addEventListener("DOMContentLoaded", menu);////menu
document.addEventListener("DOMContentLoaded", search);////search
document.addEventListener("DOMContentLoaded", clikAction);
document.addEventListener("DOMContentLoaded", setGrid);////Grid
document.addEventListener("DOMContentLoaded", setFooterItm);////Footer item
document.addEventListener("scroll", scroll);////Scroll
	document.addEventListener("DOMContentLoaded", costumHead);////header

document.addEventListener("DOMContentLoaded", loadPage);////load page


function clikAction(){
	let n = d.getElementById('toggle');
	n.addEventListener("click", displayMenu);
}

function displayMenu(){
	let menu = d.getElementById('menu');
	// menu.classList.toggle("activeMenu");
	$("#menu").fadeToggle( "activeMenu", "linear" );

	let n = d.getElementById('toggle');
	let bg = n.style.backgroundColor;
	if(bg){
		n.style.backgroundColor = '';
	} else {
		n.style.backgroundColor = 'rgb(6 6 6)';
	}
}

function menu() {
	let menu = d.getElementById('menu');
	let numberEl;

	///////////////////////add toggle////////////////////////////
	let toggle =  d.createElement("div");
	toggle.setAttribute("id", 'toggle');
	toggle.innerText = menu.attributes.symbolTogle.textContent;

	menu.parentElement.append(toggle);
	////////////////////////////////////////////////////////////
	for (let i = 0; i < menu.classList.length; i++) {
		/////////////////get number wont elements/////////
		if(menu.classList[i].charAt(0) == 'e'){
			numberEl = menu.classList[i].replace("e", ""); 
		}
	}
	//////////////add element in  menu/////////////////////////
	let nameEl = menu.innerText;
	let ul = d.createElement("ul");
	let links = menu.attributes.links.textContent;

	nameEl = nameEl.split(',');
	links = links.split(',');	

	for (let i = 0 ; i < numberEl; i++){
		let li = d.createElement("li");
		let a = d.createElement("a");

		a.setAttribute("hreff", links[i]);
		a.innerText = nameEl[i];
		a.setAttribute('class','button');
		
		li.append(a);
		ul.append(li);
	}

	menu.innerText = '';
	menu.append(ul);
}


function search(){
	
}

function setGrid() {
	let grid = d.getElementsByClassName('container_grid');

	for(let i = 0;i < grid.length ;i++){
		let nrCol = grid[i].children.length;

		for(let i2 = 0; i2 < nrCol;i2++){
			let width = 100 / nrCol;
			grid[i].children[i2].style.width = width+'%';
		}
	}
}

function scroll(){
	let header = d.getElementsByTagName('header');
	////
	let logo = d.getElementById('logo');
	let menu = d.getElementById('menu');
	if(d.documentElement.scrollTop > 0.3){
		if(d.documentElement.clientWidth > 820){
			header[0].style.position = 'fixed';
			header[0].style.backgroundColor = '#fff';
			
			var listMenu = menu.children[0].children; 
			for(var i = 0;i < listMenu.length ;i++ ){
				listMenu[i].children[0].style.color = '#111';
			}
		}
	} else {
		if(d.documentElement.clientWidth > 820){
			header[0].style.position = 'fixed';
			header[0].style.backgroundColor = '';
			
			var listMenu = menu.children[0].children; 
			for(var i = 0;i < listMenu.length ;i++ ){
				listMenu[i].children[0].style.color = '#fff';
			}
		}
	}
}

function setFooterItm(){
	let items = d.getElementsByClassName('footerItm');
	let maxheight = 0;

	for(let i = 0; i < items.length ;i++){
		if(maxheight < items[i].parentElement.offsetHeight){
			maxheight = items[i].parentElement.offsetHeight;
		}
		if(maxheight != items[i].parentElement.offsetHeight){
			let calc = (maxheight / 2) - items[i].offsetHeight;
			items[i].style.marginTop = calc+'px';
			let calc2 = maxheight - calc -1;
			items[i].style.height = calc2+'px';
		}
	}
}

function costumHead(){
	var head = d.getElementById('head');
	let height = d.documentElement.clientHeight;
	head.style.height = height+'px'; 
}


var buttonMenu;

function loadPage(){
	buttonMenu = d.querySelectorAll(".button");

	for (var i = 0; i < buttonMenu.length; i++) {
    	buttonMenu[i].addEventListener('mouseup', showData, false);
	}
	console.dir(d.documentElement);
	setTimeout(typeWriter, 3000);

	var firstElMenu = d.getElementById('menu').children[0].children[0].children[0];
	if(firstElMenu.children.length == 1){
		firstElMenu.children[0].outerHTML = '';
	}
}

function showData(){
	let menu = d.getElementById('toggle');

	var id = this.attributes[0].value;
	var contact = d.getElementById(id);
	if(d.documentElement.clientWidth > 820){
		var calc = Number(contact.offsetTop) -  44;
	} else {
		menu.click();
		var calc = Number(contact.offsetTop);
	}
	window.scrollTo(0,calc); 
}

var i = 0;
var txt = "Hi! | My name is Alexander and this is a page for one of my hobbies. | This distracts me from the basic work of the programmer. | The gallery is not big on this page because this page was created to show a small part of my programming skills. | If you want to see more works, I'm always glad to see you on the Tumblr page.";
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    var div =  document.getElementById("text");
    var br = d.createElement('br');
    
    if(txt.charAt(i) == '|'){
    	div.append(br);
    } else {
    	div.innerHTML += txt.charAt(i);
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}