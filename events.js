console.log("imInEvents.js");

let outputTarget = document.getElementById('output-target');
let pageHeader = document.getElementById('page-header');
let pageTitleH1 = document.getElementById('page-title');
let keypressInput = document.getElementById('keypress-input');
let articleSection = document.getElementById('article-section');
let addColor = document.getElementById('add-color');


function sectionEvents(target) {
	outputTarget.innerHTML = `<p>You clicked on the ${target.innerHTML}</p>`;
}

document.body.addEventListener('click', function(event) {
	sectionTarget = event.target;
	if(event.target.className === 'article-section'){
		sectionEvents(sectionTarget);
	}
})

pageTitleH1.addEventListener('mouseenter', function(){
	outputTarget.innerHTML = `<h2>You moved your mouse over the header</h2>`;
})

pageTitleH1.addEventListener('mouseleave', function(){
	outputTarget.innerHTML = `<h2>You left me!!</h2>`;
})

keypressInput.addEventListener('keypress', function(){
	outputTarget.innerHTML = keypressInput.value;
})


function myFunction() {
    document.getElementById("output-target").style.color = "blue";
}
