var p = document.getElementsByTagName('p')[0];
//textContent doesn't keep any of the inner tags
p.textContent = "Something new";

var ul = document.querySelector('ul');
//innerHTML keeps all of the inner tags.
ul.innerHTML

//if you are wanting to just update the content, then you might
//want to just use textContent
