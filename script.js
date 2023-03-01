// var div_list = document.querySelectorAll('p'); // returns NodeList
// var div_array = [...div_list]; // converts NodeList to Array
// div_array.forEach(elm => {
// 	elm.addEventListener('mouseover',function () { highlight(this); }, false);
// 	elm.addEventListener('mouseout',function () { unhighlight(this); }, false);
// // do something awesome with each div
// });

// function highlight(e){
// 	const sameClass = e.className;
// 	e.classList.add("highlight")
// 	var els = [];
// 	while (e) {
// 		if (e.id === "stop") break;
// 	    els.unshift(e);
// 	    e = e.parentNode;
// 	    e.classList.add("highlight")
// 	}

// 	// let allE = document.querySelectorAll(`.${sameClass[0]}`)
// 	let ee = document.querySelectorAll(`.${sameClass}indi`);
// 	for(let each of ee){
// 		each.classList.add('highlightindi')
// 	}
// }

// function unhighlight(e){
// 	const sameClass = e.className.split(" ")[0]
// 	e.classList.remove("highlight")
// 	var els = [];
// 	while (e) {
// 		if (e.id === "stop") break;
// 	    els.unshift(e);
// 	    e = e.parentNode;
// 	    e.classList.remove("highlight")
// 	}

// 	let ee = document.querySelectorAll(`.${sameClass}indi`);
// 	for(let each of ee){
// 		each.classList.remove('highlightindi')
// 	}
// }

window.addEventListener('load',(event) => {
	reportDocLanguage()
	reportDocLastModified()
	reportSoftware()
})

addEventListenerMulti(window, 'load resize', (event) => {
	reportSign()
  reportDocDimension()
})

// function reportSign(){
// 	var signList = document.querySelectorAll('.sign');
// 	var signArray = [...signList];
// 	signArray.forEach(sign => {
// 		let signFor = (sign.getAttribute("for")),
// 		aProject = document.querySelector(`[category=${signFor}]`);
// 		sign.innerHTML = getYdistBtw(sign, aProject)+"px";
// 	});
// }
function reportSign(){
	var signList = document.querySelectorAll('.sign');
	var signArray = [...signList];
	signArray.forEach(sign => {
		let signFor = (sign.getAttribute("for")),
		aProject = document.querySelector(`[category=${signFor}]`);
		sign.style.setProperty("--item", getYdistBtw(sign, aProject)+"px");
		sign.setAttribute('item', getYdistBtw(sign, aProject)+"px");
		// sign.classList.add('local');
		// console.log(getYdistBtw(sign, aProject)+"px")
	});
}
	
function reportDocDimension() {
	document.querySelector("#height").textContent = document.documentElement.offsetHeight;
	document.querySelector("#width").textContent = window.innerWidth;
}

function reportDocLanguage(){
	document.querySelector("#language").textContent = document.documentElement.lang;	
}

function reportDocLastModified(){
	const date = new Date(document.lastModified);
	document.querySelector("#lastUpdated").textContent = getFormattedDate(date);
}

function reportSoftware(){
	document.querySelector("#browser").textContent = browserIs().browser.name;
	document.querySelector("#os").textContent = browserIs().os.name;
}

function getYdistBtw(element1, element2){
	let elemRect1 = element1.getBoundingClientRect(),
    elemRect2 = element2.getBoundingClientRect(),
    offset = elemRect2.top - elemRect1.top;
	return offset.toFixed(0)
}

function addEventListenerMulti(el, s, fn) {
  s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}

function browserIs(){
	const result = bowser.getParser(window.navigator.userAgent);
	return result.parsedResult
}

function getFormattedDate(date) {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}