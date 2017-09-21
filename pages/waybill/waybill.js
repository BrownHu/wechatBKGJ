// waybill.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trace: [
      { "date": "2017-07-10", "detail": "邯郸市|发件【邯郸市集散中心】" },
      { "date": "2017-07-10", "detail": "邯郸市|发件【邯郸市集散中心】" },
      { "date": "2017-07-10", "detail": "邯郸市|发件【邯郸市集散中心】" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
    // 查询按钮
  formSubmit:function(e){
      var that=this
      var data={
        waybill:e.detail.value.number
      }
      utils.allRequest("waybillSearch",data,function(res){
        console.log(res.reason)
        var mes = typeof (res.reason) =="undefined" ? "参数未定义":"网络错误"
        if (res.error_code == 0) {
          that.setData({
            trace: res.result.trace
          })
        } else {
          wx.showToast({
            title: mes,
            image: "../../icon/error.png"
          })
          that.setData({
            trace:null
          })
        }
      },function(res){

      },true)
      
      
  }
  
})