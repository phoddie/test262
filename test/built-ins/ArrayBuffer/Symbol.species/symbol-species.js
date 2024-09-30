// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
 ArrayBuffer has a property at `Symbol.species`
esid: sec-get-arraybuffer-@@species
author: Sam Mikes
description: ArrayBuffer[Symbol.species] exists per spec
features: [ArrayBuffer, Symbol.species]
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyPrimordialProperty(ArrayBuffer, Symbol.species, {
	enumerable: false,
	configurable: true
 });

