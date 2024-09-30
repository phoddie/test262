// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.NEGATIVE_INFINITY is ReadOnly
es5id: 15.7.3.5_A2
description: Checking if varying Number.NEGATIVE_INFINITY fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Number, "NEGATIVE_INFINITY", {
	writable: false,
});
