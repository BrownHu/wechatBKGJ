function  getheight(){
  var height=0;
  wx.getSystemInfo({
    success: function(res) {
    height=res.windowWidth*0.555;
    },
  })  
  return height;


}
module.exports = {
  getheight: getheight
}