// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.getfullyear
info: |
    The Date.prototype.getFullYear property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
es5id: 15.9.5.10_A3_T2
description: Checking DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype.getFullYear, "length", {
  configurable: true,
});
