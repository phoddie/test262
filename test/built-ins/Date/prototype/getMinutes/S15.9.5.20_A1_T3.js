// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.getminutes
info: The Date.prototype property "getMinutes" has { DontEnum } attributes
es5id: 15.9.5.20_A1_T3
description: Checking DontEnum attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "getMinutes", {
  enumerable: false,
});
