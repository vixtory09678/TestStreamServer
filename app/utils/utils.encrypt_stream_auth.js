const md5 = require('crypto').createHash('md5');

module.exports = function (streamId, exp, key) {
  return exp + '-' + md5.update(streamId+'-'+exp+'-'+key).digest('hex')
}