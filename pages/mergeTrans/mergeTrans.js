// pages/mergeTrans/mergeTrans.js
var utils=require('../../utils/util.js')
var notification = require('../../utils/WxNotificationCenter.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressFee:0.00,
    packFee:0.00,
    totalFee:0.00,
    allCount:0.00,
    allWeight:"0.00",
    me:"展示",
    selectaddress:null,
    index: 0,
    pids:null,
    methodindex: 0,
    radioItem:[{
      "name":"普通麻袋包装(免费但是不能包装易碎物品)","value":"0","price":"0.00"
    }],
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
        that.data.radioItem.push.apply(that.data.radioItem,res.result.case)
        
        that.setData({
          pids: options.packs,
          receiver: res.result.receiever[0],
          area: res.result.area,
          selectaddress: res.result.addressId,
          allCount:res.result.allCount,
          allWeight: res.result.allWeight,
          radioItem: that.data.radioItem,
          packages: res.result.packages,
          balance:res.result.balance,
          // method:
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
    
    var that=this
    var areaIndex = e.detail.value
    var data = {
      id: this.data.area[areaIndex].id
    }
    utils.allRequest("getExpress", data, function (res) {
      console.log(res)
      var express=res.result.express
      that.setData({
        index: areaIndex,
        method: express
      })
    }, function (res) {

    },false)
    
  },
  bindMethodChange: function (e) {

    var packFee = parseFloat(this.data.packFee) 
    var expressDetail = this.data.method[e.detail.value]
    var startWeight = parseFloat(expressDetail.start_weight)
    var startPrice = parseFloat(expressDetail.start_price)
    var continueWeight = parseFloat(expressDetail.continue_weight)
    var continuePrice = parseFloat(expressDetail.continue_price)
    var allWeight = parseFloat(this.data.allWeight) * 1000
    var expressFee = allWeight <= startWeight ? startPrice : Math.ceil((allWeight - startWeight) / continueWeight) * continuePrice + startPrice
    var total = packFee + expressFee
    this.setData({
      methodindex: e.detail.value,
        expressFee:expressFee,
        totalFee:total
    })
    
    
  },
  jump: function (e) {
    utils.jump(e)
  },
  formSubmit: function (e) {
    console.log(e)
    var form = {}
    form.payorigin = e.detail.target.dataset.origin
    form.area = e.detail.value.area
    form.ware_id="0"
    form.method = e.detail.value.express
    form.remark = e.detail.value.remark == "" ? "无备注" : e.detail.value.remark
    form.pack = e.detail.value.pack.split(',')[1]
    form.address = this.data.selectaddress
    form.pids = this.data.pids
    form.op="pay"
    console.log(form)
    var formComplete = utils.IsComplete(form)
    // if (formComplete) {
    //   wx.showToast({
    //     title: '支付中',
    //     icon: 'loading',
    //     mask: true,
    //     success:()=>{
    //       var url ="mergeTrans";
    //       utils.allRequest(url,form,function(res){
    //     console.log(res)
    //     if(res.errcode==0){
    //       wx.hideLoading()
    //     }
    //       },function(res){
    //     console.log(res)
    //       },true)
        
    //     }
        
    //   })
    // } else {
    //   wx.showToast({
    //     mask: true,
    //     title: '必填字段为空',
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
    var totalFee = parseFloat(res) + parseFloat(this.data.expressFee)
    this.setData({
      packFee:parseFloat(res),
      totalFee: totalFee
    })
  }

})