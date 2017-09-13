// pages/onwayPackageTrans/onwayPackageTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allcheck: false,
    array:
    ["百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],
    index: 0,
    packages: [
      { 'id': "A2456", "waybillNum": "54643134642", "status": "已到库", "stock": "10", "weight": "28.20" },
      { 'id': "A2600", "waybillNum": "15646545648", "status": "已到库", "stock": "20", "weight": "21.58" },
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
  },
  deletePackage:function(e){
    var id=e.currentTarget.dataset.id
    wx.showModal({
      title: '在途包裹',
      content: '确定删除？',
      success:function(res){
        if(res.confirm){
            //删除物品请求 带id
        }else{

        }
      }
    })
  }
})