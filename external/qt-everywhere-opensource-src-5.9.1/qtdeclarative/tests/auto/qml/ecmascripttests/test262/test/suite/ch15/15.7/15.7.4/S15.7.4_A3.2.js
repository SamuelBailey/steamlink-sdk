// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Number prototype object has the property toString
 *
 * @path ch15/15.7/15.7.4/S15.7.4_A3.2.js
 * @description The test uses hasOwnProperty() method
 */

//CHECK#1
if(Number.prototype.hasOwnProperty("toString") !== true){
  $ERROR('#1: The Number prototype object has the property toString');
}


