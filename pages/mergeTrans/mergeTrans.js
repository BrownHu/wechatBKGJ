// pages/mergeTrans/mergeTrans.js
var utils=require('../../utils/util.js')
var notification = require('../../utils/WxNotificationCenter.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    packfee:2.50,
    allCount:0,
    allWeight:"0.00",
    me:"展示",
    selectaddress:null,
    index: 0,
    methodindex: 0,
    // radioItem:[
    //   {name: 0, value: '小盒' },
    //   { name: 1, value: '标准', checked:true },
    //   { name: 2, value: '大盒' }
    // ],
    
    area:[],
    // area:[
    // {"id":"1","name":"泰国"},
    // { "id": "2", "name": "马来西亚" },
    // { "id": "3", "name": "印度" },

    // ],
    method:[],
    // method: [
    //   { "id": "1", "name":"百事汇通"},
    //   { "id": "12", "name": "顺丰快递" },
    //   { "id": "22", "name": "申通快递" },
    //   { "id": "32", "name": "全峰速运" },
    // ],

    // receiver:{
    //   "name":"子凌科技","mobile":"13215543162","address":"泰国曼安努蒂第四大街305"
    // },

    receiver:[],
    // packages:[
    //   {"id":"A301","waybill":"13341414","weight":"1.20"},
    //   { "id": "V301", "waybill": "1321545", "weight": "2.20"}
    // ]
    packages:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this
    notification.addNotification("fromShipAddress", that.changeShipAddress, that)
    var data={
      op:"load",
      packages:options.packs
    }
    utils.allRequest("mergeTrans",data,function(res){
      console.log(res)
      if (res.error_code==0){
        that.setData({
          receiver: res.result.receiever[0],
          area: res.result.area,
          selectaddress: res.result.addressId,
          allCount:res.result.allCount,
          allWeight: res.result.allWeight,
          radioItem: res.result.case,
          packages: res.result.packages
        })
      }
    },function(res){
      console.log(res)
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
  bindAreaChange: function (e) {
    var areaIndex = e.detail.value
    var data = {
      id: this.data.area[areaIndex].id
    }
    utils.allRequest("getExpress", data, function (res) {
      console.log(res)
      // this.setData({
      //   index: areaIndex,
      //   method: express
      // })
    }, function (res) {

    })
    "/^src='[/s/S]+'$/"
    
  },
  bindMethodChange: function (e) {
    this.setData({
      methodindex: e.detail.value
    })
    var id=e.detail.value
    var area=this.data.area[id].id
  },
  jump: function (e) {
    utils.jump(e)
  },
  formSubmit: function (e) {
    var form = {}
    form.area = e.detail.value.area
    form.method = e.detail.value.express
    form.remark = e.detail.value.remark
    form.pack = e.detail.value.pack.split(',')[1]
    form.address = this.data.selectaddress
    console.log(form)
    // var formComplete = utils.IsComplete(form)
    // if (formComplete) {
    //   wx.showToast({
    //     title: '支付中',
    //     icon: 'loading',
    //     mask: true,
    //     duration: 3000,
    //     complete: function () {
    //       wx.redirectTo({
    //         url: '../paySuccessTrans/paySuccessTrans',
    //       })
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
  chooseAddress:function(){
    wx.navigateTo({
      url: '../addressIndexMember/addressIndexMember?from=merge',
    })
  },
  changeShipAddress:function(res){
     this.setData({
       selectaddress:res.id,
       receiver:res
     })
  },
  packChange:function(e){
    
    var res=e.detail.value.split(',')[0]
    this.setData({
      packfee:res
    })

    
  }

})