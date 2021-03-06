Page({

  /**
   * 页面的初始数据
   */
  data: {
  topTitle:'',
  questions:{},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      var id=options.id
      var topName=options.top
      wx.request({
        url: 'https://api.beckbuy.com/api/helpCentre/detail/'+id,
        success:res=>{
           that.setData({
             questions:res.data.result,
             topTitle:topName
           })
        }
      })
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
        wx.showLoading({
          title: '正在刷新',
        })
        this.onLoad()
      },
      complete: res => {
        setTimeout(function () {
          wx.hideLoading()
          wx.stopPullDownRefresh()
        }, 500)

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
  
  }
})