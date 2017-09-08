// pages/packagePredictTrans/packagePredictTrans.js
var app=getApp();
var utils=require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitDisable: true,
    index: 0,
    depotindex:0,
    array:
    ["请选择","百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],
    
    depot:[
      "请选择","中国 广东 东莞仓","上海仓"
    ],
    goods:[
      {"name":"时尚女装","count":2,"value":1285}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userId',
      success: function (res) {
        that.setData({
          submitDisable: false,
          content: "已绑定"
        })
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
  bindPickerChange: function (e) {

    this.setData({
      index: e.detail.value
    })
  },
  bindDepotChange: function (e) {

    this.setData({
      depotindex: e.detail.value
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.jump;
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
 
  deleteGood:function(e){
    var that=this
    wx.showModal({
      title: '佰客国际',
      content: '确认删除商品',
      success: function (res) {
        if (res.confirm) {
          var id = e.currentTarget.dataset.id
          that.data.goods.splice(id - 1, 1)
          that.setData({
            goods: that.data.goods
          })
        } else if (res.cancel) {
         //do  nothing 
        }
      }
    })  
  },
  formSubmit: function (e) {
    var form = {}
    form.depot = e.detail.value.depot;
    form.express = e.detail.value.express;
    form.waybill = e.detail.value.waybill;
    form.remark = e.detail.value.remark;
     var goods=[]
     for(var i=0;i<10;i++){
       var para=e.detail.value
       var name = "goodName" + i
       var count = "goodCount" + i
       var value ="goodValue"+i
       if (para[value] != undefined && para[name] != undefined && para[value]!=undefined){
         var arr = { "name": para[name], "count": para[count], "value": para[value]}   
        goods.push(arr)
       }
     }
     console.log(goods)


    // console.log("shit")
    // console.log(e.detail.value.goodName[])
    var formComplete = utils.IsComplete(form)
    // if (formComplete) {
    //   wx.showToast({
    //     title: '提交成功',
    //     icon: 'success',
    //     mask: true,
    //     duration: 3000,
    //     complete: function () {
    //       console.log(form)
    //       // wx.navigateTo({
    //       //   url: '../mergeTrans/mergeTrans',
    //       // })
    //     }
    //   })
    // } else {
    //   wx.showToast({
    //     mask: true,
    //     title: '所有字段必填',
    //     image: '../../icon/error.png'
    //   })
    // }
  },
  addGood: function () {
    var add = {}
    this.data.goods.push(add)
    this.setData({
      goods: this.data.goods
    })
  },

})