// baseinfoAccount.js
var utils=require('../../utils/util.js')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      baseInfo:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var baseInfo=app.globalData.userInfo
    this.setData({
      baseInfo: baseInfo
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
    form.name = e.detail.value.name;
    form.country = e.detail.value.country;
    form.province = e.detail.value.province;
    form.city = e.detail.value.city;
    form.address = e.detail.value.address;
    form.mobile = e.detail.value.mobile
    var formComplete = utils.IsComplete(form)

    // if(){ 逻辑判断 表单处理

    // }
    if (formComplete) {
      wx.showLoading({
        title: '正在修改',
        duration: 3000,
        complete: function () {
          console.log(form)
          var url="baseInfo"
          var data={
            'op':'update',
              'name':form.name,
              'country':form.country,
              'province':form.province,
              'city':form.city,
              'address':form.address,
              'mobile':form.mobile,
          }
          utils.allRequest(url,data,function(res){
            console.log(res)
              if(res.error_code==0){
                wx.hideLoading();
                setTimeout(function () {
                  wx.reLaunch({
                    url: '../member/member',
                  })
                }, 1500)
              }else{
                wx.showToast({
                  title: '登录后操作',
                  image: '../../icon/error.png'
                })
              }
          },
          function(){
            wx.showToast({
              title: '请重试',
              image:'../../icon/error.png'
            })
          },true);
          
        }
      })
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }

    // wx.switchTab({
    //   url: '../member/member',
    // })
  },
})