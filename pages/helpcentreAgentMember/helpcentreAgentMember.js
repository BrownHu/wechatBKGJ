// pages/helpcentreAgentMember/helpcentreAgentMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: [
      "1、佰客国际-佰客集运&国际转运购物发票如何获取 >>",
      "2、挑选商品-佰客集运&国际转运 >>",
      "3、如何用电脑端快速代购 >>",
      "4、如何生成订单 >>",
      "5、订单、运单状态说明 >>",
      "6、如何跟踪运单 >>",
      "7、可以代购订制类商品么？>>",
      "8、代购的商品，佰客国际会帮我验货吗？>>",
      "9、卖家送的赠品佰客国际如何处理？也会验货么？>>",
      "10、代购订单已经支付完毕，为什么还需要补款？>>",
      "11、商品“已入库”接下来需要我如何操作呢？ >>",
      "12、代购与包裹转运的区别 >>",
      "13、什么是代购 >>",
      "14、代购流程 >>",
      "15、代购的相关费用 >>",
      "16、代购怎么付钱，我不知道一共要付多少钱？什么时候付？>>"

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
jump:function(){
  wx.redirectTo({
    url: '../../pages/helpcentreAgentdetailMember/helpcentreAgentdetailMember',
  })
}
})