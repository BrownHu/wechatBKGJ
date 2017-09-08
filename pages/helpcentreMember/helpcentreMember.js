// pages/helpcentreMember/helpcentreMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      onehidden:false,
      twohidden:true,
      threehidden: true,
      fourhidden: true,
      fivehidden: true,
      sixhidden:true,
      sevenhidden:true,
      oneArrowIndex:0,
      twoArrowIndex:1,
      threeArrowIndex:1,
      fourArrowIndex:1,
      fiveArrowIndex:1,
      sixArrowIndex:1,
      sevenArrowIndex:1,
      Pname:{},
      child:{},
      outArrow: ["../../images/common/helparrow-top.png","../../images/common/helparrow-bottom.png"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.showLoading({
      title: '加载中',
    })
      wx.request({
        url: 'https://api.beckbuy.com/api/helpCentre',
        success:res=>{
          var  Pname=Array()
          var  child=Array()
          for(var i=0;i<res.data.result.length;i++){
            Pname.push(res.data.result[i].name)
            child.push(res.data.result[i].child)
          }
            that.setData({
              Pname:Pname,
              child:child
            })
            setTimeout(()=>{
              wx.hideLoading()
            },500)
        }
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
  firstHidden:false
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
      this.onLoad()
      wx.stopPullDownRefresh()

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
  oneTap:function(){
    var firstHidden = this.data.onehidden === true ? false : true
    var outArrowIndex = firstHidden?1:0;
    this.setData({
      onehidden: firstHidden,
      oneArrowIndex: outArrowIndex
    })
  },
  twoTap: function () {
    var firstHidden = this.data.twohidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      twohidden: firstHidden,
      twoArrowIndex: outArrowIndex
    })
  },
  threeTap: function () {
    var firstHidden = this.data.threehidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      threehidden: firstHidden,
      threeArrowIndex: outArrowIndex
    })
  },
  fourTap: function () {
    var firstHidden = this.data.fourhidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      fourhidden: firstHidden,
      fourArrowIndex: outArrowIndex
    })
  },
  fiveTap: function () {
    var firstHidden = this.data.fivehidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      fivehidden: firstHidden,
      fiveArrowIndex: outArrowIndex
    })
  },
  sixTap: function () {
    var firstHidden = this.data.sixhidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      sixhidden: firstHidden,
      sixArrowIndex: outArrowIndex
    })
  },
  sevenTap: function () {
    var firstHidden = this.data.sevenhidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      sevenhidden: firstHidden,
      sevenArrowIndex: outArrowIndex
    })
  },
  jump:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../../pages/helpcentreAgentMember/helpcentreAgentMember?id='+id,
    })
  }
})