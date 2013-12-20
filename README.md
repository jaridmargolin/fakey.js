fakey
=====

[![Selenium Test Status](https://saucelabs.com/buildstatus/jaridmargolin_fakey)](https://saucelabs.com/u/jaridmargolin_fakey)

Fake key events for testing purposes. 



usage
-----

	// Single key
	fakey.key(el, 'a', function () {});
	fakey.key(el, 'backspace', 5, function () {});

	// Str
	fakey.str(el, 'some string', function () {});
	fakey.str(el, '4242', 4, function () {});

	// Seqeunce of keys or strings
	fakey.seq(el, [
	  { str: '4242', count: 4 },
	  { key: 'backspace', count: 8 }
	], function () {});