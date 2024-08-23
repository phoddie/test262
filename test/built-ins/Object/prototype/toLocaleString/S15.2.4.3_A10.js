// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Object.prototype.toLocaleString.length property has the attribute
    ReadOnly
es5id: 15.2.4.3_A10
description: >
    Checking if varying the Object.prototype.toLocaleString.length
    property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Object.prototype.toLocaleString, "length", {
  writable: false,
});
