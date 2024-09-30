// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.toDateString property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.todatestring
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype.toDateString, "length", {
  enumerable: false,
});
