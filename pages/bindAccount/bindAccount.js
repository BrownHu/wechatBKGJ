// bindAccount.js
var utils=require('../../utils/util.js')
var app=getApp()
var temp = app.globalData.hubing
Page({
  /**
   * 页面的初始数据
   */
  data: {
      submitDisable:false,
      content:"确认绑定"
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
    var that = this
    wx.getStorage({
      key: 'userId',
      success: function (res) {
        that.setData({
          submitDisable: true,
          content: "已绑定"
        })
      },
    })
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
  
  } ,
  jump: function (e) {
    var url = e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + url + '/' + url,
      })
    } else {
      wx.navigateTo({
        url: '../../pages/' + url + '/' + url,
      })
    }
  },
  formSubmit:function(e){
    var form={}
    form.account=e.detail.value.account;
    form.password=e.detail.value.password;
    var formComplete=utils.IsComplete(form)

    if(formComplete){
      // console.log(form)
      wx.getStorage({
        key: 'openId',
        success: function(res) {
          // console.log(res.data)
          wx.request({    
          url:'https://api.beckbuy.com/api/bindAccount',
          data:{
            account:form.account,
            password:form.password,
            openId:res.data
          },
          success:suc=>{
            if (suc.data.error_code==0){

              wx.showToast({
                title: '绑定成功',
                icon: 'success'
              })
              wx.setStorage({
                key: 'userId',
                data:suc.data.result.userId ,
              })
              setTimeout(function () {
                wx.hideToast()
                wx.reLaunch({
                  url: '../index/index?bind=true',
                })
              }, 1000)
             
            } else if (suc.data.error_code >0){
              var message = suc.data.reason
              wx.showToast({
                title: message,
                image: '../../icon/error.png',
                mask: true,
              })
            }else{
            wx.showToast({
              title: '服务器错误',
              image:'../../icon/error.png'
            })
            }
          }
          })
        },
      })

    }else{
      wx.showToast({
        mask:true,
        title: '所有字段必填',
        image:'../../icon/error.png'
      })
    }
   
   
  },
  
})