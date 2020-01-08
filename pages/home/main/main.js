// pages/home/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
      title: '我的小区',
      img: '/assets/nav1.png'
    }, {
      title: '业主管理',
      img: '/assets/nav2.png'
    }, {
      title: '房屋管理',
      img: '/assets/nav3.png'
    }, {
      title: '信息上报',
      img: '/assets/nav4.png'
    }, {
      title: '物业保修',
      img: '/assets/nav5.png'
    }, {
      title: '访问申请',
      img: '/assets/nav6.png'
    }, {
      title: '投诉建议',
      img: '/assets/nav7.png'
    }, {
      title: '全部',
      img: '/assets/nav8.png'
    }],
    list: [{
        icon: "",
        name: "然然",
        communityName: '南郡豪庭小区',
        time: '2020-1-2 12:20:26',
        address: '南门',
        id: 0
      },
      {
        icon: "",
        name: "然然",
        communityName: '南郡豪庭小区',
        time: '2020-1-2 12:20:26',
        address: '南门',
        id: 1
      },
      {
        icon: "",
        name: "然然",
        communityName: '南郡豪庭小区',
        time: '2020-1-2 12:20:26',
        address: '南门',
        id: 2
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  pushManage: function() {
    wx.navigateTo({
      url: '/pages/home/manage/manage',
    })
  },

  /**导航 */
  tapNavItem: function(e) {
    const that = this
    let navIndex = e.currentTarget.dataset.index
    console.log(navIndex)
    switch (navIndex) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
    }
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