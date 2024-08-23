// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Object.prototype.toLocaleString.length property does not have the
    attribute DontDelete
es5id: 15.2.4.3_A9
description: >
    Checknig if deleting of the Object.prototype.toLocaleString.length
    property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Object.prototype.toLocaleString, "length", {
  configurable: true,
});
