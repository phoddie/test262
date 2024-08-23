// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.getTime property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
esid: sec-date.prototype.getseconds
description: Checking ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Date.prototype.getTime, "length", {
  writable: false
});
