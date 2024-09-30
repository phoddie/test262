// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the length property has the attributes { DontEnum }
es5id: 15.3.5.1_A4_T1
description: >
    Checking if enumerating the length property of
    Function("arg1,arg2,arg3", null) fails
includes: [propertyHelper.js]
---*/

var f = new Function("arg1,arg2,arg3", null);

verifyPrimordialProperty(f, "length", {
  enumerable: false,
});
