// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCDate" has { DontEnum } attributes
esid: sec-date.prototype.getutcdate
description: Checking absence of ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date.prototype, "getUTCDate", {
  writable: true,
});
