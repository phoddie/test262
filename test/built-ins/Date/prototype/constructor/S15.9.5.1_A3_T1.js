// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.constructor property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.constructor
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Date.prototype.constructor, "length", {
  writable: false
});
