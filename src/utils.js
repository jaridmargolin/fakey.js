/*!
 * utils.js
 * 
 * Copyright (c) 2014
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
// If normal browser return with result
  if (typeof el.selectionStart === "number") {
    return { 
      begin: el.selectionStart,
      end: el.selectionEnd
    };
  }

  // Uh-Oh. We must be IE. Fun with TextRange!!
  var range = document.selection.createRange();
  // Determine if there is a selection
  if (range && range.parentElement() === el) {
    var inputRange = el.createTextRange(),
        endRange   = el.createTextRange(),
        length     = el.value.length;

    // Create a working TextRange for the input selection
    inputRange.moveToBookmark(range.getBookmark());

    // Move endRange begin pos to end pos (hence endRange)
    endRange.collapse(false);
    
    // If we are at the very end of the input, begin and end
    // must both be the length of the el.value
    if (inputRange.compareEndPoints("StartToEnd", endRange) > -1) {
      return { begin: length, end: length };
    }

    // Note: moveStart usually returns the units moved, which 
    // one may think is -length, however, it will stop when it
    // gets to the begin of the range, thus giving us the
    // negative value of the pos.
    return {
      begin: -inputRange.moveStart("character", -length),
      end: -inputRange.moveEnd("character", -length)
    };
  }

  //Return 0's on no selection data
  return { begin: 0, end: 0 };
};

//
// Set the caret position at a specified location - IE variation
//
var setSelIe = function(el, pos, e) {
    if (el.createTextRange) {
        var range = el.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        try {
            range.select();
        } catch (e) {
            console.error('fakey failed to set the caret', el, pos, e);
        }
    } else {
        console.error("fakey failed to set the caret", el, pos, e);
    }
};

//
// Set the caret position at a specified location
//
var setSel = function (el, pos) {
// If normal browser
  if (el.setSelectionRange) {
    el.focus();
    try {
       el.setSelectionRange(pos, pos);
    } catch (e) {
        setSelIe(el, pos, e);
    }
  // IE = TextRange fun
  } else {
    setSelIe(el, pos);
  }
};

// Expose
return {
  addChars: addChars,
  remChars: remChars,
  getSel: getSel,
  setSel: setSel
};


});