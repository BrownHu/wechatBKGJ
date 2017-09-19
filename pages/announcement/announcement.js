// announcement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    announcement:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://api.beckbuy.com/api/announce',
      success:res=>{
        console.log(res.data.error_code)
          if(res.data.error_code==0){
              that.setData({
                announcement: res.data.result
              })              
            console.log(res.data.result)
              wx.hideLoading()
          }
      
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
    return {
      title:"佰客国际",
      desc: '我发现一个好玩的小程序-【佰客国际】，一起来玩吧',
      path: '/pages/guide/guide'
    }
  },
  jump: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/announceDetail/announceDetail?id='+id,
    })
  },
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.navigateTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  },
})