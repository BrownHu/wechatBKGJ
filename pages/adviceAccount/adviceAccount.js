// adviceAccount.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '0', value: '订单', checked: 'true' },
      { name: '1', value: '运单' },
      { name: '2', value: '客服' },
      { name: '3', value: '其他' },
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
    var form = {}
    // 0 订单 1 运单 2 客服 3 其他
    form.type = e.detail.value.type;
    form.title = e.detail.value.title;
    form.description = e.detail.value.description;
    var formComplete = utils.IsComplete(form)
    if (formComplete) {
      var url="advice"
      var data={
        "type":form.type,
        "title":form.title,
        "description": form.description
      }
      utils.allRequest(url,data,
      function(res){
        var img = res.error_code == 0 ? null : "../../icon/error.png"
          var message=res.error_code ==0 ? "提交成功" : "请您稍后重试"
            wx.showToast({
              title: message,
              icon:"success",
              image:img
            })
            setTimeout(function(){
                  wx.hideToast()
                  wx.redirectTo({
                    url: '../adviceAccount/adviceAccount',
                  })
            },1200)
          
      },
      function(res){

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