'use strict';

function createParagraph(id, text) {
    var content = document.createElement('p');
    content.innerHTML = text;
    document.getElementById(id).appendChild(content);
}

function createDiv(id, className) {
    var content = document.createElement('div');
    content.className = className;
    document.getElementById(id).appendChild(content);
}

function createLink(id, text, url) {
    var content = document.createElement('a');
    content.innerHTML = text;
    content.href = url;
    document.getElementById(id).appendChild(content);
}

var HTMLGen = { createParagraph: createParagraph, createDiv: createDiv, createLink: createLink };

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
