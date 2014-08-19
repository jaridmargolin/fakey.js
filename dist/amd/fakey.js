/*!
 * fakey.js
 * 
 * Copyright (c) 2014
 */

define([
  './keys',
  './utils'
], function (keys, utils) {

// Crossbrowser creatEvent
var createEvent = function (evt) {
  return (document.createEvent)
    ? document.createEvent(evt)
    : document.createEventObject();
};

//
// Parse and trigger key
//
var key = function (el, chr, count, callback) {
  normalizeCall(triggerKey, el, chr, count, callback);
};

//
// Parse and start seq
//
var str = function (el, str, count, callback) {
  normalizeCall(triggerStr, el, str, count, callback);
};

//
// Key sequence
//
var seq = function (el, sequence, callback) {
  // Cache array length
  var seqLength = sequence.length;

  // Start loop at 0
  loop(0, function (i) {
    // Loop vars
    var callee = arguments.callee,
        item   = sequence[i];

    // Item vars
    var method = (item.key) ? key : str,
        value  = (item.key || item.str);

    // Call method with correct vars
    normalizeSeqCall(method, el, value, item.count, function () {
      return next(i, seqLength, callee, callback);
    });
  });  
};

//
// Loop a delay between each key
//
var loop = function (i, fn) {
  setTimeout(function () {
    fn(i);
  }, 1);
};

//
// Decide what to do next in loop
//
var next = function (i, length, fn, callback) {
  i++;
  return (i === length)
    ? (callback) ? callback() : true
    : loop(i, fn);
};

//
// Helper to call method with correct args
//
var normalizeCall = function(fn, el, val, count, callback) {
  if (!count || typeof count === 'function') {
    fn(el, val, count);
  } else {
    // Start loop at 0
    loop(0, function (i) {
      // Cache callee
      var callee = arguments.callee;
      fn(el, val, function () {
        next(i, count, callee, callback);
      });
    });
  }
};

//
// Helper to call seq method with correct args
//
var normalizeSeqCall = function (fn, el, val, count, callback) {
  return (count)
    ? fn(el, val, count, callback)
    : fn(el, val, callback);
};

//
// Trigger multiple keyboard inputs
//
var triggerStr = function (el, str, callback) {
  // Cache length lookup
  var strLength = str.length;

  // Start loop at 0
  loop(0, function (i) {
    key(el, str.charAt(i));
    next(i, strLength, arguments.callee, callback);
  });
};

//
// Trigger keyboard input
//
var triggerKey = function (el, chr, callback) {
  // Evts
  var pressEvt, downEvt;

  // Determine what we should trigger by looking for
  // existence within keys.press, and keys.down
  var keyPress = keys.press(chr),
      keyDown  = keys.down(chr);

  var triggerEvent = function (el, type, evt) {
    // Normal browser
    if (el.dispatchEvent) {
      return el.dispatchEvent(evt);
    } else if (type !== 'input') {
      return el.fireEvent('on' + type, evt);
    } else {
      return false;
    }
  };

  var keyEvt = function (key, evtType) {
    return triggerEvent(el, evtType, createKeyEvt(el, evtType, key));
  };

  var inputEvt = function () {
    return triggerEvent(el, 'input', createInputEvt(el, 'input'));
  };
  
  // Down
  if (keyDown && keyEvt(keyDown, 'keydown')) {
    if (chr === 'backspace') {
      removeChar(el);
    }
    // Press
    if (keyPress && keyEvt(keyPress, 'keypress')) {
      // Add char
      addChar(el, chr);
      // Input
      inputEvt();
    }

  // If only a keypress event exists
  } else if (!keyDown) {
    if (keyPress && keyEvt(keyPress, 'keypress')) {
      // Add char
      addChar(el, chr);
      // Input
      inputEvt();
    }
  }

  // Up
  keyEvt(keyDown, 'keyup');

  // Callback
  return (callback)
    ? callback()
    : true;
};

//
// Simulate a key event
//
var createKeyEvt = function (el, evtType, opts) {
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

  var evt  = createEvent('Event');

  if (evt.initEvent) {
    evt.initEvent(evtType,
      true,
      true
    );
  }

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
  var evt = createEvent('Event');

  if (evt.initEvent) {
    evt.initEvent(evtType,
      true,
      true
    );
  }

  // Return evt
  return evt; 
};

//
// Add char to input
//
var addChar = function (el, chr) {
  // Get curPos
  var curPos = utils.getSel(el).begin;
  // Add char
  el.value = utils.addChars(el.value, chr, curPos);
  // Move caret
  utils.setSel(el, curPos + 1);
};

//
// Add char to input
//
var removeChar = function (el) {
  // Get curPos
  var curPos = utils.getSel(el).begin;
  // Add char
  el.value = utils.remChars(el.value, curPos-1, curPos);
  // Move caret
  utils.setSel(el, curPos - 1);
};

// Expose
return {
  key: key,
  str: str,
  seq: seq
};


});