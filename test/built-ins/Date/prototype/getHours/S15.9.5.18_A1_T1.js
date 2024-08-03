// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.gethours
info: The Date.prototype property "getHours" has { DontEnum } attributes
es5id: 15.9.5.18_A1_T1
description: Checking absence of ReadOnly attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date.prototype, "getHours", {
	writable: true,
});
