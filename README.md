# 邀请函小程序端
本项目基于
> [marriage-miniapp-server](https://github.com/Jiezhi/marriage-miniapp-server)和前端项目为[OnceLove](https://github.com/Jiezhi/marriage-miniapp)。

修改后的后端项目为[invitation-miniapp-server](https://github.com/hrmzone/invitation-miniapp-server)和前端项目为[invitation-miniapp](https://github.com/hrmzone/invitation-miniapp)。

> 感谢原作者[Jiezhi](https://github.com/Jiezhi/)的指导。

> 开源项目中有非常多很好的工具，但是由于开源项目无法开箱即用，而且缺少相应的配置说明，导致开源项目无法推广。可能是我能力问题，走了一点弯路，总算配置成功，并且和前端小程序配套可以使用，下面将这个小玩意的配置方法贴出来，供需要的用户借鉴。

> 我是一个职业培训机构[荆州青年教育](https://jzyouth.com)的老师，有学历提升(成教、网教、自考等)、职业资格方面的需求，可联系我    ---做个小广告

---
原来项目中的地图页面换成了[腾讯地图插件](https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wx5bc2ac602a747594&token=&lang=zh_CN)，所以相应的，你要去你的小程序配置页面添加这个插件。
---

## 有哪些功能？

* 相册展示
* 邀请函展示
* 地图导航
* 好友祝福
* 留言评论
* 宾客报名

# 页面说明
1. bless:祝福页面
2. chat:留言页面
3. index:主页
4. map:地图导航页面
5. navigation:地图页面
5. photos:相册页面
5. poster:画报页面

# 配置
小程序前端与后端服务的联系，通过appid和uid进行联系，后端服务可以为多个前端小程序服务，通过uid进行区分。
1. 配置地图位置经纬度
2. 配置与后端服务appid和域名
```
  globalData: {
    userInfo: null,

    // 下面填写酒店相关信息
    lat: 30.628050,
    lon: 114.574790,
    addressName: "武汉市阳逻经济开发区汽渡路413号",

    appid: 'wx77856a389b827dee', //此处改成您自己的小程序appid
    uid: 1,
    server: 'https://wx.whwsxx.cn/wx',
    music_url: ''
  }
```
  
# 页面对应数据库表
1. bless页面:对应bless表，即发送点赞的表；
3. chat页面:对应comment表，留言评论数据表；chat页面还对应一个表：attendence，用于存储报名人员信息。
2. map页面：对应location表，导航目的地经纬度表，这个页面有导航功能，比navigation页面功能更强大；map有个子段为lon，但是在页面中取值为lng，需要注意。
4. navigation：不需要单独的数据表，在app.js中配置即可，这个页面只显示地图，无法导航。
5. photos页面:对应photo表，存放相册的图片url；

# 其他配置说明
main_info表：每条记录与每一个前端微信小程序对应，其中uid区分不同的小程序。其他各表，uid必须一致。

> 由于手残，不小心强制提交了一次，将原作者commit删掉了，抱歉。
