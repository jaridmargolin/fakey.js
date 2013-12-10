/*
 * test/utils.js:
 *
 * (C) 2013 First Opinion
 * MIT LICENCE
 *
 */ 

define([
  'chai',
  'fakey',
  'utils'
], function (chai, fakey, utils) {


// Cache me
var should = chai.should(),
    assert = chai.assert;

// Need to store init state so we can reset after each test
var content = document.getElementById('test-content'),
    contentHTML = content.innerHTML;

// Cache lookup
var el;

//
// Set properly execute key method
//
var testKey = function () {
  it('Should fire a keydown evt', function (done) {
    el.addEventListener('keydown', function (evt) {
      done();
    });
    fakey.key(el, 'a');
  });
  it('Should break chain if preventDefault called on keydown', function () {
    el.addEventListener('keydown', function (evt) {
      evt.preventDefault();
    });
    el.addEventListener('keypress', function (evt) {
      assert.fail();
    });
    fakey.key(el, 'a');
  });
  it('Should fire a keypress evt', function (done) {
    el.addEventListener('keypress', function (evt) {
      done();
    });
    fakey.key(el, 'a');
  });
  it('Should break chain if preventDefault called on keypress', function () {
    el.addEventListener('keypress', function (evt) {
      evt.preventDefault();
    });
    el.addEventListener('input', function (evt) {
      assert.fail();
    });
    fakey.key(el, 'a');
  });
  it('Should fire an input evt', function (done) {
    el.addEventListener('input', function (evt) {
      done();
    });
    fakey.key(el, 'a');
  });
  it('Should fire a keyup evt', function (done) {
    el.addEventListener('keyup', function (evt) {
      done();
    });
    fakey.key(el, 'a');
  });
  it('Should update caret position', function () {
    fakey.key(el, 'a');
    assert.equal(utils.getSel(el).begin, 1);
  });
  it('Should add key character', function () {
    fakey.key(el, 'a');
    assert.equal(el.value, 'a');
  });
  it('Should add key n times', function (done) {
    fakey.key(el, 'a', 4, function () {
      assert.equal(el.value, 'aaaa');
      done();
    });
  });
};

//
// Set properly execute key method
//
var testStr = function () {
  it('Should add multiple characters', function (done) {
    fakey.str(el, 'abc def', function () {
      assert.equal(el.value, 'abc def');
      done();
    });
  });
  it('Should add multiple characters n times', function (done) {
    fakey.str(el, '42', 2, function () {
      assert.equal(el.value, '4242');
      done();
    });
  });
};

//
// Set properly execute key method
//
var testSeq = function () {
  it('Should add key', function (done) {
    fakey.seq(el, [
        { key: 'a' }
    ], function () {
      assert.equal(el.value, 'a');
      done();
    });
  });
  it('Should add str', function (done) {
    fakey.seq(el, [
        { str: 'abc' }
    ], function () {
      assert.equal(el.value, 'abc');
      done();
    });
  });
  it('Should handle count', function (done) {
    fakey.seq(el, [
        { key: 'a', count: 4 }
    ], function () {
      assert.equal(el.value, 'aaaa');
      done();
    });
  });
  it('Should add items in seq', function (done) {
    fakey.seq(el, [
        { key: 'a' },
        { str: 'bcd' },
        { key: 'backspace' }
    ], function () {
      assert.equal(el.value, 'abc');
      done();
    });
  });
};

// test please
describe('ui', function () {
  // Reset HTML
  beforeEach(function () {
    el = document.forms[0]['test'];
  });

  // Reset HTML
  afterEach(function () {
    content.innerHTML = contentHTML;
    curPos = 0;
  });

  // Tests
  describe('key', testKey);
  describe('str', testStr);
  describe('seq', testSeq);
});


});