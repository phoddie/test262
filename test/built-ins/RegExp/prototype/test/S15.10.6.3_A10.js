// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.test.length property has the attribute ReadOnly
es5id: 15.10.6.3_A10
description: Checking if varying the RegExp.prototype.test.length property fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(RegExp.prototype.test, "length", {
	writable: false,
});
