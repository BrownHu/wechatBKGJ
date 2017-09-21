// expense.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    listData:[
      { "method": "DHL", "readyDate": "3-15个工作日","expense":"99.00"},
      { "method": "DHL", "readyDate": "3-15个工作日", "expense": "99.00" },
      { "method": "DHL", "readyDate": "3-15个工作日", "expense": "99.00" },
      { "method": "DHL", "readyDate": "3-15个工作日", "expense": "99.00" }

    ],
    // region: ['--请', '选', '择--']
    array:[
      {"id":1,"name":"英国"},
      {"id":2,"name":"泰国"}
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
      index: e.detail.value,
    })
  },

  formSubmit:function(e){
    var that=this
    var info={}
    info.destination=e.detail.value.destination
    info.weight=e.detail.value.weight
    // 处理
    var complete = utils.IsComplete(info)
    if (complete){
      utils.allRequest("expense",info,function(res){
            if(res.error_code==0){
                  that.setData({
                    listData: res.result.detail
                  })
            }else{
              wx.showToast({
                title: '刷新重试',
                image:"../../icon/error.png"
              })
              that.setData({
                listData:null
              })
            }
      },function(res){

      })
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }
  }
})