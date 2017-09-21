// tradeoutAccount.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   record:null,
   emptyHide:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that=this
    var url ="finance"
    var data={
      op:"tradeout"
    }
    utils.allRequest(url,data,function(res){
      console.log(res)
      if(res.error_code==0){
          var length=res.result.length
          var hideme= length== 0 ? false: true
          var record=length==0 ? null:res.result
          that.setData({
            record:record,
            emptyHide:hideme
          })
          wx.hideLoading()
      }
    },function(res){
      wx.hideLoading()
        wx.showToast({
          title: "错误",
          image:'../../icon/error.png'
        })
    },true)
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
    wx.startPullDownRefresh({
      success: res => {
        this.onLoad()
      },
      complete: res => {
        wx.stopPullDownRefresh()
      }
    })  
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
  jump: function (e) {
    utils.jump(e)
  },
})