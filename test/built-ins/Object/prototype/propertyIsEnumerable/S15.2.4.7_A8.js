// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Object.prototype.propertyIsEnumerable.length property has the
    attribute DontEnum
es5id: 15.2.4.7_A8
description: >
    Checking if enumerating the
    Object.prototype.propertyIsEnumerable.length property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Object.prototype.propertyIsEnumerable, "length", {
  enumerable: false,
});
