//index.js
//获取应用实例
const app = getApp()
var util = require('util.js');
Page({
  data: {
    gap:10,
    topheight:0,
    singleheight:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  tapme:function(){
    console.log('taped');
    this.setData({
      condition:true,
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  hubing: function () {
    var height = util.ImageUtil();
    console.log(height)
    this.setData({
      topheight: height.topheight,
      singleheight: height.singleheight,
      gap:height.gap
    })
  },
  jump: function (e) {
    var id = e.currentTarget.dataset.jump;
    wx.redirectTo({
      url: '../../pages/guideGif/guideGif?id='+id,
    })
  }
})
