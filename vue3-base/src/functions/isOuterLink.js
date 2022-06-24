export { isOuterLink as default }

/**
 * URLにhttpsが含まれているかどうか検査し真偽値を返す
 * @param {String} path url
 * @returns {Boolean} 結果
 */
function isOuterLink(path) {
  return !/^https?:\/\//.test(path)
}
