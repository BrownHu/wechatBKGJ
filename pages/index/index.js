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

    wx.getStorage({
      key: 'userId',
      success: function (res) {
        // console.log(res.data.openId+"form index.js")
      },
    })
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