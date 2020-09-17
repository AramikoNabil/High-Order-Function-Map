var kodeUnix = [
  23,
  89,
  67,
  29,
  192,
  6,
  2,
  129,
  21,
  872,
  891,
  901,
  70,
  61,
  78,
  62,
  32,
  90,
  90,
];

const total = kodeUnix
  .map((a) => a * 2)
  .map((a) => a / 5)
  .map((a)=>a - kodeUnix.length)

console.log(total);
