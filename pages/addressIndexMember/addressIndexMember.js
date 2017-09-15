// pages/addressIndexMember/addressIndexMember.js
var util=require('../../utils/util.js')
var notifycation = require('../../utils/WxNotificationCenter.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:null,
    jumpable:null,
    mergeHide:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var   jumpable=options.from=="merge"? "say":null
    var hide = options.from == "merge" ? true :false
    this.setData({
      jumpable: jumpable,
      mergeHide: hide
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
    var that = this
    var url = "shipAddress";
    var data = {}
    util.allRequest(url, data,
      function (res) {
        console.log(res)
        wx.showLoading({
          title: '加载中',
        })
        that.setData({
          address: res.result
        })
        setTimeout(() => {
          wx.hideLoading()
        }, 500)

      },
      function (res) {
        console.log(res)

      }, true)
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
          success:res=>{
              this.onLoad()
          },
          complete:res=>{
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
   util.jump(e)
  },
  deleteAddress:function(e){
    var id = e.currentTarget.dataset.id
    console.log(id)
    wx.showModal({
      title: '收货地址',
      content: '删除',
      confirmColor:"red",
      success:res=>{
        if(res.confirm){
        var url='shipAddress'
        var data={
          'op':'delete',
          'id':id
        }
        util.allRequest(url,data,
        function(res){
          if (res.error_code==0 && res.result.status==0){
              wx.showToast({
                title: '删除成功',
              })
              setTimeout(function(){
                  wx.hideToast()
                  wx.navigateTo({
                    url: '../addressIndexMember/addressIndexMember',
                  })
              })
            }else{
              wx.showToast({
                title: '网络异常，请重试',
                image:'../../icon/error.png'
              })
            }
        },
        function(res){

        },true)
        }
      }
    })
  },
  addNewOrEdit:function(e){
    var type=e.currentTarget.dataset.type
    var page ='../addressAddMember/addressAddMember'
    var param= type == 'edit' ? '?id=' + e.currentTarget.dataset.id :''
    var url=page+param
    wx.navigateTo({
      url: url,
    })
  },
  say:function(e){
    var addressId=e.currentTarget.dataset.id
    var data={
      op:"single",
      id: addressId
    }
    util.allRequest("shipAddress",data,function(res){
      var newRe={}
      newRe.id = addressId
        newRe.name = res.result.receiver
        newRe.mobile = res.result.mobile
        newRe.address = res.result.detailAddress
      notifycation.postNotificationName("fromShipAddress", newRe);
      wx.navigateBack({
        delta: 1
      })
    },
    function(res){

    },true)
    
  }

})