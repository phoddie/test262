// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.exec.length property has the attribute ReadOnly
es5id: 15.10.6.2_A10
description: Checking if varying the RegExp.prototype.exec.length property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype.exec, "length", {
	writable: false,
 });
