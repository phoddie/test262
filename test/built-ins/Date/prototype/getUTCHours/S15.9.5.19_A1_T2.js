// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCHours" has { DontEnum } attributes
esid: sec-date.prototype.getutchours
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "getUTCHours", {
  configurable: true,
});
