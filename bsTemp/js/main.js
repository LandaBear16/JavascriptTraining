"use strict";
function align(button, func) {
  var exampleClass = button.dataset.example;
  var moveEl = "." + exampleClass + " .move";
  console.log(exampleClass);
  var el = document.querySelector(moveEl);
  var alignment = func + button.dataset.align;
  var newClass = "row move " + alignment;
  el.className = newClass;
  //showCode(button.dataset.align, button.dataset.example);
}

function showCode(button, example) {
  var codeClass = document.querySelector("." + example + " ." + button);
  var pClass = codeClass.parentElement;
  pClass.childNodes.forEach(function(element) {
    if (element.nodeName != "#text") {
      element.style.display = "none";
    }
  });
  codeClass.style.display = "block";
}

var foo = "bar";
function bar() {
  console.log(foo);
  //var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

console.log(foo);
bar();
