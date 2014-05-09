/*!
 * v0.0.8
 * Copyright (c) 2014 Jarid Margolin
 * fakey.js is open sourced under the MIT license.
 */ 

//
// Uses Node, AMD or browser globals to create a module. This example creates
// a global even when AMD is used. This is useful if you have some scripts
// that are loaded by an AMD loader, but they still want access to globals.
// If you do not need to export a global for the AMD case,
// see returnExports.js.
//
// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrictGlobal.js
//
// Defines a module "returnExportsGlobal" that depends another module called
// "b". Note that the name of the module is implied by the file name. It is
// best if the file name and the exported global have matching names.
//
// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.
//
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['fakey'] = factory();
  }
}(this, function () {



/*
 * keys.js:
 *
 * (C) 2013 Jarid Margolin
 *
 */
var keys = function () {
    //
    // Helper method to fix characters that cannot
    // be store as a json key
    //
    var fixChar = function (chr) {
      if (chr == '"') {
        chr = 'doublequote';
      } else if (chr == '\\') {
        chr = 'forwardslash';
      } else if (chr == ' ') {
        chr = 'space';
      }
      return chr;
    };
    //
    // Method to get key press obj
    //
    var press = function (chr) {
      return keys.press[fixChar(chr)];
    };
    //
    // Method to get key down obj
    //
    var down = function (chr) {
      return keys.down[fixChar(chr)];
    };
    // Keys obj - press & down
    var keys = {};
    // Press obj
    keys.press = {
      'enter': {
        'which': 13,
        'keyCode': 13,
        'shiftKey': false
      },
      'shift': {
        'which': 16,
        'keyCode': 16,
        'shiftKey': true
      },
      'space': {
        'which': 32,
        'keyCode': 32,
        'shiftKey': true
      },
      '!': {
        'which': 33,
        'keyCode': 33,
        'shiftKey': true
      },
      'doublequote': {
        'which': 34,
        'keyCode': 34,
        'shiftKey': true
      },
      '#': {
        'which': 35,
        'keyCode': 35,
        'shiftKey': true
      },
      '$': {
        'which': 36,
        'keyCode': 36,
        'shiftKey': true
      },
      '%': {
        'which': 37,
        'keyCode': 37,
        'shiftKey': true
      },
      '&': {
        'which': 38,
        'keyCode': 38,
        'shiftKey': true
      },
      '\'': {
        'which': 39,
        'keyCode': 39,
        'shiftKey': false
      },
      '(': {
        'which': 40,
        'keyCode': 40,
        'shiftKey': true
      },
      ')': {
        'which': 41,
        'keyCode': 41,
        'shiftKey': true
      },
      '*': {
        'which': 42,
        'keyCode': 42,
        'shiftKey': true
      },
      '+': {
        'which': 43,
        'keyCode': 43,
        'shiftKey': true
      },
      ',': {
        'which': 44,
        'keyCode': 44,
        'shiftKey': false
      },
      '-': {
        'which': 45,
        'keyCode': 45,
        'shiftKey': false
      },
      '.': {
        'which': 46,
        'keyCode': 46,
        'shiftKey': false
      },
      '/': {
        'which': 47,
        'keyCode': 47,
        'shiftKey': false
      },
      '0': {
        'which': 48,
        'keyCode': 48,
        'shiftKey': false
      },
      '1': {
        'which': 49,
        'keyCode': 49,
        'shiftKey': false
      },
      '2': {
        'which': 50,
        'keyCode': 50,
        'shiftKey': false
      },
      '3': {
        'which': 51,
        'keyCode': 51,
        'shiftKey': false
      },
      '4': {
        'which': 52,
        'keyCode': 52,
        'shiftKey': false
      },
      '5': {
        'which': 53,
        'keyCode': 53,
        'shiftKey': false
      },
      '6': {
        'which': 54,
        'keyCode': 54,
        'shiftKey': false
      },
      '7': {
        'which': 55,
        'keyCode': 55,
        'shiftKey': false
      },
      '8': {
        'which': 56,
        'keyCode': 56,
        'shiftKey': false
      },
      '9': {
        'which': 57,
        'keyCode': 57,
        'shiftKey': false
      },
      ':': {
        'which': 58,
        'keyCode': 58,
        'shiftKey': true
      },
      ';': {
        'which': 59,
        'keyCode': 59,
        'shiftKey': false
      },
      '<': {
        'which': 60,
        'keyCode': 60,
        'shiftKey': true
      },
      '=': {
        'which': 61,
        'keyCode': 61,
        'shiftKey': false
      },
      '>': {
        'which': 62,
        'keyCode': 62,
        'shiftKey': true
      },
      '?': {
        'which': 63,
        'keyCode': 63,
        'shiftKey': true
      },
      '@': {
        'which': 64,
        'keyCode': 64,
        'shiftKey': true
      },
      'A': {
        'which': 65,
        'keyCode': 65,
        'shiftKey': true
      },
      'B': {
        'which': 66,
        'keyCode': 66,
        'shiftKey': true
      },
      'C': {
        'which': 67,
        'keyCode': 67,
        'shiftKey': true
      },
      'D': {
        'which': 68,
        'keyCode': 68,
        'shiftKey': true
      },
      'E': {
        'which': 69,
        'keyCode': 69,
        'shiftKey': true
      },
      'F': {
        'which': 70,
        'keyCode': 70,
        'shiftKey': true
      },
      'G': {
        'which': 71,
        'keyCode': 71,
        'shiftKey': true
      },
      'H': {
        'which': 72,
        'keyCode': 72,
        'shiftKey': true
      },
      'I': {
        'which': 73,
        'keyCode': 73,
        'shiftKey': true
      },
      'J': {
        'which': 74,
        'keyCode': 74,
        'shiftKey': true
      },
      'K': {
        'which': 75,
        'keyCode': 75,
        'shiftKey': true
      },
      'L': {
        'which': 76,
        'keyCode': 76,
        'shiftKey': true
      },
      'M': {
        'which': 77,
        'keyCode': 77,
        'shiftKey': true
      },
      'N': {
        'which': 78,
        'keyCode': 78,
        'shiftKey': true
      },
      'O': {
        'which': 79,
        'keyCode': 79,
        'shiftKey': true
      },
      'P': {
        'which': 80,
        'keyCode': 80,
        'shiftKey': true
      },
      'Q': {
        'which': 81,
        'keyCode': 81,
        'shiftKey': true
      },
      'R': {
        'which': 82,
        'keyCode': 82,
        'shiftKey': true
      },
      'S': {
        'which': 83,
        'keyCode': 83,
        'shiftKey': true
      },
      'T': {
        'which': 84,
        'keyCode': 84,
        'shiftKey': true
      },
      'U': {
        'which': 85,
        'keyCode': 85,
        'shiftKey': true
      },
      'V': {
        'which': 86,
        'keyCode': 86,
        'shiftKey': true
      },
      'W': {
        'which': 87,
        'keyCode': 87,
        'shiftKey': true
      },
      'X': {
        'which': 88,
        'keyCode': 88,
        'shiftKey': true
      },
      'Y': {
        'which': 89,
        'keyCode': 89,
        'shiftKey': true
      },
      'Z': {
        'which': 90,
        'keyCode': 90,
        'shiftKey': true
      },
      '[': {
        'which': 91,
        'keyCode': 91,
        'shiftKey': false
      },
      'forwardslash': {
        'which': 92,
        'keyCode': 92,
        'shiftKey': false
      },
      ']': {
        'which': 93,
        'keyCode': 93,
        'shiftKey': false
      },
      '^': {
        'which': 94,
        'keyCode': 94,
        'shiftKey': true
      },
      '_': {
        'which': 95,
        'keyCode': 95,
        'shiftKey': true
      },
      '`': {
        'which': 96,
        'keyCode': 96,
        'shiftKey': false
      },
      'a': {
        'which': 97,
        'keyCode': 97,
        'shiftKey': false
      },
      'b': {
        'which': 98,
        'keyCode': 98,
        'shiftKey': false
      },
      'c': {
        'which': 99,
        'keyCode': 99,
        'shiftKey': false
      },
      'd': {
        'which': 100,
        'keyCode': 100,
        'shiftKey': false
      },
      'e': {
        'which': 101,
        'keyCode': 101,
        'shiftKey': false
      },
      'f': {
        'which': 102,
        'keyCode': 102,
        'shiftKey': false
      },
      'g': {
        'which': 103,
        'keyCode': 103,
        'shiftKey': false
      },
      'h': {
        'which': 104,
        'keyCode': 104,
        'shiftKey': false
      },
      'i': {
        'which': 105,
        'keyCode': 105,
        'shiftKey': false
      },
      'j': {
        'which': 106,
        'keyCode': 106,
        'shiftKey': false
      },
      'k': {
        'which': 107,
        'keyCode': 107,
        'shiftKey': false
      },
      'l': {
        'which': 108,
        'keyCode': 108,
        'shiftKey': false
      },
      'm': {
        'which': 109,
        'keyCode': 109,
        'shiftKey': false
      },
      'n': {
        'which': 110,
        'keyCode': 110,
        'shiftKey': false
      },
      'o': {
        'which': 111,
        'keyCode': 111,
        'shiftKey': false
      },
      'p': {
        'which': 112,
        'keyCode': 112,
        'shiftKey': false
      },
      'q': {
        'which': 113,
        'keyCode': 113,
        'shiftKey': false
      },
      'r': {
        'which': 114,
        'keyCode': 114,
        'shiftKey': false
      },
      's': {
        'which': 115,
        'keyCode': 115,
        'shiftKey': false
      },
      't': {
        'which': 116,
        'keyCode': 116,
        'shiftKey': false
      },
      'u': {
        'which': 117,
        'keyCode': 117,
        'shiftKey': false
      },
      'v': {
        'which': 118,
        'keyCode': 118,
        'shiftKey': false
      },
      'w': {
        'which': 119,
        'keyCode': 119,
        'shiftKey': false
      },
      'x': {
        'which': 120,
        'keyCode': 120,
        'shiftKey': false
      },
      'y': {
        'which': 121,
        'keyCode': 121,
        'shiftKey': false
      },
      'z': {
        'which': 122,
        'keyCode': 122,
        'shiftKey': false
      },
      '{': {
        'which': 123,
        'keyCode': 123,
        'shiftKey': true
      },
      '|': {
        'which': 124,
        'keyCode': 124,
        'shiftKey': true
      },
      '}': {
        'which': 125,
        'keyCode': 125,
        'shiftKey': true
      },
      '~': {
        'which': 126,
        'keyCode': 126,
        'shiftKey': true
      },
      'end': {
        'which': 0,
        'keyCode': 35,
        'shiftKey': false
      },
      'home': {
        'which': 0,
        'keyCode': 36,
        'shiftKey': false
      },
      'leftarrow': {
        'which': 0,
        'keyCode': 37,
        'shiftKey': false
      },
      'uparrow': {
        'which': 0,
        'keyCode': 38,
        'shiftKey': false
      },
      'rightarrow': {
        'which': 0,
        'keyCode': 39,
        'shiftKey': false
      },
      'downarrow': {
        'which': 0,
        'keyCode': 40,
        'shiftKey': false
      },
      'delete': {
        'which': 0,
        'keyCode': 46,
        'shiftKey': false
      }
    };
    // Down obj
    keys.down = {
      'backspace': {
        'which': 8,
        'keyCode': 8,
        'shiftKey': false
      },
      'tab': {
        'which': 9,
        'keyCode': 9,
        'shiftKey': false
      },
      'enter': {
        'which': 13,
        'keyCode': 13,
        'shiftKey': false
      },
      'shift': {
        'which': 16,
        'keyCode': 16,
        'shiftKey': false
      },
      'ctrl': {
        'which': 17,
        'keyCode': 17,
        'shiftKey': false
      },
      'alt': {
        'which': 18,
        'keyCode': 18,
        'shiftKey': false
      },
      'capslock': {
        'which': 20,
        'keyCode': 20,
        'shiftKey': false
      },
      'escape': {
        'which': 27,
        'keyCode': 27,
        'shiftKey': false
      },
      'space': {
        'which': 32,
        'keyCode': 32,
        'shiftKey': true
      },
      'end': {
        'which': 35,
        'keyCode': 35,
        'shiftKey': false
      },
      'home': {
        'which': 36,
        'keyCode': 36,
        'shiftKey': false
      },
      'leftarrow': {
        'which': 37,
        'keyCode': 37,
        'shiftKey': false
      },
      'uparrow': {
        'which': 38,
        'keyCode': 38,
        'shiftKey': false
      },
      'rightarrow': {
        'which': 39,
        'keyCode': 39,
        'shiftKey': false
      },
      'downarrow': {
        'which': 40,
        'keyCode': 40,
        'shiftKey': false
      },
      'delete': {
        'which': 46,
        'keyCode': 46,
        'shiftKey': false
      },
      '0': {
        'which': 48,
        'keyCode': 48,
        'shiftKey': false
      },
      '1': {
        'which': 49,
        'keyCode': 49,
        'shiftKey': false
      },
      '2': {
        'which': 50,
        'keyCode': 50,
        'shiftKey': false
      },
      '3': {
        'which': 51,
        'keyCode': 51,
        'shiftKey': false
      },
      '4': {
        'which': 52,
        'keyCode': 52,
        'shiftKey': false
      },
      '5': {
        'which': 53,
        'keyCode': 53,
        'shiftKey': false
      },
      '6': {
        'which': 54,
        'keyCode': 54,
        'shiftKey': false
      },
      '7': {
        'which': 55,
        'keyCode': 55,
        'shiftKey': false
      },
      '8': {
        'which': 56,
        'keyCode': 56,
        'shiftKey': false
      },
      '9': {
        'which': 57,
        'keyCode': 57,
        'shiftKey': false
      },
      'a': {
        'which': 65,
        'keyCode': 65,
        'shiftKey': false
      },
      'b': {
        'which': 66,
        'keyCode': 66,
        'shiftKey': false
      },
      'c': {
        'which': 67,
        'keyCode': 67,
        'shiftKey': false
      },
      'd': {
        'which': 68,
        'keyCode': 68,
        'shiftKey': false
      },
      'e': {
        'which': 69,
        'keyCode': 69,
        'shiftKey': false
      },
      'f': {
        'which': 70,
        'keyCode': 70,
        'shiftKey': false
      },
      'g': {
        'which': 71,
        'keyCode': 71,
        'shiftKey': false
      },
      'h': {
        'which': 72,
        'keyCode': 72,
        'shiftKey': false
      },
      'i': {
        'which': 73,
        'keyCode': 73,
        'shiftKey': false
      },
      'j': {
        'which': 74,
        'keyCode': 74,
        'shiftKey': false
      },
      'k': {
        'which': 75,
        'keyCode': 75,
        'shiftKey': false
      },
      'l': {
        'which': 76,
        'keyCode': 76,
        'shiftKey': false
      },
      'm': {
        'which': 77,
        'keyCode': 77,
        'shiftKey': false
      },
      'n': {
        'which': 78,
        'keyCode': 78,
        'shiftKey': false
      },
      'o': {
        'which': 79,
        'keyCode': 79,
        'shiftKey': false
      },
      'p': {
        'which': 80,
        'keyCode': 80,
        'shiftKey': false
      },
      'q': {
        'which': 81,
        'keyCode': 81,
        'shiftKey': false
      },
      'r': {
        'which': 82,
        'keyCode': 82,
        'shiftKey': false
      },
      's': {
        'which': 83,
        'keyCode': 83,
        'shiftKey': false
      },
      't': {
        'which': 84,
        'keyCode': 84,
        'shiftKey': false
      },
      'u': {
        'which': 85,
        'keyCode': 85,
        'shiftKey': false
      },
      'v': {
        'which': 86,
        'keyCode': 86,
        'shiftKey': false
      },
      'w': {
        'which': 87,
        'keyCode': 87,
        'shiftKey': false
      },
      'x': {
        'which': 88,
        'keyCode': 88,
        'shiftKey': false
      },
      'y': {
        'which': 89,
        'keyCode': 89,
        'shiftKey': false
      },
      'z': {
        'which': 90,
        'keyCode': 90,
        'shiftKey': false
      },
      'A': {
        'which': 65,
        'keyCode': 65,
        'shiftKey': true
      },
      'B': {
        'which': 66,
        'keyCode': 66,
        'shiftKey': true
      },
      'C': {
        'which': 67,
        'keyCode': 67,
        'shiftKey': true
      },
      'D': {
        'which': 68,
        'keyCode': 68,
        'shiftKey': true
      },
      'E': {
        'which': 69,
        'keyCode': 69,
        'shiftKey': true
      },
      'F': {
        'which': 70,
        'keyCode': 70,
        'shiftKey': true
      },
      'G': {
        'which': 71,
        'keyCode': 71,
        'shiftKey': true
      },
      'H': {
        'which': 72,
        'keyCode': 72,
        'shiftKey': true
      },
      'I': {
        'which': 73,
        'keyCode': 73,
        'shiftKey': true
      },
      'J': {
        'which': 74,
        'keyCode': 74,
        'shiftKey': true
      },
      'K': {
        'which': 75,
        'keyCode': 75,
        'shiftKey': true
      },
      'L': {
        'which': 76,
        'keyCode': 76,
        'shiftKey': true
      },
      'M': {
        'which': 77,
        'keyCode': 77,
        'shiftKey': true
      },
      'N': {
        'which': 78,
        'keyCode': 78,
        'shiftKey': true
      },
      'O': {
        'which': 79,
        'keyCode': 79,
        'shiftKey': true
      },
      'P': {
        'which': 80,
        'keyCode': 80,
        'shiftKey': true
      },
      'Q': {
        'which': 81,
        'keyCode': 81,
        'shiftKey': true
      },
      'R': {
        'which': 82,
        'keyCode': 82,
        'shiftKey': true
      },
      'S': {
        'which': 83,
        'keyCode': 83,
        'shiftKey': true
      },
      'T': {
        'which': 84,
        'keyCode': 84,
        'shiftKey': true
      },
      'U': {
        'which': 85,
        'keyCode': 85,
        'shiftKey': true
      },
      'V': {
        'which': 86,
        'keyCode': 86,
        'shiftKey': true
      },
      'W': {
        'which': 87,
        'keyCode': 87,
        'shiftKey': true
      },
      'X': {
        'which': 88,
        'keyCode': 88,
        'shiftKey': true
      },
      'Y': {
        'which': 89,
        'keyCode': 89,
        'shiftKey': true
      },
      'Z': {
        'which': 90,
        'keyCode': 90,
        'shiftKey': true
      },
      '`': {
        'which': 192,
        'keyCode': 192,
        'shiftKey': false
      },
      '~': {
        'which': 192,
        'keyCode': 192,
        'shiftKey': true
      },
      '-': {
        'which': 189,
        'keyCode': 189,
        'shiftKey': false
      },
      '_': {
        'which': 189,
        'keyCode': 189,
        'shiftKey': true
      },
      '=': {
        'which': 187,
        'keyCode': 187,
        'shiftKey': false
      },
      '+': {
        'which': 187,
        'keyCode': 187,
        'shiftKey': true
      },
      '[': {
        'which': 219,
        'keyCode': 219,
        'shiftKey': false
      },
      '{': {
        'which': 219,
        'keyCode': 219,
        'shiftKey': true
      },
      ']': {
        'which': 221,
        'keyCode': 221,
        'shiftKey': false
      },
      '}': {
        'which': 221,
        'keyCode': 221,
        'shiftKey': true
      },
      'forwardslash': {
        'which': 220,
        'keyCode': 220,
        'shiftKey': false
      },
      '|': {
        'which': 220,
        'keyCode': 220,
        'shiftKey': true
      },
      ';': {
        'which': 186,
        'keyCode': 186,
        'shiftKey': false
      },
      ':': {
        'which': 186,
        'keyCode': 186,
        'shiftKey': true
      },
      '\'': {
        'which': 222,
        'keyCode': 222,
        'shiftKey': false
      },
      'doublequote': {
        'which': 222,
        'keyCode': 222,
        'shiftKey': true
      },
      ',': {
        'which': 188,
        'keyCode': 188,
        'shiftKey': false
      },
      '<': {
        'which': 188,
        'keyCode': 188,
        'shiftKey': true
      },
      '.': {
        'which': 190,
        'keyCode': 190,
        'shiftKey': false
      },
      '>': {
        'which': 190,
        'keyCode': 190,
        'shiftKey': true
      },
      '/': {
        'which': 191,
        'keyCode': 191,
        'shiftKey': false
      },
      '?': {
        'which': 191,
        'keyCode': 191,
        'shiftKey': true
      }
    };
    // Expose
    return {
      press: press,
      down: down
    };
  }();
/*
 * utils.js:
 *
 * (C) 2013 Jarid Margolin
 *
 */
var utils = function () {
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
      if (typeof el.selectionStart == 'number') {
        return {
          begin: el.selectionStart,
          end: el.selectionEnd
        };
      }
      // Uh-Oh. We must be IE. Fun with TextRange!!
      var range = document.selection.createRange();
      // Determine if there is a selection
      if (range && range.parentElement() == el) {
        var inputRange = el.createTextRange(), endRange = el.createTextRange(), length = el.value.length;
        // Create a working TextRange for the input selection
        inputRange.moveToBookmark(range.getBookmark());
        // Move endRange begin pos to end pos (hence endRange)
        endRange.collapse(false);
        // If we are at the very end of the input, begin and end
        // must both be the length of the el.value
        if (inputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          return {
            begin: length,
            end: length
          };
        }
        // Note: moveStart usually returns the units moved, which 
        // one may think is -length, however, it will stop when it
        // gets to the begin of the range, thus giving us the
        // negative value of the pos.
        return {
          begin: -inputRange.moveStart('character', -length),
          end: -inputRange.moveEnd('character', -length)
        };
      }
      //Return 0's on no selection data
      return {
        begin: 0,
        end: 0
      };
    };
    //
    // Set the caret position at a specified location
    //
    var setSel = function (el, pos) {
      // If normal browser
      if (el.setSelectionRange) {
        el.focus();
        el.setSelectionRange(pos, pos);
      } else if (el.createTextRange) {
        var range = el.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    // Expose
    return {
      addChars: addChars,
      remChars: remChars,
      getSel: getSel,
      setSel: setSel
    };
  }();
/*
 * fakey.js:
 *
 * (C) 2013 Jarid Margolin
 *
 */
// space
// end
// home
// leftarrow
// uparrow
// rightarrow
// downarrow
// delete
// tab
// enter
// escape
// paste
var fakey = function (keys, utils) {
    // Crossbrowser creatEvent
    var createEvent = function (evt) {
      return document.createEvent ? document.createEvent(evt) : document.createEventObject();
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
        var callee = arguments.callee, item = sequence[i];
        // Item vars
        var method = item.key ? key : str, value = item.key || item.str;
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
      return i === length ? callback ? callback() : true : loop(i, fn);
    };
    //
    // Helper to call method with correct args
    //
    var normalizeCall = function (fn, el, val, count, callback) {
      if (!count || typeof count == 'function') {
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
      return count ? fn(el, val, count, callback) : fn(el, val, callback);
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
      var keyPress = keys.press(chr), keyDown = keys.down(chr);
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
        if (chr == 'backspace') {
          removeChar(el);
        }
        // Press
        if (keyPress && keyEvt(keyPress, 'keypress')) {
          // Add char
          addChar(el, chr);
          // Input
          inputEvt();
        }
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
      return callback ? callback() : true;
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
          keyIdentifier: 'false',
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
      var evt = createEvent('Event');
      if (evt.initEvent) {
        evt.initEvent(evtType, true, true);
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
        evt.initEvent(evtType, true, true);
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
      el.value = utils.remChars(el.value, curPos - 1, curPos);
      // Move caret
      utils.setSel(el, curPos - 1);
    };
    // Expose
    return {
      key: key,
      str: str,
      seq: seq
    };
  }(keys, utils);

return fakey;



}));