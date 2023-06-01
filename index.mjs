/**
 * Word Count
 *
 * Word count in respect of CJK characters.
 *
 * Copyright (c) 2015 by Hsiaoming Yang.
 */

const pattern = /[a-zA-Z0-9'_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+[a-zA-Z0-9'_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff-]*|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;

/**
 * Calculate word count in respect of CJK characters.
 *
 * @param {string} text
 * @returns {number}
 */
export default function (text) {
  const m = text.match(pattern);
  let count = 0;
  if (!m) {
    return 0;
  }
  for (let i = 0; i < m.length; i++) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
};
