// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the length property has the attributes { ReadOnly }
es5id: 15.3.5.1_A3_T2
description: >
    Checking if varying the length property of
    Function("arg1,arg2,arg3", null) fails
includes: [propertyHelper.js]
---*/

var f = Function("arg1,arg2,arg3", null);

verifyBuiltinProperty(f, "length", {
  writable: false,
});
