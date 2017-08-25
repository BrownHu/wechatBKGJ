function  ImageUtil(e){
  var height={};
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      height.height=(windowWidth-20)*0.25;
      height.swiperHeight = (windowWidth-30)*0.37;
    }
  }) 
  return height;
}
module.exports = {
  ImageUtil: ImageUtil
}