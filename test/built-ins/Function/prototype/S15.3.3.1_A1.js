// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype property has the attribute ReadOnly
es5id: 15.3.3.1_A1
description: Checking if varying the Function.prototype property fails
includes: [propertyHelper.js]
---*/

var obj = Function.prototype;

verifyBuiltinProperty(Function, "prototype", {
  writable: false,
});
