// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype.toString.length property has the attribute DontEnum
es5id: 15.3.4.2_A8
description: >
    Checking if enumerating the Function.prototype.toString.length
    property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Function.prototype.toString, "length", {
  enumerable: false,
});
