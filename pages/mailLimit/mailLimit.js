// maillLimit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionReply:[
      { "question": "什么是敏感物品？", "reply":"依据各国海关政策差异，部分国家或地区对特殊商品较为敏感,在进入当地海关时被罚没收概率会稍大，包括并不仅限于如下物品：肉类（熟食）、电子类、服饰(仿牌类)、种子、刀具等。"},
      { "question": "哪些是绝对不能邮寄的？", "reply": "各类武器弹药、仿真武器、烈性毒药、伪造货币、有价证券、珍贵植物种子等。具体请参见法律规定禁止出口物品。" },
      { "question": "大件的商品也可以支持寄送吗？", "reply": "国际货运是按商品的重量和体积进行计费的，我们暂时不支持该类商品的采购，大件商品包括但不限于以下商品：音响/HIFI、厨房电器(烤箱/净水器/咖啡机等)、其他家电(冰箱/洗衣机/烘干机/空调机/电视机/烤箱等)、健身器材等" },

    ],
    array: ['--请选择--','电子产品', '生活居家', '化妆品'],
    index:0,
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
  bindPickerChange: function (e) {

    this.setData({
      index: e.detail.value
    })
  },
})