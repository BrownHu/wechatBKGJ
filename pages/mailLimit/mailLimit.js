// maillLimit.js
var utis=require("../../utils/MD5.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind:"敏感物品",
    questionReply:[
      { "question": "什么是敏感物品？", "reply":"依据各国海关政策差异，部分国家或地区对特殊商品较为敏感,在进入当地海关时被罚没收概率会稍大，包括并不仅限于如下物品：肉类（熟食）、电子类、服饰(仿牌类)、种子、刀具等。"},
      { "question": "哪些是绝对不能邮寄的？", "reply": "各类武器弹药、仿真武器、烈性毒药、伪造货币、有价证券、珍贵植物种子等。具体请参见法律规定禁止出口物品。" },
      { "question": "大件的商品也可以支持寄送吗？", "reply": "国际货运是按商品的重量和体积进行计费的，我们暂时不支持该类商品的采购，大件商品包括但不限于以下商品：音响/HIFI、厨房电器(烤箱/净水器/咖啡机等)、其他家电(冰箱/洗衣机/烘干机/空调机/电视机/烤箱等)、健身器材等" },

    ],
    array: ["请选择","常见物品","液体类","体积类","带电类"],
    index:0,
    tips: [
      {
        "kind": "敏感商品",
        "mailable": "是",
        "method": "EMS",
        "remark": "此商品属于敏感物品，有明确的限制，只能用特定方式邮寄"
      },
      {
        "kind": "敏感商品",
        "mailable": "是",
        "method": "Air小包",
        "remark": "此商品属于敏感物品，有明确的限制，只能用特定方式邮寄"
      },
      {
        "kind": "体积商品",
        "mailable": "是",
        "method": "无限制",
        "remark": "当体积重量大于实际重量时，会按体积重量收费"
      },
      {
        "kind": "违禁商品",
        "mailable": "否",
        "method": "无",
        "remark": "此商品属于国家明令禁止物品，无法寄送"
      },
      {
        "kind": "敏感商品",
        "mailable": "是",
        "method": "EUB-F",
        "remark": "此商品属于敏感物品，有明确的限制，只能用特定方式邮寄"
      }
    ],
    specific:null,
    specificDetail:{
      "kind":"-",
      "mailable":"-",
      "method": "-",
      "remark": "-"
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(utis.hexMD5("hubing"))
        // var kind=options.kind;
        // this.setData({
        //   kind:kind
        // })
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
    var list = [null,
"食品、眼镜、假发、仿牌、面膜、药品、性用品、毛绒公仔、移动电源、香水、指甲油、黄金首饰、电池、手机、电脑、数码相机、刀具、打火机、睫毛膏、奢侈品牌、电动玩具、胶水、抱枕、化妆品",
"睫毛膏、面膜、唇膏、眼线液、香水、牛奶、洗发水、沐浴露、爽肤水、胶水、饮料、染发膏、指甲油、精油、洗面奶、油漆、墨水、辣椒酱、卸妆水、酒、护理液",
"毛绒公仔、硬性收纳盒、旅行箱、靠垫、抱枕、帐篷、置物架、拖把、钓鱼竿、羽绒被、壁纸、宠物窝、假花束、洗脚盆、床具用品、长幅画卷、大包薯片、汽车坐垫、毛毯、头枕、椅子",
"移动电源、电池、手机、摄像机、数码相机、电脑、变压器、游戏机、遥控器、录音笔、电动玩具、万用表、激光笔、电动剃须刀、电动牙刷、手电筒、收音机"
    ]
    var arr = list[e.detail.value] == null ? null : list[e.detail.value].split("、")
    this.setData({
      index: e.detail.value,
      specific:arr
    })
  },
  formSubmit:function(e){
    var  kind=e.detail.value.kind;
    wx.redirectTo({
      url: '../../pages/mailLimit/mailLimit?kind='+kind,
    })
  },
   keyname:(object)=>{
     var json = { "1": ["食品"], "2": ["眼镜", "假发", "假睫毛", "仿牌", "光盘", "药品", "茶叶", "保健品", "奢侈品牌"], "3": ["毛绒公仔", "硬性收纳盒", "旅行箱", "靠垫", "抱枕", "帐篷", "置物架", "头枕", "毛毯", "拖把", "汽车坐垫", "椅子", "洗脚盆", "床具用品", "长幅画卷", "大包薯片", "羽绒被", "壁纸", "宠物窝", "假花束", "钓鱼竿"], "4": ["香水", "饮料", "精油", "指甲油", "染发膏", "黄金首饰", "珍珠玉石", "钻石水晶", "电池", "打火机", "颜料", "刀具", "种子", "数码相机", "毒品", "仿真武器", "电脑", "游戏机", "手机", "洗发水", "沐浴露", "货币", "证券", "油漆", "化学粉末", "文物", "珍贵字画", "烟", "酒", "盐", "鲜肉", "蔬菜", "水果", "鸡蛋", "动物皮制品", "动植物标本", "磁铁", "变压器", "硅胶", "牛奶", "摄像机", "热水瓶", "墨水", "洗衣粉", "爽身粉", "万用表", "激光笔", "录音笔", "辣椒酱", "枪械", "收音机"], "5": ["移动电源", "爽肤水", "胶水", "调味品", "电动剃须刀", "电动牙刷", "手电筒", "卸妆水", "洗面奶", "护理液", "隐形眼镜", "睫毛膏", "面膜", "唇膏", "眼线液", "化妆品", "性用品"] }
    for(var i in json) {
  for (var j in json[i]) {
    if (object == json[i][j]) {
      var stylenum = i;
      return stylenum;
    }
  }
}
},
  checklimit:function(e){
      var item=e.currentTarget.dataset.item
      var inputTip=" "+item
      var kind=this.keyname(item)-1
      var specificDetail = this.data.tips[kind]
      this.setData({
        inputTip: inputTip,
        specificDetail: specificDetail
      })
  }
})