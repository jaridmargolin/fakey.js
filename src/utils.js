/*
 * utils.js:
 *
 * (C) 2013 Jarid Margolin
 *
 */ 


define(function () {


//
// Add a given character to a string at a defined pos
//
var addChars = function (str, chars, pos) {
  return str.substr(0, pos) + chars + str.substr(pos, str.length);
};

//
// Remove a span of characters
//
var remChars = function (str, start, end) {
  return str.substr(0, start) + str.substr(end, str.length);
};

//
// Get begin and end positions of selected input. Return 0's
// if there is no selectiion data
//
var getSel = function (el) {
  return { 
    begin: el.selectionStart,
    end: el.selectionEnd
  };
};

//
// Set the caret position at a specified location
//
var setSel = function (el, pos) {
  el.focus();
  el.setSelectionRange(pos,pos);
};

// Expose
return {
  addChars: addChars,
  remChars: remChars,
  getSel: getSel,
  setSel: setSel
};


});