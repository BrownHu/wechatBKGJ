// pages/onwayPackageTrans/onwayPackageTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    index: 0,
    packages:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      var url ="package"
      var data={
        op:"onway"
      }
      utils.allRequest(url,data,function(res){
          if(res.error_code==0){
            var packages = res.result.packages
              var count = res.result.allCount
              that.setData({
                count:count,
                packages: packages
              })
          }
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
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.redirectTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  },
  deletePackage:function(e){
    var id=e.currentTarget.dataset.id
    wx.showModal({
      title: '在途包裹',
      content: '确定删除？',
      success:function(res){
        if(res.confirm){
          var data={
            op:"delete",
            id:id
          }
          utils.allRequest('onwayPackage',data,function(res){
          wx.redirectTo({
            url: '../onwayPackageTrans/onwayPackageTrans',
          })
          },function(res){
              
          },true)
        }else{

        }
      }
    })
  }
})