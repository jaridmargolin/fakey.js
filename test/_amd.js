/*
 * test/_amd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'fakey/fakey'
], function (assert, fakey) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('amd - fakey.js', function () {

  it('Should expose methods.', function () {
    assert.ok(fakey.key);
    assert.ok(fakey.str);
    assert.ok(fakey.seq);
  });

});


});