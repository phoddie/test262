// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setMonth property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.setmonth
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype.setMonth, "length", {
  enumerable: false,
});
