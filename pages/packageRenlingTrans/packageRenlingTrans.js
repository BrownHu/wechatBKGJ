// pages/packageRenlingTrans/packageRenlingTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentWaybill: null,
    currentExpress: null,
    allcheck:false,
    array:{},
    index: 0,
    items:
      { name: 'confirm'}
    ,
    detail:[],
    pending: null


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var data={
      "op":"before"
    }
    utils.allRequest("packageClaim",data,
    function(res){
        console.log(res)
        that.setData({
          array:res.result,
          currentExpress:res.result[0].id
        })
    },
    function(res){
      console.log(res)
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
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      currentExpress: e.currentTarget.dataset.express
    })
  },
  jump: function (e) {
    utils.jump(e)
  },
  formSubmit: function (e) {
    var thatwx=wx 
    var pending = this.data.pending
    if (pending!=null){
      var data={
        "op":"push"
      }
      data.packageId = pending
      console.log(data)
      utils.allRequest("packageClaim",data,
      function(res){
        console.log(res)
        wx.showLoading({
          title: '正在认领',
        })
        var message= res.error_code ==0  ? "认领成功" : "操作错误"
        var image=res.error_code==0 ? null : "../../icon/error.png"
        setTimeout(function(){
          wx.hideLoading()
            wx.showToast({
              title: message,
              image:image,
              duration:3000,
              complete: function (res) {
                thatwx.switchTab({
                  url: '../index/index',
                })
              }
            })
        },300)
      },
      function(res){
          wx.showToast({
            title: '网络错误,返回重试',
            image:'../../icon/error.png',
            duration:3000,
            complete: function (res) {
              thatwx.switchTab({
                url: '../index/index',
              })
            }
          })
      },true)
    }else{
      wx.showToast({
        title: '请勾选待认领包裹',
        image:'../../icon/error.png',
        duration:3000
      })
    }
  },
  waybillBlur:function(e){
        this.setData({
          currentWaybill:e.detail.value
        })
  },
  packageSearch:function(){
    var that=this
    var data={}
    data.expressId = this.data.currentExpress
    data.waybill = this.data.currentWaybill
    data.op="search"
    console.log(data)
    utils.allRequest("packageClaim",data,function(res){
      console.log(res)
      if (res.error_code==0 && res.result.length >0 ){
        that.setData({
          detail: res.result,
        })
      }else{
        wx.showToast({
          title: '未找到包裹',
          image:'../../icon/error.png'
        })
        that.setData({
          detail:null,
          pending:null
        })
      }
      
    },function(res){
      console.log(res)
    },true)
  },
  checkboxChange:function(e){
    var flag = e.detail.value.length == 1 ? this.data.detail[0].waybill : null
     this.setData({
       pending: flag
     })
  }
})