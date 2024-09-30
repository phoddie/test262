// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The RegExp.prototype ignoreCase property does not have the attribute
    DontDelete
es5id: 15.10.7.3_A9
description: Checking if deleting the ignoreCase property succeeds
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype, "ignoreCase", {
	configurable: true,
});
