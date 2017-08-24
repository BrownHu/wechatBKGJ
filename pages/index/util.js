function  ImageUtil(e){
  var height=e.detail.width;
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      height=(windowWidth-20)*0.25;
    }
  }) 
  return height;
}
module.exports = {
  ImageUtil: ImageUtil
}