// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype.valueOf.length property has the attribute DontEnum
es5id: 15.2.4.4_A8
description: >
    Checking if enumerating the Object.prototype.valueOf.length
    property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Object.prototype.valueOf, "length", {
  enumerable: false,
});
