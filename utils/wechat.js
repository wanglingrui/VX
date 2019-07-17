"use strict";function login(){return new Promise(function(n,e){wx.login({success:n,fail:e})})}function getUserInfo(){return new Promise(function(n,e){wx.getUserInfo({success:n,fail:e})})}module.exports={login:login,getUserInfo:getUserInfo};
//# sourceMappingURL=wechat.js.map
