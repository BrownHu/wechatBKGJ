// pages/helpcentreAgentMember/helpcentreAgentMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topName:null,
      child:{},
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id=options.id
      var that=this
      wx.request({
        url: 'https://api.beckbuy.com/api/helpCentre/questions/'+id,
        success:res=>{
          var top=res.data.result.TopName
          top=top==null?"暂无数据":top
          var child=res.data.result.child
          that.setData({
            topName:top,
            child:child
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
  
  },
jump:function(e){
  var id=e.currentTarget.dataset.id
  var top=e.currentTarget.dataset.top
  wx.navigateTo({
    url: '../../pages/helpcentreAgentdetailMember/helpcentreAgentdetailMember?id='+id+"&top="+top,
  })
}
})