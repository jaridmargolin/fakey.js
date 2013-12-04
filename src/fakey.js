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
    opts.charCodeArg = key.which;
    opts.keyCodeArg  = key.keyCode;
    opts.shiftKeyArg = key.shiftKey;
    // Dispatch evt
    return el.dispatchEvent(createKeyEvt(el, evtType, opts));
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
      if (i !== strLength - 1) { return arguments.callee(i++); }
      if (callback) { return callback(); }
    }, 0.25);
  };

  // Start loop at 0
  loop(0);
};

//
// Simulate a key event
//
var createKeyEvt = function (el, evtType, opts) {
  var evt  = document.createEvent('KeyboardEvent');

  // Chromium Hack
  // Object.defineProperty(evt, 'keyCode', {
  //   get : function() { return this.keyCodeVal; }
  // });
  // Object.defineProperty(evt, 'which', {
  //   get : function() { return this.keyCodeVal; }
  // });
  evt['keyCode'] = {
    get : function() { return this.keyCodeVal; }
  };
  evt['which'] = {
    get : function() { return this.keyCodeVal; }
  };

  // Init event
  (evt.initKeyboardEvent || evt.initKeyEvent).call(evt,
    evtType,
    opts.bubbles || true,
    opts.cancelable || true,
    opts.viewArg || document.defaultView,
    opts.ctrlKeyArg || false,
    opts.altKeyArg || false,
    opts.shiftKeyArg || false,
    opts.metaKeyArg || false,
    opts.keyCodeArg,
    evt.initKeyboardEvent ? opts.charCodeArg : 0
  );
  evt.keyCodeVal = opts.keyCodeArg;

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