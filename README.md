fakey [![Build Status](https://travis-ci.org/jaridmargolin/fakey.png)](https://travis-ci.org/jaridmargolin/fakey)
=====

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jaridmargolin_fakey.svg)](https://saucelabs.com/u/jaridmargolin_fakey)   

![fakey](https://i.cloudup.com/GWoPR8trbs.gif)


Fake user key events on input elements.


Why
---

Both manual and automated testing of user input is a nightmare. Selenium is great for functional testing, but has a large learning curveand requires significant setup time. Fakey was created to be a plug and play solution, written in pure js.


Features
--------

* Easy install: `bower install fakey`
* AMD compatible
* IE >= 7 support


Methods
-------

Methods should not be called until the DOM is ready.

#### fakey.key(el, key, *count, *callback)

* **el (required)**: DOM element that you would like to fake input for.
* **key (required)**: The key you would like to fake.
* **count (optional)**: The ammount of times to fake the above key.
* **callback (optional)**: Callback executed after entering the specified key n times


    fakey.key(el, 'backspace', 5, function () {
      // Do something
    });

---

#### fakey.str(el, str, *count, *callback)

* **el (required)**: DOM element that you would like to fake input for.
* **key (required)**: A string of keys you would like to fake.
* **count (optional)**: The ammount of times to fake the above string.
* **callback (optional)**: Callback executed after entering the specified string n times


    fakey.str(el, '4242', 4, function () {
      // Do something
    });

---

#### fakey.seq(el, seq, *callback)

* **el (required)**: DOM element that you would like to fake input for.
* **seq (required)**: An array of objects representing keys and strings to sequentially fake.
* **callback (optional)**: Callback executed after entering the specified key n times

**example:**

    fakey.seq(el, [
      { str: '4242', count: 4 },
      { key: 'backspace', count: 8 }
    ], function () {
      // Do something
    });
    
---

License
-------

The MIT License (MIT) Copyright (c) 2013 Jarid Margolin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.