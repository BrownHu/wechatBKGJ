// pages/detailMypackageTrans/detailMypackageTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    depot:null,
    express:null,
    trace:null,
    goods:[],
    allValue:0,
    allCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var id=options.id
    var data={
      op:"check",
      id:id
    }
    utils.allRequest("package",data,function(res){
      var goods = res.result.goods
         var  allCount=0
         var  allValue=0
         var sort=1
          for(var i in goods){
            goods[i].sort=sort
            sort=sort+1
            allCount = allCount + parseInt(goods[i].count)
            allValue = allValue + parseFloat(goods[i].value)
          }
        that.setData({
          depot: res.result.depot,
          express: res.result.express,
          trace: res.result.trace,
          goods:goods,
          allCount: allCount,
          allValue: allValue.toFixed(2)
        })
    },function(res){

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
  
  }
})