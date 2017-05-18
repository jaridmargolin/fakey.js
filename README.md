fakey.js [![Build Status](https://travis-ci.org/artemv/fakey.js.png)](https://travis-ci.org/artemv/fakey.js)
=====

![fakey](https://i.cloudup.com/GWoPR8trbs.gif)


Synthesize user keystrokes on input elements.



## Why

I needed a lightweight solution for creating automated tests that synthesized user keystrokes on input elements. Selenium was a possibility, but it felt rather bulky, and had a large barrier to entry. Fakey was created to be a plug and play solution, written in pure js.



## Features

* Easy install: `bower install fakey`
* AMD compatible
* IE >= 7 support



## Methods

Methods should not be called until the DOM is ready.

#### fakey.key(el, key, *count, *callback)

* **el (required)**: DOM element that you would like to fake input for.
* **key (required)**: The key you would like to fake.
* **count (optional)**: The ammount of times to fake the above key.
* **callback (optional)**: Callback executed after entering the specified key n times

**example:**

    fakey.key(el, 'backspace', 5, function () {
      // Do something
    });


#### fakey.str(el, str, *count, *callback)

* **el (required)**: DOM element that you would like to fake input for.
* **key (required)**: A string of keys you would like to fake.
* **count (optional)**: The ammount of times to fake the above string.
* **callback (optional)**: Callback executed after entering the specified string n times

**example:**

    fakey.str(el, '4242', 4, function () {
      // Do something
    });


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



## TESTS

**Install Dependencies**

```
npm install
```

**Run/View**

```
npm test
```



## License

The MIT License (MIT) Copyright (c) 2014 Jarid Margolin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.