// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MAX_VALUE is ReadOnly
es5id: 15.7.3.2_A2
description: Checking if varying Number.MAX_VALUE fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number, "MAX_VALUE", {
	writable: false,
});
