// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Object.prototype.toLocaleString.length property has the attribute
    DontEnum
es5id: 15.2.4.3_A8
description: >
    Checking if enumerating the Object.prototype.toLocaleString.length
    property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Object.prototype.toLocaleString, "length", {
  enumerable: false,
});
