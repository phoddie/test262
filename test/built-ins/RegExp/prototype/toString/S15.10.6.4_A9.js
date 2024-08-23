// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The RegExp.prototype.toString.length property does not have the attribute
    DontDelete
es5id: 15.10.6.4_A9
description: >
    Checking if deleting the RegExp.prototype.toString.length property
    fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(RegExp.prototype.toString, "length", {
	configurable: true,
});
