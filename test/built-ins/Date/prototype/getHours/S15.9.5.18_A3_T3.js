// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.gethours
info: |
    The Date.prototype.getHours property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
es5id: 15.9.5.18_A3_T3
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype.getHours, "length", {
  enumerable: false,
});
