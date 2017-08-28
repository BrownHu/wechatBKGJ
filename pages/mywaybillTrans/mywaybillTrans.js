// pages/mywaybillTrans/mywaybillTrans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:false,
    index:0,
    // 处理中：1 已发货 2  已签收 3
    arrowImg: ['../../images/common/white-bottom-arrow.png','../../images/common/white-left-arrow.png'],
    waybills:[
      {'date':"2017-07-11","people":"布兰奇MA","number":"45645454545","trace":"4646464","status":1},
      { 'date': "2017-01-11", "people": "布兰奇MA", "number": "6316423423", "trace": "4664655", "status": 2 },
      { 'date': "2017-01-11", "people": "布兰奇MA", "number": "631323432", "trace": "4645454", "status": 3 },
      
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
  showorhide:function(){
    var hide=this.data.hide===true?false:true;
    var index=hide?1:0;
    this.setData({
      hide:hide,
      index:index,
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + utl + '/' + url,
      })
    } else {
      wx.redirectTo({
        url: '../../pages/' + url + '/' + url,
      })
    }
  },
  formSubmit: function (e) {
    var form = {}
    form.account = e.detail.value.account;
    form.password = e.detail.value.password;
    console.log(form)
    wx.switchTab({
      url: '../member/member',
    })
  },
  see:function(e){
     var trace=e.currentTarget.dataset.trace
      wx.redirectTo({
        url: '../../pages/waybillDetailTrans/waybillDetailTrans?trace='+trace,
      })
  }
})