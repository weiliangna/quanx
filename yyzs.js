
/***
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************
[rewrite_local]
^http[s]?:\/\/.*\.dxy\.cn\/(app|newh5)\/user\/(pro\/stat|basic-info|pay\/checkIntroOfferPeriod|basic\/info|pay\/proOrderTypeList)\/?|(mc_sign|timestamp).*$ url script-response-body yyzs.js
[mitm] 
hostname = *.dxy.cn
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = '/pro/stat?mc_sign';
const basic = '/basic-info?mc_sign';
const pay = '/pay/checkIntroOfferPeriod?mc_sign';
const basic1 = '/basic/info?timestamp';
const proOrderTypeList = 'proOrderTypeList';

if (url.indexOf(vip1) != -1) {
    obj = {
  "message" : "成功",
  "data" : {
    "userProStatStatusEnum" : "VALID",
    "userProDiscountType" : 12,
    "userProInfoVO" : {
      "userProStatStatusEnum" : "VALID",
      "expiredTime" : "2099-03-15 23:57:12",
      "subscribe" : true,
      "purchaseTotalValue" : 494,
      "appendDays" : 0,
      "expiredDay" : 9999,
      "subscribeButtonText" : "立即开通 ¥178/年",
      "havingReadSelectionCount" : 0,
      "subscribeExpiresDate" : "1970-01-01 00:00:00",
      "androidWithhold" : false,
      "upgradeSvipCount" : 0,
      "rightsNum" : 12,
      "needReadSelectionCount" : 0,
      "activeType" : 5,
      "placeholderVip" : true
    },
    "remainExpiredDay" : 9999,
    "userProDiscountPromptType" : 0,
    "discountPrice" : 21,
    "promotionPeriod" : false,
    "promotionDiscountPromptType" : 0,
    "expireDate" : "2099-03-15 23:57:12",
    "svipUserProInfo" : {
      "userProStatStatusEnum" : "VALID",
      "expiredTime" : "2099-03-15 23:57:12",
      "subscribe" : true,
      "purchaseTotalValue" : 782,
      "appendDays" : 0,
      "expiredDay" : 9999,
      "subscribeButtonText" : "首月9元",
      "havingReadSelectionCount" : 0,
      "subscribeExpiresDate" : "1970-01-01 00:00:00",
      "androidWithhold" : false,
      "upgradeSvipCount" : 0,
      "rightsNum" : 13,
      "needReadSelectionCount" : 10,
      "activeType" : 6,
      "placeholderVip" : true
    },
    "memberDiscount" : false,
    "upgradable" : false,
    "displayUpgradeProduct" : false
  },
  "code" : "success"
}
     body = JSON.stringify(obj);
}

if (url.indexOf(basic) != -1) {
    obj = {
  "message" : "成功",
  "data" : {
    "avatar" : "https://img1.dxycdn.com/2022/0729/650/4774960175837382653-10.png",
    "doctor" : true,
    "expert" : true,
    "nickname" : "by-微凉",
    "activated" : true,
    "signature" : null,
    "section" : "",
    "username" : "by-微凉",
    "canReceive" : false
  },
  "code" : "success"
}
     body = JSON.stringify(obj);
}

if (url.indexOf(pay) != -1) {
    obj = {
  "message" : "成功",
  "data" : {
    "hasSvipSubscribeProduct" : true,
    "latestSVipExpireDateTime" : 0,
    "hasSvipIntroOfferPeriod" : false,
    "latestVipExpireDateTime" : 0,
    "hasIntroOfferPeriod" : false,
    "hasIntroPeriod" : false,
    "hasSvipIntroPeriod" : true,
    "hasSubscribeProduct" : true
  },
  "code" : "success"
}
     body = JSON.stringify(obj);
}

if (url.indexOf(basic1) != -1) {
    obj = {
  "message" : "",
  "data" : {
    "username" : "dxy_9rh4ynir",
    "doctorStatus" : true,
    "talentStatus" : false,
    "professionalUserStatus" : false,
    "favorites" : 0,
    "actived" : true,
    "nickname" : "by-微凉",
    "bbsStatus" : 1,
    "identificationTitle" : "",
    "bbsScore" : 0,
    "signature" : "",
    "activeType" : 0,
    "avatarInfo" : "https://img.dxycdn.com/avatars/120/20.jpg",
    "userLevel" : 0,
    "bbsDistilled" : 0,
    "followers" : 0,
    "bbsPosts" : 0,
    "isIdentified" : false,
    "bbsStatusTitle" : "普通用户",
    "bbsVotes" : 0,
    "enterpriseType" : 0,
    "followings" : 0,
    "enterpriseStatus" : false,
    "expertStatus" : false,
    "isExpert" : false,
    "regTime" : 1677599417000,
    "userId" : 89846587
  },
  "code" : "success"
}
     body = JSON.stringify(obj);
}

if (url.indexOf(proOrderTypeList) != -1) {
    obj = {
  "message" : "成功",
  "data" : {
    "result" : [
      {
        "orderDesc" : "专业版PLUS",
        "id" : 6983270,
        "expiredTime" : "2099-03-15",
        "vipLevel" : 2,
        "openTime" : "2023-02-28",
        "vipLevelDesc" : "专业版PLUS",
        "changeDay" : 9999,
        "changeDesc" : "9999",
        "orderType" : 300004
      }
    ],
    "pageSize" : 20,
    "total" : 1,
    "pageNum" : 1
  },
  "code" : "success"
}
     body = JSON.stringify(obj);
}
/***if (url.indexOf(basic1) != -1) {
    obj = 
     body = JSON.stringify(obj);
}
if (url.indexOf(basic1) != -1) {
    obj = 
     body = JSON.stringify(obj);
}
if (url.indexOf(basic1) != -1) {
    obj = 
     body = JSON.stringify(obj);
}**/
                                    
$done({body});
