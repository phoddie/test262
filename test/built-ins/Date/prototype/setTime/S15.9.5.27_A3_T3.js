// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setTime property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.settime
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype.setTime, "length", {
  enumerable: false,
});
