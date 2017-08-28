// pages/addressAddMember/addressAddMember.js
var utils=require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinceindex:0,
    countryindex: 0,
    cityindex:0,
    country: ['--请选择--', '中国', '美国', '伊朗','新加坡','泰国','法国'],
    province: ['--请选择--', '江苏', '浙江', '辽宁'],
    city: ['--请选择--', '盘锦市', '沈阳市', '大连市'],

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
  bindCountryChange: function (e) {

    this.setData({
      countryindex: e.detail.value
    })
  },
  bindProvinceChange: function (e) {

    this.setData({
      provinceindex: e.detail.value
    })
  },
  bindCityChange: function (e) {

    this.setData({
      cityindex: e.detail.value
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
    form.name = e.detail.value.name;
    form.city = e.detail.value.city;
    form.country = e.detail.value.country;
    form.province = e.detail.value.province;
    form.address = e.detail.value.address;
    form.mailcode = e.detail.value.mailcode;
    form.mobile = e.detail.value.mobile;
    var formComplete = utils.IsComplete(form)


    // if(){ 逻辑判断 表单处理

    // // }
    if (formComplete) {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        mask: true,
        duration: 3000,
        complete: function () {
          wx.navigateTo({
            url: '../../pages/addressIndexMember/addressIndexMember',
          })
        }
      })
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }
  },
})