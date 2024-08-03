// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.toLocaleString property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.tolocalestring
description: Checking DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype.toLocaleString, "length", {
  configurable: true
});
