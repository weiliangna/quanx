
/***
脚本名称:指尖时光

作者：by-微凉

使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************
[rewrite_local]
^http[s]?:\/\/integral2\.dasyibalang\.com\/v2\/User.*$ url script-response-body soul.js
[mitm] 
hostname = integral2.dasyibalang.com
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = '/v2/User';
/***const basic = '/order';
/**const basic1 = '/composition';
const basic2 = '/video';
/***const proOrderTypeList = 'user/home?hybrid';**/

if (url.indexOf(vip1) != -1) {
    obj = {
  "msg" : "请求成功",
  "data" : {
    "TestType" : "4601",
    "AppVersion" : "6.2.70",
    "MembersBeginDateMs" : null,
    "IsPopup" : 0,
    "GzhOpenId" : null,
    "IOSTrialEndDateMs" : null,
    "AppleId" : null,
    "CreateTime" : 1678061486897,
    "Sex" : 0,
    "Integral" : 0,
    "WxOpenId" : null,
    "Mobile" : null,
    "NickName" : "by-微凉",
    "UnionId" : "o5YYFwLUpYRU76rSFaBapmOFeTK4",
    "AndroidTrialEndDateMs" : null,
    "VIP" : 1,
    "DiscountEnd1" : 1997645233897,
    "DiscountEnd2" : null,
    "DeviceToken" : null,
    "SourceStr" : null,
    "ID" : 3195124,
    "Channel" : "IOS",
    "SNSPlatform" : "WX",
    "Photo" : "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epvAa86qM654kibtia89c2sCrTjy7LFiatIC9YHpx45q5MUM0YQqLsHbNXmGWduViaVwUjDbYZyF2mfvw/132",
    "TrialEndDateMs" : null,
    "OpenId" : "onAxy5_bDBpm3HR-KczK2SGV9aRc",
    "Amount" : "0.00",
    "InviteCode" : null,
    "MembersEndDateMs" : null
  },
  "code" : "10000"
}
     body = JSON.stringify(obj);
}

/**if (url.indexOf(basic) != -1) {
    obj = {
  "msg" : "success",
  "data" : {
    "docer" : 1,
    "super" : 1,
    "wps" : 1
  },
  "result" : "ok"
}

     body = JSON.stringify(obj);
}

/**if (url.indexOf(basic2) != -1) {
    obj = {
  "errNo" : 0,
  "errstr" : "success",
  "data" : {
    "vipStatus" : 1,
    "isLogin" : 1,
    "isListenUser" : 1,
    "listenStatus" : 1,
    "isVisitorVip" : 1,
    "expireDays" : 9999
  }
}
     body = JSON.stringify(obj);
}
/***if (url.indexOf(basic1) != -1) {
    obj = {
  "errNo" : 0,
  "errstr" : "success",
  "data" : {
    "medalList" : {
      "num" : 0,
      "total" : 12,
      "yikeMedalSummary" : {
        "medalWallUrl" : "",
        "historySeasonInfo" : [

        ],
        "isShowYikeMedal" : 0,
        "currentSeasonInfo" : [

        ]
      }
    },
    "user" : {
      "location" : "北京市",
      "avatarDecorateUrl" : "",
      "regDate" : "2023年03月01日",
      "supplementPhoneText" : "补充手机号",
      "motto" : "",
      "uname" : "大栗同学DG718",
      "sex" : 0,
      "classId" : 0,
      "school" : "",
      "targetSchool" : "",
      "isSelf" : true,
      "fansNum" : 0,
      "term" : "下",
      "isLogOff" : 0,
      "taskRewardValue" : 0,
      "gradeId" : 16,
      "level" : 1,
      "grade" : "六年级",
      "mottoCheck" : 1,
      "vipStatus" : 1,
      "followStatus" : 0,
      "taskRewardType" : 0,
      "studyDays" : 1,
      "avatar" : "https://img.zuoyebang.cc/zyb_70254bb0432d074cf351bd50988c48e6.png",
      "supplementPhone" : 0,
      "cityName" : "",
      "followNum" : 0
    },
    "displayList" : [

    ]
  }
}
     body = JSON.stringify(obj);
}****/
/***if (url.indexOf(basic1) != -1) {
    obj = 
     body = JSON.stringify(obj);
}
if (url.indexOf(basic1) != -1) {
    obj = 
     body = JSON.stringify(obj);
}**/
                                    
$done({body});
