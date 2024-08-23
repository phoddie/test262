// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype multiline property has the attribute DontEnum
es5id: 15.10.7.4_A8
description: >
    Checking if enumerating the multiline property of RegExp.prototype
    fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(RegExp.prototype, "multiline", {
	enumerable: false,
});
