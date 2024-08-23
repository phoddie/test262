// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.exec.length property has the attribute DontEnum
es5id: 15.10.6.2_A8
description: >
    Checking if enumerating the RegExp.prototype.exec.length property
    fails
includes: [propertyHelper.js]
---*/

verifyBuiltinProperty(RegExp.prototype.exec, "length", {
	enumerable: false,
 });
 