describe('word count', function() {
  var count = require('./');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('should count CJK at end', function() {
    assert(count('this is 中文'), 4);
  });

  it('should count CJK at start', function() {
    assert(count('中文is this'), 4);
  });

  it('should count CJK mix', function() {
    assert(count('this中文is a 单词'), 7);
  });

  it('should count Arabic', function() {
    assert(count('سلام سلام.'), 2);
  });

  it('should count Arabic and English', function() {
    assert(count('this لغة'), 2);
  });

  it('should count Arabic 3 words', function() {
    assert(count('داد فارسی ۱۲۳۱۲۳'), 3);
  });

  it('should count 0 words', function() {
    assert(count('"- - - - - - - - - - - - - -"'), 0);
  });

});
