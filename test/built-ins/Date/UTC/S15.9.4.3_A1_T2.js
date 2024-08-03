// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.utc
info: The Date property "UTC" has { DontEnum } attributes
es5id: 15.9.4.3_A1_T2
description: Checking absence of DontDelete attribute
includes: [propertyHelper.js]
---*/
verifyBuiltinProperty(Date, "UTC", {
  configurable: true,
 });

