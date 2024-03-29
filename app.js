"use strict";
var wechat = require("./utils/wechat");
App({
  data: {
    name: "WeApp Boilerplate",
    version: "0.1.0",
    userInfo: null
  },
  other: "other variables",
  getUserInfo: function() {
    var n = this;
    return new Promise(function(e, o) {
      return n.data.userInfo ? o(n.data.userInfo) : void wechat.login().then(function() {
        return wechat.getUserInfo()
      }).then(function(n) {
        return n.userInfo
      }).then(function(e) {
        return n.data.userInfo = e
      }).then(function(n) {
        return e(n)
      }).catch(function(n) {
        return console.error("failed to get user info, error: " + n)
      })
    })
  },
  onLaunch: function() {
    console.log(" ========== Application is launched ========== ")
  },
  onShow: function() {
    console.log(" ========== Application is showed ========== ")
  },
  onHide: function() {
    console.log(" ========== Application is hid ========== ")
  }
});
//# sourceMappingURL=app.js.map