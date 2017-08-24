var util=require('util.js');
Page({

  data: {
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

  hubing:function(e){
    var height = util.ImageUtil(e);
    console.log(height);
    this.setData({
      height:height
    })
  }
})