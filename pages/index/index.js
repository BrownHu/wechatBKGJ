var util=require('util.js');
var app=getApp();
Page({

  data: {
    // open:'',
    swiperHeight:0,
    height:0,
    imgUrls: [
      "../../images/index/banner1.png",
      "../../images/index/banner2.png",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(options){
    var fromBind=options.bind
    if(fromBind){
      wx.getStorage({
        key: 'userId',
        success: function (res) {
          var that = this
          var url = 'baseInfo'
          var data = {}
          util.allRequest(url, data,
            function (res) {
              console.log(res);
              app.globalData.userInfo = res.result
            },
            function (res) {
              console.log('from  index.js onload')
            },
            true)    
        }
      })
    }
   
  },
  hubing:function(e){
    var height = util.ImageUtil(e);
    this.setData({
      height:height.height,
      swiperHeight: height.swiperHeight
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.jump;
    if (url == 'packagePredictTrans' || url == 'index' || url == 'member'){
          wx.switchTab({
            url: '../' + url + "/" + url,
          })
    }else{
    wx.navigateTo({
      url: '../' + url + "/" + url,
      complete: function () {
        console.log('success')
      }
    })
    }
  }
})