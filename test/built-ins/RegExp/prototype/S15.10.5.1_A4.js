// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype property has the attribute ReadOnly
es5id: 15.10.5.1_A4
description: Checking if varying the RegExp.prototype property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp, "prototype", {
	writable: false,
 });
 