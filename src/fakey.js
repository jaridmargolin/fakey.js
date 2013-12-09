/*
 * fakey.js:
 *
 * (C) 2013 Jarid Margolin
 *
 */ 


define([
  'keys',
  'utils'
], function (keys, utils) {


// Scope vars
curPos = 0;

//
// Trigger keyboard input
//
var key = function (el, char, opts) {
  // Evts
  var pressEvt, downEvt;

  // Determine what we should trigger by looking for
  // existence within keys.press, and keys.down
  var keyPress = keys.press(char),
      keyDown  = keys.down(char);

  var keyEvt = function (key, evtType) {
    return el.dispatchEvent(createKeyEvt(el, evtType, key));
  };

  var inputEvt = function () {
    return el.dispatchEvent(createInputEvt(el, 'input'));
  };

  // If no opts passed, create blank obj
  if (!opts) { opts = {}; }
  
  // Down
  if (keyDown && keyEvt(keyDown, 'keydown')) {
    // Press
    if (keyPress && keyEvt(keyPress, 'keypress')) {
      // Add char
      addChar(el, char);
      // Input
      inputEvt();
    }
  }

  // Up
  keyEvt(keyDown, 'keyup');
};

//
// Trigger a series of keys
//
var seq = function (el, str, callback) {
  var strLength = str.length;

  // Add a delay between each key
  var loop = function (i) {
    setTimeout(function () {
      key(el, str.charAt(i));
      if (i !== strLength - 1) {
        i++;
        return loop(i);
      }
      if (callback) {
        return callback(); 
      }
    }, 25);
  };

  // Start loop at 0
  loop(0);
};

//
// Simulate a key event
//
var createKeyEvt = function (el, evtType, opts) {
  var evt  = document.createEvent('Event');

  var defaults = {
    altGraphKey: false,
    altKey: false,
    ctrlKey: false,
    detail: 0,
    keyIdentifier: "false",
    keyLocation: 0,
    layerX: 0,
    layerY: 0,
    location: 0,
    metaKey: false,
    pageX: 0,
    pageY: 0,
    shiftKey: false,
    view: window
  };

  evt.initEvent(evtType,
    true,
    true
  );

  // Mixin values
  var key;
  for (key in defaults) {
    evt[key] = defaults[key];
  }
  for (key in opts) {
    evt[key] = opts[key];
  }

  // Return evt
  return evt; 
};

//
// Simulate a input event
//
var createInputEvt = function (el, evtType) {
  var evt = document.createEvent('Event');

  evt.initEvent('input',
    true,
    true
  );

  // Return evt
  return evt; 
};

//
// Add char to input
//
var addChar = function (el, char) {
  // Add char
  el.value = utils.addChars(el.value, char, curPos);
  // Move caret
  curPos ++;
  utils.setSel(el, curPos);
};

// Expose
return {
  key: key,
  seq: seq
};


});