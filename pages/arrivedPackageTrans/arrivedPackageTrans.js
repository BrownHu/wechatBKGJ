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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that=this
    var url ="package"
    var data={
      op:"arrived"
    }
    utils.allRequest(url,data,function(res){
        console.log(res)
        if(res.error_code==0){
          wx.hideLoading()
          var count = res.result.allCount
          var weight = res.result.allWeight == null ? "0.00" : res.result.allWeight
          // console.log(typeof (res.result.packages[0].weight))
        that.setData({
          packages: res.result.packages,
          allCount: count,
          allWeight:weight
        })
        }
    },function(res){
      wx.hideLoading()
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
    var url = e.currentTarget.dataset.jump
    var id = e.currentTarget.dataset.id
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + url + '/' + url+"?id="+id,
      })
    } else {
      wx.navigateTo({
        url: '../../pages/' + url + '/' + url+"?id="+id,
      })
    }
  },
  formSubmit: function (e) {
    var pack=e.detail.value.package
    console.log(pack)
    if(pack.length==0 || pack==undefined){
      wx.showToast({
        title: '当前未选择包裹',
        image:"../../icon/error.png"
      })
    }else{
      wx.navigateTo({
      url: '../../pages/mergeTrans/mergeTrans?packs='+pack,
    })
    }

  },
  allSelect: function () {
    var allcheck = this.data.allcheck === false ? true : false;
    this.setData({
      allcheck: allcheck,
    })
  },
  checkboxChange:function(e){
    console.log(e.detail.value)
  }
})