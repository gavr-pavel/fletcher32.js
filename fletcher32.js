function Fletcher32() {
  // Optimized algorithm taken from https://en.wikipedia.org/wiki/Fletcher%27s_checksum#Optimizations
  var _sum1 = 0xffff;
  var _sum2 = 0xffff;

  return {
    append: append,
    result: result
  };

  function append(data) {
    // data should be an array of 16-bit numbers
    var words = data.length;
    var dataIndex = 0;
    while (words) {
      var tlen = words > 359 ? 359 : words;
      words -= tlen;
      do {
        _sum2 += _sum1 += data[dataIndex++];
      } while (--tlen);

      _sum1 = ((_sum1 & 0xffff) >>> 0) + (_sum1 >>> 16);
      _sum2 = ((_sum2 & 0xffff) >>> 0) + (_sum2 >>> 16);
    }
  }

  function result() {
    _sum1 = ((_sum1 & 0xffff) >>> 0) + (_sum1 >>> 16);
    _sum2 = ((_sum2 & 0xffff) >>> 0) + (_sum2 >>> 16);
    return ((_sum2 << 16) >>> 0 | _sum1) >>> 0;
  }
}
