import count from './index.mjs';

describe('word count', function() {
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

  it('should count Cyrillic and English', function() {
    assert(count('this это'), 2);
  });

  it('should count Cyrillic 3 words', function() {
    assert(count('три образца слова'), 3);
  });

  it('should count contraction as one word', function() {
    assert(count('"can\'t"'), 1);
    assert(count('James\''),1 );
  });

  it('should count hyphenated word as one word', function() {
    assert(count('well-being'), 1);
  });

  it('should count mixed languages and contractions', function() {
    assert(count('can\'t это لغة'), 3);
  });

  it('should count mixed languages and hyphenated words', function() {
    assert(count('well-being это لغة'), 3);
  });

  it('should count complex mixed languages, hyphenated words and contractions', function() {
    assert(count('我 can\'t believe how fascinating это language fusion is!'), 9);
  });

  it('should count 0 words for standalone hyphens with spaces', function() {
    assert(count('" -- -- -- -- -- -- -- -- -- -- -- -- "'), 0);
  });

  it('should count 0 words for standalone hyphens without spaces', function() {
    assert(count('"- - - - - - - - - - - - - -"'), 0);
  });

  it('should count German words with umlauts', function() {
    assert(count('über'), 1);
    assert(count('fräulein'), 1);
    assert(count('götterdämmerung'), 1);
  });

  it('should count mixed languages with German and umlauts', function() {
    assert(count('über это لغة'), 3);
    assert(count('I can\'t believe the fräulein is singing in 中文'), 10);
    assert(count('The götterdämmerung is at dawn'), 5);
  });

  it('should count Arabic', function() {
    assert(count('سلام سلام.'), 2, 'سلام سلام.');
  });

});
