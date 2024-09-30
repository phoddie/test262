// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MIN_VALUE is DontDelete
es5id: 15.7.3.3_A3
description: Checking if deleting Number.MIN_VALUE fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number, "MIN_VALUE", {
	configurable: false,
});
