// pages/mywaybillTrans/mywaybillTrans.js
var utils=require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:false,
    index:0,
    // 处理中：1 已发货 2  已签收 3
    arrowImg: ['../../images/common/white-bottom-arrow.png','../../images/common/white-left-arrow.png'],
    waybills:[
      // {'date':"2017-07-11","people":"布兰奇MA","number":"45645454545","trace":"4646464","status":1},
      // { 'date': "2017-01-11", "people": "布兰奇MA", "number": "6316423423", "trace": "4664655", "status": 2 },
      // { 'date': "2017-01-11", "people": "布兰奇MA", "number": "631323432", "trace": "4645454", "status": 3 },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
      var that=this
      var data={
        "op":"index"
      }
      utils.allRequest('waybill',data,function(res){
          if(res.error_code==0){
          var origin=res.result
          for(var i in origin){
            origin[i].statusChinese = utils.getChinesStatusName(origin[i].status)
          }
          that.setData({
            waybills: origin
          })
          wx.hideLoading()
          }else{
            wx.hideLoading()
            wx.showToast({
              title: '网络异常，请重试',
              image:"../../icon/error.png"
            })
          }
      },function(res){
       

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
  showorhide:function(){
    var hide=this.data.hide===true?false:true;
    var index=hide?1:0;
    this.setData({
      hide:hide,
      index:index,
    })
  },
  jump: function (e) {
    utils.jump(e)
  },
  formSubmit: function (e) {
    var form = {}
    form.account = e.detail.value.account;
    form.password = e.detail.value.password;
    console.log(form)
    wx.switchTab({
      url: '../member/member',
    })
  },
  see:function(e){
     var id=e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../../pages/waybillDetailTrans/waybillDetailTrans?id='+id,
      })
  },
  confirm:function(e){
    var id = e.currentTarget.dataset.id
    wx.showModal({
      title: '我的运单',
      content: '确认收货?',
      success: function (res) {
        if (res.confirm) {
            var data={
              op:"confirm",
              id:id
            }
            utils.allRequest("waybill",data,function(res){
              console.log(res)
                var mes=res.error_code == 0 && res.result.status==0 ? "操作成功" : "操作失败,请重试"
                var imageTip = res.error_code == 0 && res.result.status == 0 ? null: "../../icon/error.png"
                wx.showToast({
                  title: mes,
                  image: imageTip,
                  duration:3000
                })
                setTimeout(function () {
                  wx.redirectTo({
                    url: '../mywaybillTrans/mywaybillTrans',
                  })
                }, 800)
            },function(res){

            },true)
        } else if (res.cancel) {

        }
      }
    })
  }
  
})