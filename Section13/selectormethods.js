var tag = document.getElementById('highlight');
//tag itself will return as an object (that look like html)
//but if we console.dir(tag); we can see all the methods that are tied to it

var tags = document.getElementsByClassName('bolded');
//tags itself returns a nodeList (a light wieght array)
//but if we console.dir(tag); we can see all the methods that are tied to it

var tagName = document.getElementsByTagName('li');
//tags itself returns a nodeList (a light wieght array)


var qs = document.querySelector('#highlight');
//this takes a CSS style selector (#, .,), also uses the element as well.
//this only returns the first element

var qsa = document.querySelectorAll('h2');
