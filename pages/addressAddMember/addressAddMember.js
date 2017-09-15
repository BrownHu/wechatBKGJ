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
    forEdit:null,
    EditId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var id=options.id
      if(id==undefined){
            console.log('新增收货地址')
      }else{
        var url='shipAddress'
        var data={
          'op':"single",
          'id':id
        }
        utils.allRequest(url,data,
        function(res){
            that.setData({
              forEdit:res.result,
              EditId:id
            })
            console.log(res);
        },
        function(res){

        }
        ,true)
      }
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
    utils.jump(e)
  },
  formSubmit: function (e) {
    var that=this
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
          var url="shipAddress"
          var tempId = that.data.EditId
          console.log(form)
          var data={
            'op':'update',
            "id": tempId,
            "name": form.name,
            "country": form.country,
            "province": form.province,
            "address": form.address,
            "mailcode": form.mailcode,
            "mobile": form.mobile,
            "city": form.city
          }
        utils.allRequest(url,data,
        function(res){
          console.log(res)
          if (res.error_code==0){
              wx.showToast({
                title: '操作成功',
              })
              setTimeout(function(){
                wx.hideToast()
                wx.navigateBack({
                  delta:1
                })
                // wx.redirectTo({
                //   url: '../addressIndexMember/addressIndexMember',
                // })
              },1000)
          }
        },
        function(res){
          console.log(res)
        },true)
          
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }
  },
})