// member.js
var app=getApp();
var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userInfo:{'name':"点我登录"},
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
    var that = this
    var url = 'baseInfo'
    var data = {}
    util.allRequest(url, data,
      function (res) {
        console.log(res)
        app.globalData.userInfo = res.result
        that.setData({
          userInfo: res.result
        })
      },
      function (res) {
        that.setData({
          userInfo: { 'name': "点我登录" }
        })
      },true)
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
  jump:function(e){
    var url=e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url== "member"){
        wx.switchTab({
          url: '../../pages/'+url+'/'+url,
        })
    }else{
      wx.navigateTo({
        url: '../../pages/'+url+'/'+url,
      })
    }
  },
})