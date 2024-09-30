// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: the length property does not have the attributes { DontDelete }
es5id: 15.3.5.1_A2_T2
description: >
    Checking if deleting the length property of
    Function("arg1,arg2,arg3","arg4,arg5", null) succeeds
includes: [propertyHelper.js]
---*/

var f = Function("arg1,arg2,arg3", "arg4,arg5", null);

verifyPrimordialProperty(f, "length", {
    configurable: true,
});
