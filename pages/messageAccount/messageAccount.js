// messageAccount.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:null,
    Emptyhidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
      var url="messages"
      var data={}
      utils.allRequest(url,data,
      function(res){
        console.log(res)
          if(res.error_code==0){
            var length = res.result.length
            var Emptyhidden=length > 0 ? true : false
            that.setData({
              messages:res.result,
              Emptyhidden: Emptyhidden
            })
          }else{
            that.setData({
              messages:null,
            })
          }
      },
      function(){
            
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
    var url = e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + utl + '/' + url,
      })
    } else {
      wx.navigateTo({
        url: '../../pages/' + url + '/' + url,
      })
    }
  },
  toDetail:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../../pages/messageDetailAccount/messageDetailAccount?id='+id,
    })
  }
})