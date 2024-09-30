// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the length property has the attributes { DontEnum }
es5id: 15.3.5.1_A4_T2
description: >
    Checking if enumerating the length property of
    Function("arg1,arg2,arg3","arg4,arg5", null) fails
includes: [propertyHelper.js]
---*/

var f = Function("arg1,arg2,arg3", "arg5,arg4", null);

verifyPrimordialProperty(f, "length", {
  enumerable: false,
});
