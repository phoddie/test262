// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the prototype property has the attributes { DontDelete }
es5id: 15.3.5.2_A1_T1
description: >
    Checking if deleting the prototype property of Function("", null)
    fails
includes: [propertyHelper.js]
---*/

var f = new Function("", null);

verifyBuiltinProperty(f, "prototype", {
  configurable: false,
});
