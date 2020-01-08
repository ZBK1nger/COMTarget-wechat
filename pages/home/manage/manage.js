// pages/home/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: { // 定义data
    tempInfo: [{ // 模拟后台数据
      id: 1,
      community: '南郡豪庭小区',
      type: '亲属',
      status: "已通过"
    }, {
      id: 2,
      community: '南郡豪庭小区',
      type: '亲属',
      status: "已通过"
    }],
    dataInfo: [], // 重组数组内容
    persons: [
      [{
          key: "房屋",
          value: '101栋2单元303'
        },
        {
          key: "成员",
          value: '江山'
        },
        {
          key: "性别",
          value: '男'
        },
        {
          key: "与业主关系",
          value: '租户'
        }
      ],
      []
    ]
  },
  // 展开详情
  expandDetail: function(e) {
    var idx = e.currentTarget.dataset.idx, // 获取当前下标
      key = "dataInfo[" + idx + "].flag",
      val = this.data.dataInfo[idx].flag;
    this.setData({
      [key]: !val
    });
  },
  onLoad: function(opt) {
    for (var i in this.data.tempInfo) {
      this.data.tempInfo[i].flag = false; // 添加新属性
    };
    this.setData({
      dataInfo: this.data.tempInfo
    });
  },

  add: function(e) {
    let idx = e.currentTarget.dataset.index;
    let array = [{
        key: "小杜",
        value: '傻吊'
      },
      {
        key: "小杜",
        value: '江山'
      },
      {
        key: "小杜",
        value: '男'
      },
      {
        key: "小杜",
        value: '租户'
      }
    ]
    let persons = this.data.persons;
    let list = persons.map((item,index)=> {
      if(index == idx) {
        item = item.concat(array)
      }
      return item
    })
    this.setData({
      persons : list
    })
  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})