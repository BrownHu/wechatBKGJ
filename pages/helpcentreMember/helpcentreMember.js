// pages/helpcentreMember/helpcentreMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      firstshow:true,
      submenu:[
        {"name":"代购","url":""},
        { "name": "国际转运", "url": "" },
        { "name": "商城", "url": "" },
        { "name": "自助购", "url": "" },
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
  firstHidden:false
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
  toggle:function(){
    console.log(this.data.show)
     var show=this.data.show===true?false:true
     console.log(show)
     this.setData({
       show:show
     })
  },
  say:function(){
    console.log('hello')
  },
  firstTap:function(){
    var firstHidden = this.data.firstHidden === true ? false : true
    this.setData({
      firstHidden: firstHidden
    })
  }
})