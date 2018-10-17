var randomtargetnumber = '';

var randomcrystalnumber = '';

var gameover = true;

var counter = 0;

$("#target").text(createrandomtargetnumber());

createrandomtargetnumber = function(){
  Math.floor((Math.random() * 120) + 19);
}

createrandomcrystalnumber = function(){
  Math.floor((Math.random() * 12) + 1);
}

createrandomtargetnumber();