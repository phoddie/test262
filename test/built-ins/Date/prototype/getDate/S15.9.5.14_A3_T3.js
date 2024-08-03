// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getDate property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.getdate
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype.getDate, "length", {
  enumerable: false
});
