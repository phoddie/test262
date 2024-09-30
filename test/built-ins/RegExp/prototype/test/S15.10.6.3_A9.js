// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The RegExp.prototype.test.length property does not have the attribute
    DontDelete
es5id: 15.10.6.3_A9
description: Checking if deleting RegExp.prototype.test.length property fails
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype.test, "length", {
	configurable: true,
});
