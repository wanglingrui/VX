//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    animationData: {},
    cardInfoList: [{
      cardUrl: '../../images/about4.jpg',
      cardInfo: {
        cardTitle: '黑暗总会过去',
        cardInfoMes: ['没有压力的生活就会空虚；', '没有压力的青春就会枯萎；', '没有压力的生命就会黯淡。']
      }
    }, {
        cardUrl: '../../images/about2.jpg',
      cardInfo: {
        cardTitle: '黎明终会到来。',
        cardInfoMes: ['立足今日', '展望明天', '每天都是一个新的起点']
      }
    }, {
      cardUrl: '../../images/about1.jpg',
      cardInfo: {
        cardTitle: '你从不孤单',
        cardInfoMes: ['随性而行，无需刻意；', '随遇而安，切勿奢望;', '随心而静，不要烦忧。']
      }
    }]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation = animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function () {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  buythis: function (e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    wx.navigateTo({
      url: '../about/about'
    });
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  }
})