// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getUTCHours property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getutchours
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date.prototype.getUTCHours, "length", {
  writable: false
});
