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
  it('Should add key character to element value', function () {
    fakey.key(el, 'a');
    assert.equal(el.value, 'a');
  });
};

//
// Set properly execute key method
//
var testSeq = function () {
  it('Should add multiple characters to element value', function (done) {
    fakey.seq(el, 'abc def', function () {
      assert.equal(el.value, 'abc def');
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
  });

  // Tests
  describe('key', testKey);
  describe('seq', testSeq);
});


});