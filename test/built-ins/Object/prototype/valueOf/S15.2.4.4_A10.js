// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype.valueOf.length property has the attribute ReadOnly
es5id: 15.2.4.4_A10
description: >
    Checking if varying the Object.prototype.valueOf.length property
    fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Object.prototype.valueOf, "length", {
  writable: false,
});
