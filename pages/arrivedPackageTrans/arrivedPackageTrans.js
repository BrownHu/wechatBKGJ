// pages/arrivedPackageTrans/arrivedPackageTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allcheck: false,
    index: 0,
    packages:[],
    allCount:0,
    allWeight:0.00
  },
      // {'id':"A2456","waybillNum":"54643134642","status":"已到库","stock":"10","weight":"28.20"},
      // { 'id': "A2600", "waybillNum": "15646545648", "status": "已到库", "stock": "20", "weight": "21.58" },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var url ="package"
    var data={
      op:"arrived"
    }
    utils.allRequest(url,data,function(res){
        console.log(res)
        if(res.error_code==0){
          var length=res.result.length
          var count = length == 0 ? 0 : length;
          var weight = length == 0 ? 0.00 : res.result.allWeight
        that.setData({
          packages:res.result,
          allCount: count,
          allWeight:weight
        })
        }
    },function(res){
          wx.showToast({
            title: '出现错误',
            image:"../../icon/error.png"
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
  bindPickerChange: function (e) {

    this.setData({
      index: e.detail.value
    })
  },
  jump: function (e) {
    utils.jump(e)
  },
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.redirectTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  },
  allSelect: function () {
    var allcheck = this.data.allcheck === false ? true : false;
    this.setData({
      allcheck: allcheck,
    })
  }
})