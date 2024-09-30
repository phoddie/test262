// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setMonth" has { DontEnum } attributes
esid: sec-date.prototype.setmonth
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyPrimordialProperty(Date.prototype, "setMonth", {
  configurable: true,
});
