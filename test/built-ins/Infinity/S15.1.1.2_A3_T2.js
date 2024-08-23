// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Infinity is DontDelete
es5id: 15.1.1.2_A3_T2
description: Use delete
flags: [noStrict]
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(this, "Infinity", {
	configurable: false,
});
