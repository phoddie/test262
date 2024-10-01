// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-defineownproperty-p-desc
description: >
  Define an ordinary property value if key is a Symbol
info: |
  9.4.5.3 [[DefineOwnProperty]] ( P, Desc)
  ...
  3. If Type(P) is String, then
    ...
  4. Return OrdinaryDefineOwnProperty(O, P, Desc).
  ...
includes: [testBigIntTypedArray.js, propertyHelper.js]
features: [BigInt, Reflect, Symbol, TypedArray]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  var sample = new TA([42n, 43n]);

  var s1 = Symbol("foo");
  assert.sameValue(
    Reflect.defineProperty(sample, s1, {
      value: 42,
      configurable: true
    }),
    true,
    "return true after defining property"
  );

  verifyProperty(sample, s1, {
    value: 42,
    writable: false,
    enumerable: false,
    configurable: true,
  });


  var s2 = Symbol("bar");
  var fnset = function() {};
  var fnget = function() {};
  assert.sameValue(
    Reflect.defineProperty(sample, s2, {
      get: fnget,
      set: fnset,
      enumerable: true
    }),
    true,
    "return true after defining property"
  );

  var desc = Object.getOwnPropertyDescriptor(sample, s2);
  assert.sameValue(desc.get, fnget, "accessor's get");
  assert.sameValue(desc.set, fnset, "accessor's set");
  assert.sameValue(desc.enumerable, true);
  verifyProperty(sample, s2, {
    configurable: false,
  });
});
