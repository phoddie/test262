// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Function.prototype.call.length property does not have the attribute
    DontDelete
es5id: 15.3.4.4_A9
description: >
    Checking if deleting the Function.prototype.call.length property
    fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Function.prototype.call, "length", {
  configurable: true,
});
