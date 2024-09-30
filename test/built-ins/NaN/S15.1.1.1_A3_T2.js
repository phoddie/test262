// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The NaN is DontDelete
es5id: 15.1.1.1_A3_T2
description: Use delete
flags: [noStrict]
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(this, "NaN", {
	configurable: false,
});
