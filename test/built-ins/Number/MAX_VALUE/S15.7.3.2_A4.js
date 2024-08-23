// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MAX_VALUE has the attribute DontEnum
es5id: 15.7.3.2_A4
description: Checking if enumerating Number.MAX_VALUE fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Number, "MAX_VALUE", {
	enumerable: false,
});
