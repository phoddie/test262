// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Object.prototype.propertyIsEnumerable.length property has the
    attribute ReadOnly
es5id: 15.2.4.7_A10
description: >
    Checking if varying the
    Object.prototype.propertyIsEnumerable.length property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Object.prototype.propertyIsEnumerable, "length", {
  writable: false,
});
