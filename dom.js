// PART 1 
// Examine the DOM 
console.dir(document) 

console.log(document.domain); //Localhost - loopback address
console.log(document.url);
console.log(document);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
// document.all[10].textContent = 'Hello';

console.log(document.forms); 
console.log(document.links);

// Array vs HTML Collection - not the same methods. 

console.log(document.images)


//GET ELEMENT BY ID 

console.log(document.getElementById('header-title'))


var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(headerTitle); 
// headerTitle.textContent = 'Hello'; 
// headerTtile.innerText = 'Goodbye'

console.log(headerTitle.textContent)
console.log(headerTitle.innerText)
headerTitle.innerHTML = '<h3>Hello</h3>'

header.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME 

var items = document.getElementsByClassName('list-group-item'); 
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2'; 
items[1].style.fontWeight = 'bold'; 
items[1].style.backgroundColor = 'yellow'; 

for (let i = 0; i < items.length; i++) { 
    items[i].style.backgroundColor = '#f4f4f4'
}


//GET ELEMENTS BY TAG NAME 

var li = document.getElementsByTagName('li'); 

console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2'; 
li[1].style.fontWeight = 'bold'; 
li[1].style.backgroundColor = 'yellow'; 

for (let i = 0; i < li.length; i++) { 
    li[i].style.backgroundColor = '#f4f4f4'
}

// QUERY SELECTOR 

var header = document.querySelector('#main-header'); 
header.style.borderbottom = 'solid 4px #ccc';

var input = document.querySelector('input'); 
input.value = 'Hello World' 

var submit = document.querySelector('input[type="submit"]'); 
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral'; 

// QUERY SELECT ALL 

var titles = document.querySelectorAll('.title')

console.log(titles); 
titles[0].textContent = 'Hello'; 

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for (var i =0; i < odd.length; i++) { 
    odd[i].style.backgroundColor = '#f4f4f4'; 
    even[i].style.backgroundColor = '#ccc'; 
}




// PART 2 

// TRAVERSING THE DOM 

var itemList = document.querySelectorAll('#items'); 

//parentNode 
console.log(itemlist.parentNode); 
itemlist.parentNode.style.backgroundColor = '#F4F4F4'; 
console.log(itemList.parentNode.parentNode.parentNode)

//parentElement 
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)

//childNodes 

console.log(itemList.childNodes);

//Children
console.log(itemList.children)
console.log(itemList.children[1]); 
itemList.children[1].style.backgroundColor = 'yellow'; 

//FirstChild 
console.log(itemList.firstChild); 

//firstElementChild 

console.log(itemList.firstElementChild); 
itemList.firstElementChild.textContent = 'Hello 1'


//FirstChild 
console.log(itemList.lastChild); 

//firstElementChild 

console.log(itemList.firstElementChild); 
itemList.lastElementChild.textContent = 'Hello 4'

//nextSsibling 
console.log(itemList.nextSibling); 

//nextElementSibling 
console.log(itemList.nextElementSibling)

//previousSibling 
console.log(itemList.previousSibling); 

//previousElementSibling 
console.log(itemList.previousElementSibling); 
itemList.previousElementSibling.style.color = 'green';

//Create a div 
var newDiv = document.createElement('div'); 

//Add class
newDiv.className = 'hello'

//Add id 
newDiv.id = 'hello1';

//Add attr 
newDiv.setAttribute('title', 'Hello div'); 

//Create text node 
var newDivText = document.createTextNode('Hello World'); 

//Add text to div 

newDiv.appendChild(newDivText); 

var container = document.querySelector('header .container'); 
var h1 = document.querySelector('header h1'); 

newDiv.style.fontSize = '30px';

console.log(newDiv); 

container.insertBefore(newDiv, h1)

// PART 3
// EVENTS 

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) { 
    // console.log('button Clicked')
    // document.getElementById('header-title').textContent = 'Changed'; 
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    // console.log(e);

    console.log(e.target);
    console.log(e.target.id); 
    console.log(e.target.className); 
    var output = document.getElementById('output'); 
    output.innerHTML = '<h3>+e.target.id+</h3>'; 

    console.log(e.type); 

    console.log(e.clientX); 
    console.log(e.clientY); 

    console.log(e.offsetX);

    console.log(e.altKey); 
    console.log(e.ctrlKey); 
    console.log(e.shiftKey);
    
    
}

var button = document.getElementById('button')
var box = document.getElementById('box')

button.addEventListener('click', runEvent);
button.addEventListener('dblClick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

button.addEventListener('mouseenter', runEvent);
button.addEventListener('mouseleave', runEvent);

button.addEventListener('mouseover', runEvent);
button.addEventListener('mouseout', runEvent);

button.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]'); 
var form = document.querySelector('form') 
var select = document.querySelector('select'); 

itemInput.addEventListener('keydown',runEvent);
itemInput.addEventListener('keyup',runEvent);
itemInput.addEventListener('keypress',runEvent);

itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);

itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('paste',runEvent);

itemInput.addEventListener('input',runEvent);

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent)



function runEvent(e) { 
    e.preventDefault();
    console.log('Event type: '+ e.type)
    console.log(e.target.value);

    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

output.innerHTML = '<h3>MouseX: '+e.offSetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'

document.body.style.backgroundColor = 'rgb("+e.offsetX+","+e.offsetY+",40)';

}

