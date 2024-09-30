// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The RegExp.prototype global property does not have the attribute
    DontDelete
es5id: 15.10.7.2_A9
description: Checking if deleting the global property succeeds
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(RegExp.prototype, "global", {
	configurable: true,
});
