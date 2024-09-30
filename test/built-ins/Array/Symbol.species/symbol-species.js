// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
 Array has a property at `Symbol.species`
esid: sec-get-array-@@species
author: Sam Mikes
description: Array[Symbol.species] exists per spec
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

var desc = Object.getOwnPropertyDescriptor(Array, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyPrimordialProperty(Array, Symbol.species, {
	enumerable: false,
	configurable: true
 });
 