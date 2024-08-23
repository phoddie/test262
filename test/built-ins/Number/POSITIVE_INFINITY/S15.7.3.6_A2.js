// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.POSITIVE_INFINITY is ReadOnly
es5id: 15.7.3.6_A2
description: Checking if varying Number.POSITIVE_INFINITY fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(Number, "POSITIVE_INFINITY", {
	writable: false,
});
