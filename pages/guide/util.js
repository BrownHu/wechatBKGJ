function ImageUtil() {
  var height = {}
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      height.topheight=(windowWidth-30)*0.47;
      height.singleheight=(windowWidth-30)*0.485;
      height.gap=(windowWidth-30)*0.03
      }
  })
  return height;
}
module.exports = {
  ImageUtil: ImageUtil
}