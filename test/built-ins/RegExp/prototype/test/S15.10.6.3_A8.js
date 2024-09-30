// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.test.length property has the attribute DontEnum
es5id: 15.10.6.3_A8
description: >
    Checking if enumerating the RegExp.prototype.test.length property
    fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype.test, "length", {
	enumerable: false,
});
