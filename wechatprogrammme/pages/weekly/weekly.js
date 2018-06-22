Page({
  data:{
    weeklymovielist:[{
      name:"教父",
      comment:"最精彩的黑帮电影",
      imagepath:"/images/godfather.jpg",
      isHighlyRecommended:true,
      id:77
    },
      {
        name: "泰塔尼克号",
        comment: "失去的才是永恒",
        imagepath: "/images/titanic.jpg",
        isHighlyRecommended: false,
        id:88
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与大叔的爱情故事",
        imagepath: "/images/killer.jpg",
        isHighlyRecommended: false,
        id:99
      }
    ],
    count:123,

  },  

  onLoad:function(options){
    this.setData({
      currentpage: this.data.weeklymovielist.length-1
    })
  },

  f0:function(event){
    this.setData({
      currentpage: this.data.weeklymovielist.length - 1
    })
  },

  f1:function(event){
     var movieID=event.currentTarget.dataset.movieId;
     console.log(movieID);
     wx.navigateTo({
       url: '/pages/detail/detail?id='+movieID
     })
  }
})