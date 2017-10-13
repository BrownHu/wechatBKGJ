function  ImageUtil(e){
  var height={};
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      height.height=(windowWidth)*0.25;
      height.swiperWidth = windowWidth
      height.swiperHeight = windowWidth*0.41;
    }
  }) 
  return height;
}
module.exports = {
  ImageUtil: ImageUtil
}