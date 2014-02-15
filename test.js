describe('word count', function() {
  var count = require('./');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('should count right', function() {
    assert(count('this is 中文'), 4);
    assert(count('中文is this'), 4);
    assert(count('this中文is a 单词'), 7);
    assert(count('سلام سلام.'), 2);
    assert(count('this لغة'), 2);
    assert(count('داد فارسی ۱۲۳۱۲۳'), 3);
    // should not count ZWNJ as separating character
    assert(count('می‌رود نیم‌فاصله'), 2);
  });

});
