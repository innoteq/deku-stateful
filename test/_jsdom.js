var jsdom = require('jsdom')

var html = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>'
var blacklist = [ 'constructor', 'console', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval' ]

process.env.JSDOM = 1
jsdom.env({ done, html })

function done (errors, window) {
  Object.keys(window).forEach((key) => {
    if (blacklist.indexOf(key) === -1) global[key] = window[key]
  })

  global.window = window
  window.console = global.console

  require('./index')
}
