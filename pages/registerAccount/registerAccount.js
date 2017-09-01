// registerAccount.js
var utils=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        wx.getStorage({
          key: 'openId',
          success: function(res) {
            console.log(res.data)
          },
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
    form.email = e.detail.value.email
    form.nickname = e.detail.value.nickname
    form.password = e.detail.value.password
    form.repassword = e.detail.value.repassword
    form.mobile = e.detail.value.mobile
    var formComplete = utils.IsComplete(form)
    if (formComplete && form.password==form.repassword) {
      if (utils.ForRegister(form.email)){
      wx.getStorage({
        key: 'openId',
        success: function(res) {
          wx.request({
            url:'https://api.beckbuy.com/api/register',
            data: {
              email: form.email,
              nickname: form.nickname,
              password:form.password,
              openId:res.data,
              mobile: form.mobile,
              is_qquser:2,
            },
            success:suc=>{
              var  jumpUrl="register"
              var errcode = suc.data.error_code
              if(errcode==0){
                    wx.setStorage({
                      key: 'userId',
                      data: suc.data.result[0].userId
                    }),
                    jumpUrl="member"
              }
       var toastTitle = errcode == 0 ? "注册成功" : errcode == 2 ? "昵称或邮箱重复" : "网络异常"; 
              var img = errcode == 0 ? false : "../../icon/error.png";
              wx.showToast({
                title: toastTitle,
                icon:"success",
                image:img,
                duration:3000
              })
              setTimeout(function(){
                if (jumpUrl == "member") {
                  wx.switchTab({
                    url: '../../pages/member/member',
                  })
                } else {
                  wx.reLaunch({
                    url: '../../pages/register/register',
                  })
                }
              },3000)
            }
          })
        },
      })
      }else{
        wx.showToast({
          title: '邮箱地址格式错误',
          image: '../../icon/error.png'
        })
      }
     
      
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填或密码不一致',
        image: '../../icon/error.png'
      })
    }
  },
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

  },
  getCode:function(e){
    console.log("mobile:"+e.detail.value.mobile+"发送验证码")
  }
})