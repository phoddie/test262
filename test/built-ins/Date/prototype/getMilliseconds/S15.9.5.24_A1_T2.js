// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.getmilliseconds
info: The Date.prototype property "getMilliseconds" has { DontEnum } attributes
es5id: 15.9.5.24_A1_T2
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "getMilliseconds", {
  configurable: true,
});
