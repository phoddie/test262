// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Function.prototype.toString.length property does not have the
    attribute DontDelete
es5id: 15.3.4.2_A9
description: >
    Checking if deleting the Function.prototype.toString.length
    property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Function.prototype.toString, "length", {
  configurable: true,
});
