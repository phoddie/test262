// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getUTCMinutes property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.getutcminutes
description: Checking DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype.getUTCMinutes, "length", {
  configurable: true
});
