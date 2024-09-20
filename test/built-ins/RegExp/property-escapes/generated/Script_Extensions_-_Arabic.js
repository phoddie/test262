// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Arabic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00204F,
    0x002E41,
    0x00FDCF,
    0x01EE24,
    0x01EE27,
    0x01EE39,
    0x01EE3B,
    0x01EE42,
    0x01EE47,
    0x01EE49,
    0x01EE4B,
    0x01EE54,
    0x01EE57,
    0x01EE59,
    0x01EE5B,
    0x01EE5D,
    0x01EE5F,
    0x01EE64,
    0x01EE7E
  ],
  ranges: [
    [0x000600, 0x000604],
    [0x000606, 0x0006DC],
    [0x0006DE, 0x0006FF],
    [0x000750, 0x00077F],
    [0x000870, 0x00088E],
    [0x000890, 0x000891],
    [0x000897, 0x0008E1],
    [0x0008E3, 0x0008FF],
    [0x00FB50, 0x00FBC2],
    [0x00FBD3, 0x00FD8F],
    [0x00FD92, 0x00FDC7],
    [0x00FDF0, 0x00FDFF],
    [0x00FE70, 0x00FE74],
    [0x00FE76, 0x00FEFC],
    [0x0102E0, 0x0102FB],
    [0x010E60, 0x010E7E],
    [0x010EC2, 0x010EC4],
    [0x010EFC, 0x010EFF],
    [0x01EE00, 0x01EE03],
    [0x01EE05, 0x01EE1F],
    [0x01EE21, 0x01EE22],
    [0x01EE29, 0x01EE32],
    [0x01EE34, 0x01EE37],
    [0x01EE4D, 0x01EE4F],
    [0x01EE51, 0x01EE52],
    [0x01EE61, 0x01EE62],
    [0x01EE67, 0x01EE6A],
    [0x01EE6C, 0x01EE72],
    [0x01EE74, 0x01EE77],
    [0x01EE79, 0x01EE7C],
    [0x01EE80, 0x01EE89],
    [0x01EE8B, 0x01EE9B],
    [0x01EEA1, 0x01EEA3],
    [0x01EEA5, 0x01EEA9],
    [0x01EEAB, 0x01EEBB],
    [0x01EEF0, 0x01EEF1]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Arabic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Arabic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Arab}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Arab}"
);
testPropertyEscapes(
  /^\p{scx=Arabic}+$/u,
  matchSymbols,
  "\\p{scx=Arabic}"
);
testPropertyEscapes(
  /^\p{scx=Arab}+$/u,
  matchSymbols,
  "\\p{scx=Arab}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000605,
    0x0006DD,
    0x00088F,
    0x0008E2,
    0x00FE75,
    0x01EE04,
    0x01EE20,
    0x01EE23,
    0x01EE28,
    0x01EE33,
    0x01EE38,
    0x01EE3A,
    0x01EE48,
    0x01EE4A,
    0x01EE4C,
    0x01EE50,
    0x01EE53,
    0x01EE58,
    0x01EE5A,
    0x01EE5C,
    0x01EE5E,
    0x01EE60,
    0x01EE63,
    0x01EE6B,
    0x01EE73,
    0x01EE78,
    0x01EE7D,
    0x01EE7F,
    0x01EE8A,
    0x01EEA4,
    0x01EEAA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0005FF],
    [0x000700, 0x00074F],
    [0x000780, 0x00086F],
    [0x000892, 0x000896],
    [0x000900, 0x00204E],
    [0x002050, 0x002E40],
    [0x002E42, 0x00DBFF],
    [0x00E000, 0x00FB4F],
    [0x00FBC3, 0x00FBD2],
    [0x00FD90, 0x00FD91],
    [0x00FDC8, 0x00FDCE],
    [0x00FDD0, 0x00FDEF],
    [0x00FE00, 0x00FE6F],
    [0x00FEFD, 0x0102DF],
    [0x0102FC, 0x010E5F],
    [0x010E7F, 0x010EC1],
    [0x010EC5, 0x010EFB],
    [0x010F00, 0x01EDFF],
    [0x01EE25, 0x01EE26],
    [0x01EE3C, 0x01EE41],
    [0x01EE43, 0x01EE46],
    [0x01EE55, 0x01EE56],
    [0x01EE65, 0x01EE66],
    [0x01EE9C, 0x01EEA0],
    [0x01EEBC, 0x01EEEF],
    [0x01EEF2, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Arabic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Arabic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Arab}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Arab}"
);
testPropertyEscapes(
  /^\P{scx=Arabic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Arabic}"
);
testPropertyEscapes(
  /^\P{scx=Arab}+$/u,
  nonMatchSymbols,
  "\\P{scx=Arab}"
);
