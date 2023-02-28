
/***公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api\.onesignal\.com\/apps\/f08b0001-b16b-4d5c-8bdf-13f67bb5b3b8.*$ url script-response-body pillow.js
[mitm] 
hostname = api.onesignal.com
*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = '/apps';
/***const pay1 = '/abtest';***/
/**const pay2 = '/ucapp/getUserSVip';**/

if (url.indexOf(vip1) != -1) {
    obj = {
  "receive_receipts_enable" : true,
  "uses_provisional_auth" : true,
  "outcomes" : {
    "direct" : {
      "enabled" : true
    },
    "indirect" : {
      "enabled" : true,
      "notification_attribution" : {
        "limit" : 10,
        "minutes_since_displayed" : 60
      }
    },
    "unattributed" : {
      "enabled" : true
    }
  }
}
     body = JSON.stringify(obj);
}
                        
$done({body});
