// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-atomics.wait
description: Testing descriptor property of Atomics.wait
includes: [propertyHelper.js]
features: [Atomics]
---*/

verifyPrimordialProperty(Atomics, 'wait', {
  enumerable: false,
  writable: true,
  configurable: true,
});
