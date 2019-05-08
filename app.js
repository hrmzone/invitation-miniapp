// app.js
App({
  onLaunch: function() {
    //var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      // wx.login({
      //     success: function () {
      //         wx.getUserInfo({
      //             success: function (res) {
      //                 //console.info(res);
      //                 that.globalData.userInfo = res.userInfo;
      //                 typeof cb == "function" && cb(that.globalData.userInfo)
      //             }
      //         })
      //     }
      // });
    }

  },
  onHide: function() {
    wx.pauseBackgroundAudio();
  },
  onShow: function() {
    wx.playBackgroundAudio()
  },
  globalData: {
    userInfo: null,

    // 下面填写酒店相关信息
    lat: 30.0000,
    lon: 120.000000,
    addressName: "希尔顿大酒店",

    appid: 'wx77856a389b827dee', //此处改成您自己的小程序appid
    uid: 1,
    server: 'https://wx.whwsxx.cn/wx',
    music_url: ''
  }
});