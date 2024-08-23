// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype.call.length property has the attribute DontEnum
es5id: 15.3.4.4_A11
description: >
    Checking if enumerating the Function.prototype.call.length
    property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Function.prototype.call, "length", {
  enumerable: false,
});
