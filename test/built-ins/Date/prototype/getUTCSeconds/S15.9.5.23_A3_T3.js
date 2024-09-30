// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getUTCSeconds property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getutcseconds
description: Checking DontEnum attribute
m attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype.getUTCSeconds, "length", {
  enumerable: false,
});
