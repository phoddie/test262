// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype global property has the attribute DontEnum
es5id: 15.10.7.2_A8
description: >
    Checking if enumerating the global property of RegExp.prototype
    fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype, "global", {
	enumerable: false,
});
