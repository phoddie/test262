// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The NaN is DontEnum
es5id: 15.1.1.1_A3.2
description: Use for-in statement
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(this, "NaN", {
	enumerable: false,
});
