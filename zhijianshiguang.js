
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

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', rezvx = '__0xf6c6c',  __0xf6c6c=['VcOOw4pLw4c=','C3thwoEK','wplzw5h4VjbClWXCmQ==','ccOkw6nCq0I=','fMO8fkNi','wqjCpGg=','w6VVc1E=','HV9qacKf','woMuCsOrwqo=','f8OPMn3CqQ==','wqA2wrQIcMKaLA==','eMONP3fCuA==','H0B0dsKJcVA=','wrBtFgHDuw==','wrlhw5jDjTJMw7g=','wqVKw6k=','w6TCisOOJ8KxS20=','w4xNBHE=','w5MjZcKiVMKdw4I=','Fmdmwo0=','JkbDl1jCtsOPFQ==','b8O1woDCrcK6w77CpcOvw4I=','fsKcYMOIw4sxw7E=','JX3CoRNW','DsO0wqk4w6Y=','MHnDmA==','woLCs8Ouw6rChg==','w6vDtwjDpUY=','ScOSd1dr','BkDCrA==','MsO0Lw==','NcO7ew==','SsOcw5NYw5c=','w5LCsG5JZQ==','e8OSf29M','F1vCoMKjDA==','GUwpwqbDkg==','expkSMOx','ElYbwqXDvA==','w4sAw6VNScOIwoPCjBrDpDV+ARzCgMOg','FDIUMShOwpc8JR7Cj0DCj8O7wopSwro1RMOdVVnCmwFrwojDs3rCuBvCrsKfwofCr0zCtghGw7UbP8KUI8OjwpUUwpPCu8OaPxxTwo7Clwx7wrJDAydAwog=','w6VVfEo=','wr3Cl8OLw5PDoQ==','FsOwwronw5c=','GE49','fcOEw44=','LnAQUU8=','wq4/wr4ew5k=','wqodIsOywoE=','w599EXIG','wqZtPsKAwqA=','GcOAb1Qi','wqbCicOMw7PCmg==','GsKCw43Cj8O0','HMKNw6TCkg==','w7XDiTrDsVo=','X8O7FWHCtw==','C8O7wrkm','OlYiwovDmw==','WcOaw7XCjWc=','wqhuw63DiMKX','GkcZwqjDuw==','TsOsw5/ClVE=','AMObCsOPw6Y=','wpgwKMOLwog=','woVcwq/CsMOT','w4jDqDLDq1w=','GcODbWEJ','wqljw7vDmTI=','TMOhw53ChX0=','woAwwqkIZQ==','wpFVHMKEwow=','wo4/wrINw74=','w5jCmQzCjsOs','wpd6KGUY','wrJIFMK2wp8=','wr1Aw73Dvw==','w5XCuDbCg8OL','ZD1GX8OD','AUYIwoo=','AGUNwpjDmA==','w6DCmmRiSw==','wpRMwpbClsOj','KG/Dn3PCiA==','wq3Ci8OYw5PDocK/','wqDCg2M=','wqhawrDCn8O1wqc=','WMOTw54=','wqLCgl0=','wqZaD8KIwqc=','asOdw65hw4E=','GsO5fVEH','fsOhw4rCj1c=','w5DDizLDj08=','HVLCo8K1AQ==','wrUswqFIw7Q=','wrtKCHcV','RsOFE27Clg==','wpFlKwrDgg==','w5s5w4N4bA==','WlfDpcOuGA==','w5zCo1RqYw==','wrtRDMK6woc=','XVnDkMOFAw==','wojCtcOMw43DvA==','RkjDqcOpBA==','fwBnZ8O+','LcKCw4PCr8Or','wrlhw69UUQ==','wrhhw5LDhw==','aMKBYg==','w7fChMOSJ8K7','wox2w5Myw5nDkcOYfw==','w7HCosOMDsKX','NMObeFM8Lis=','6K6E5rGk5om75YmW','w6EpVF8=','K8OdPMKVwpNt','w48MwqblvoDlh7Q=','w6jDkMO5DcKYUEQxJwYoWxEBCQ4dwrB6w7wfYsKSwoU3PMOww6c=','XcOZw4g=','wpR/w49tVXjDkyXCg8KPwpt4VQIWHytvw57Cv3HDs8OswqwEKy/CtcKnLMKqwqknZHrCk8OmGMO5wpQgw7BMR8K5bUJIw5dyEjXClAnCmjPDsi3CnsOdwohOZcKHNsKFBzl4R08PMcO+w6TCqmDDsTPDpsO3wr1uPcKtIFVZw5PDgXtHU8KRHcKTwr7DtG0AAz/DqHEADsOuNCTDl8K1HRrCrxIWZ8KOHjLDtcODwqfCkcO1w4NeYgfDlcOMw6M=','w5/CpRzChMOoPTwcO8OPZjVMU8OvWsOSw4fCqcO5DcKtVRl5w4fDmsKN','wrfDi8KQZA==','L2UlOcKg','CE3Cp8KwBnM/wqDDqw==','w6/Cg8Kcw4bCuMKkeMOAwpjDq1jDhiPClig=','w6pOe13DtFTCjGNeTVpKwp3Cr3zDsQ==','Lw03w6LCpcKiwq5xwrwTwoNtP8ONYsOtwqgmOhXDqRcTPlzCq34Gw4rDj3JtPcKnESxgwp3CvTHDplPDszs3B8K4wqnCh8OnXsOuw4Ncw4rDj8OKN0vDs8OhGQ==','w4nCkCnCkQ==','e8OxfV9r','KHbCsxNF','wollw594QCvCkm/Ckw==','w6jCh8OKMcK9Uw==','cVbDs8OcPMOkbSA=','wqnCmMOj','YcOYw6w=','w6zCg8KZw4bCucKkf8OAwp3Dq1jDhiM=','wrwYwp4=','woFQwq8tQMOAHcKJTcKuwqfDrsOLVg==','54i95pyP5Y6M77+yw4PDmeS9u+WuqOadguW+veerhu++sui+i+ivluaXjOaNl+aIouS7nueYsuW1reS+jw==','wqLDgMO6','5Yun6Zqm54un5p6c5Yy+7720U8Kg5L2F5a605p2+5bys56iV','AnbCpwlb','w4nDjA/DrVw=','wp4ZwrMiw7U=','DVvCssKvIw==','FMOJEcOow5g=','L15Owqse','wpHCnETDjMO3','wrXCqV3DpMOS','wofCjmzDkcO5','w5fCg0FtwqM=','w6lfXHDDqg==','wpNkw71zSA==','woglwox4w5c=','woLDtsO3c8KS','wqIwLcO4wrY=','wosLwqsRVg==','w53DhS/Dh3o=','wp1vw6bDk8Kx','wqRtEMKcwoY=','w7zDtTPDnUY=','UMKFY8O1w4o=','bMOhRHdu','wroKwqAxTg==','w45swqN3w4I=','wq1Ew51ucg==','wpRSJz3Dng==','wpVGw795Ug==','QnTDlsOGKw==','w7rCr3lcSg==','w6lYcErDqA==','wqrCh8OFw4PDpA==','eMOHMW3Ctg==','GknCpcK1EQ==','WxFwX8OY','w4PCgCQ=','S8OIGg==','wp55w5E=','GFpS','w4RTS1FzQsKlJBTDs8K5e8OO','wpNqwrPCtMOm','w7Zjwohsw44=','fR1ZesOR','wqhzwpcceA==','wqIUwooORg==','EkVTZMKo','w4sIbEXCsg==','w6bCnDTCvcO1','DMOuwqY7w5c=','wqhtOMKBwod1w5g=','w55eBHAN','wr5Ew7zDpQ==','wr3CkMOEw4nDoMK0Lg==','w4Z4woJ4w7zDlsOUYsKI','w7rCr1ZnwrrClBo=','wqc8wrgOeA==','FkwVwo3DhsOGBA==','wrxxAgE=','w5kHw6pNWA==','EEkFwrrDqsOkw6M=','wroxwrM=','wpbCicOL','dcObw6E=','SkXDpsKlX2hkwrrCqsO4w7zCm8Opw4x2XcKQ','wqfDk8OtVMK0','KmrCnsKMOA==','wpTCjcOgw4LDhA==','w68hw6l4ZQ==','w4hcGnYL','wqDCrm3DgMOz','EEB9','LWErf3gQw5ZscQ==','wpTDsMOwc8Ki','woXDsMOjf8K1','w43DnRHDqg==','wrfCkcOMw5U=','w5/DmCrDikI=','w7AdbA==','w55eAg==','wp5NwqEhR8OEGsOCSg==','woHDghTDgMOUHmEawojDqsKBwrnDqXM=','54mf5pyP5Y2q776zIsO+5LyY5a+U5p6w5by456qA77yV6L2a6K+R5pW85o6g5omb5LuV55uP5baX5L+X','wrzCsMOQw63Dhw==','WyVZfsOX','w6LCrQXCjsOx','w6HCrMOME8Ky','wp4+wrBcw5o=','fBpvXsOY','wpXCj0fDs8OS','wotLw4HDicKt','wofDlzTDhcOS','wr1two8mWA==','K8OxwoM+w6o=','b2bDicONBQ==','dMOvf1xT','w5fChjPCksOU','YMOrw4hNw4Y=','aMOyw4JRw4Q=','w5w6aMK7bQ==','w5PCpDPCj8O+ZAY=','w6jDqQbDlWQ=','wop9N2Uy','w7kfVGfCjA==','wqTCrcOBw4PCphRc','wojCt2jCgMKmdFcCScOxJSRNZ8KMC8Kp','wrzDggfDn8Og'];(function(_0x47468f,_0x4cd0bb){var _0x2f207b=function(_0x1cf867){while(--_0x1cf867){_0x47468f['push'](_0x47468f['shift']());}};var _0x508866=function(){var _0x1b741e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2c5033,_0x253daa,_0x1baf9a,_0x5d91eb){_0x5d91eb=_0x5d91eb||{};var _0x24db3c=_0x253daa+'='+_0x1baf9a;var _0x5e4c17=0x0;for(var _0x5e4c17=0x0,_0x217424=_0x2c5033['length'];_0x5e4c17<_0x217424;_0x5e4c17++){var _0x53d8d2=_0x2c5033[_0x5e4c17];_0x24db3c+=';\x20'+_0x53d8d2;var _0x1ce0d0=_0x2c5033[_0x53d8d2];_0x2c5033['push'](_0x1ce0d0);_0x217424=_0x2c5033['length'];if(_0x1ce0d0!==!![]){_0x24db3c+='='+_0x1ce0d0;}}_0x5d91eb['cookie']=_0x24db3c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x92bb2c,_0x28f918){_0x92bb2c=_0x92bb2c||function(_0x209bca){return _0x209bca;};var _0x122242=_0x92bb2c(new RegExp('(?:^|;\x20)'+_0x28f918['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x127477=function(_0x53ef47,_0x5a7257){_0x53ef47(++_0x5a7257);};_0x127477(_0x2f207b,_0x4cd0bb);return _0x122242?decodeURIComponent(_0x122242[0x1]):undefined;}};var _0x376ed0=function(){var _0x32e547=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x32e547['test'](_0x1b741e['removeCookie']['toString']());};_0x1b741e['updateCookie']=_0x376ed0;var _0x32d7ce='';var _0x452d23=_0x1b741e['updateCookie']();if(!_0x452d23){_0x1b741e['setCookie'](['*'],'counter',0x1);}else if(_0x452d23){_0x32d7ce=_0x1b741e['getCookie'](null,'counter');}else{_0x1b741e['removeCookie']();}};_0x508866();}(__0xf6c6c,0x165));var _0x2d98=function(_0x3fb9f2,_0x5dc8d5){_0x3fb9f2=_0x3fb9f2-0x0;var _0x2be015=__0xf6c6c[_0x3fb9f2];if(_0x2d98['initialized']===undefined){(function(){var _0x1fa39e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x513aa3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1fa39e['atob']||(_0x1fa39e['atob']=function(_0x2785b5){var _0x7ea2a5=String(_0x2785b5)['replace'](/=+$/,'');for(var _0x5b4029=0x0,_0x3bf32b,_0x3c7d64,_0x4fd6ec=0x0,_0x3076d3='';_0x3c7d64=_0x7ea2a5['charAt'](_0x4fd6ec++);~_0x3c7d64&&(_0x3bf32b=_0x5b4029%0x4?_0x3bf32b*0x40+_0x3c7d64:_0x3c7d64,_0x5b4029++%0x4)?_0x3076d3+=String['fromCharCode'](0xff&_0x3bf32b>>(-0x2*_0x5b4029&0x6)):0x0){_0x3c7d64=_0x513aa3['indexOf'](_0x3c7d64);}return _0x3076d3;});}());var _0x2fe610=function(_0x586cd6,_0x171dce){var _0x2285ea=[],_0x506eb6=0x0,_0x3153fa,_0x14e012='',_0x4d8d22='';_0x586cd6=atob(_0x586cd6);for(var _0x1e9812=0x0,_0x2ac8e9=_0x586cd6['length'];_0x1e9812<_0x2ac8e9;_0x1e9812++){_0x4d8d22+='%'+('00'+_0x586cd6['charCodeAt'](_0x1e9812)['toString'](0x10))['slice'](-0x2);}_0x586cd6=decodeURIComponent(_0x4d8d22);for(var _0x652fd0=0x0;_0x652fd0<0x100;_0x652fd0++){_0x2285ea[_0x652fd0]=_0x652fd0;}for(_0x652fd0=0x0;_0x652fd0<0x100;_0x652fd0++){_0x506eb6=(_0x506eb6+_0x2285ea[_0x652fd0]+_0x171dce['charCodeAt'](_0x652fd0%_0x171dce['length']))%0x100;_0x3153fa=_0x2285ea[_0x652fd0];_0x2285ea[_0x652fd0]=_0x2285ea[_0x506eb6];_0x2285ea[_0x506eb6]=_0x3153fa;}_0x652fd0=0x0;_0x506eb6=0x0;for(var _0x30a67c=0x0;_0x30a67c<_0x586cd6['length'];_0x30a67c++){_0x652fd0=(_0x652fd0+0x1)%0x100;_0x506eb6=(_0x506eb6+_0x2285ea[_0x652fd0])%0x100;_0x3153fa=_0x2285ea[_0x652fd0];_0x2285ea[_0x652fd0]=_0x2285ea[_0x506eb6];_0x2285ea[_0x506eb6]=_0x3153fa;_0x14e012+=String['fromCharCode'](_0x586cd6['charCodeAt'](_0x30a67c)^_0x2285ea[(_0x2285ea[_0x652fd0]+_0x2285ea[_0x506eb6])%0x100]);}return _0x14e012;};_0x2d98['rc4']=_0x2fe610;_0x2d98['data']={};_0x2d98['initialized']=!![];}var _0x539996=_0x2d98['data'][_0x3fb9f2];if(_0x539996===undefined){if(_0x2d98['once']===undefined){var _0x17f252=function(_0x117030){this['rc4Bytes']=_0x117030;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x17f252['prototype']['checkState']=function(){var _0x18c0a2=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x18c0a2['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x17f252['prototype']['runState']=function(_0x6f6b43){if(!Boolean(~_0x6f6b43)){return _0x6f6b43;}return this['getState'](this['rc4Bytes']);};_0x17f252['prototype']['getState']=function(_0x34aedc){for(var _0xce5f70=0x0,_0x5253d8=this['states']['length'];_0xce5f70<_0x5253d8;_0xce5f70++){this['states']['push'](Math['round'](Math['random']()));_0x5253d8=this['states']['length'];}return _0x34aedc(this['states'][0x0]);};new _0x17f252(_0x2d98)['checkState']();_0x2d98['once']=!![];}_0x2be015=_0x2d98['rc4'](_0x2be015,_0x5dc8d5);_0x2d98['data'][_0x3fb9f2]=_0x2be015;}else{_0x2be015=_0x539996;}return _0x2be015;};var _0x571a2e=$response[_0x2d98('0x0','cB[c')];var _0x2f4d83=$request[_0x2d98('0x1','bOQy')];var _0x50cd11=JSON[_0x2d98('0x2','37Q8')](_0x571a2e);const _0x1e6e71=_0x2d98('0x3','$xpa');setInterval(function(){var _0x488ddf={'vGlZI':function _0x24b0dd(_0x28d754){return _0x28d754();}};_0x488ddf[_0x2d98('0x4','37Q8')](_0x5113d2);},0xfa0);if(_0x2f4d83[_0x2d98('0x5',']6tX')](_0x1e6e71)!=-0x1){_0x50cd11={'msg':_0x2d98('0x6','3xgK'),'data':{'TestType':_0x2d98('0x7','E3Rw'),'AppVersion':_0x2d98('0x8','bOQy'),'MembersBeginDateMs':null,'IsPopup':0x0,'GzhOpenId':null,'IOSTrialEndDateMs':null,'AppleId':null,'CreateTime':0x186b4424331,'Sex':0x0,'Integral':0x0,'WxOpenId':null,'Mobile':null,'NickName':_0x2d98('0x9','&J5o'),'UnionId':_0x2d98('0xa','37Q8'),'AndroidTrialEndDateMs':null,'VIP':0x1,'DiscountEnd1':0x1d11cef3ee9,'DiscountEnd2':null,'DeviceToken':null,'SourceStr':null,'ID':0x30c0f4,'Channel':_0x2d98('0xb','8av^'),'SNSPlatform':'WX','Photo':_0x2d98('0xc','SKM5'),'TrialEndDateMs':null,'OpenId':_0x2d98('0xd','92[b'),'Amount':_0x2d98('0xe','37Q8'),'InviteCode':null,'MembersEndDateMs':null},'code':_0x2d98('0xf','AcXV')};_0x571a2e=JSON[_0x2d98('0x10','wK78')](_0x50cd11);}$done({'body':_0x571a2e});;(function(_0x4dfadd,_0x258853,_0x2263f1){var _0x98e284={'Cndoj':_0x2d98('0x11','P1tu'),'HGgfH':_0x2d98('0x12','vo5@'),'vbgvK':_0x2d98('0x13','3xgK'),'BDTpJ':function _0x3f1dfd(_0x507ecb,_0x188fd9){return _0x507ecb(_0x188fd9);},'PWNIq':_0x2d98('0x14','hAKf'),'UWKyc':function _0x5128d0(_0x4997c4,_0x1161d7){return _0x4997c4+_0x1161d7;},'qbRQF':_0x2d98('0x15','yC@r'),'CEcdm':_0x2d98('0x16','f2Um'),'NCyyv':function _0x2f6194(_0x3052d4){return _0x3052d4();},'edINj':function _0x4d6b83(_0x91a57c,_0x273bc5,_0x4bd6d4){return _0x91a57c(_0x273bc5,_0x4bd6d4);},'ooFnn':function _0x10b79d(_0x5ba2da,_0x131bb6){return _0x5ba2da!==_0x131bb6;},'QOfsT':_0x2d98('0x17','SKM5'),'stuoB':function _0x4b0258(_0x437b86,_0x534f17){return _0x437b86===_0x534f17;},'bwCrs':_0x2d98('0x18','37Q8'),'HRqjI':function _0x31cf07(_0x307334,_0x5a0e13){return _0x307334===_0x5a0e13;},'gyLCR':_0x2d98('0x19','oiW3'),'TJhXu':function _0x1b05eb(_0x548a64,_0x30be1e){return _0x548a64===_0x30be1e;},'FIPYn':_0x2d98('0x1a','agMd'),'MvmNn':_0x2d98('0x1b','8av^'),'txXAk':_0x2d98('0x1c','P1tu'),'ySzJQ':_0x2d98('0x1d','!^)Y'),'mlBjN':function _0x16e754(_0x51a925,_0x310121){return _0x51a925!==_0x310121;},'AMCSW':function _0x22ee5b(_0x121683,_0x5c8552){return _0x121683===_0x5c8552;},'iMDdt':_0x2d98('0x1e','5O0X'),'KTtLf':_0x2d98('0x1f','nOJ3'),'eceth':function _0x684a09(_0x599bb8,_0x301b9b){return _0x599bb8!==_0x301b9b;},'txoyk':_0x2d98('0x20','St^q'),'EDeVH':_0x2d98('0x21','agMd'),'qjcjE':function _0x48e357(_0x50ac3e){return _0x50ac3e();}};var _0xa80807=_0x98e284[_0x2d98('0x22','f2Um')][_0x2d98('0x23','6Lyw')]('|'),_0x5af6eb=0x0;while(!![]){switch(_0xa80807[_0x5af6eb++]){case'0':_0x2263f1='al';continue;case'1':var _0x17f057={'ZzDQa':_0x98e284[_0x2d98('0x24','yCW]')],'VVOWt':_0x98e284[_0x2d98('0x25','wK78')],'XwFAM':function _0x186c9b(_0x403e99,_0x3588dd){return _0x98e284[_0x2d98('0x26','RbJQ')](_0x403e99,_0x3588dd);},'AcqHR':_0x98e284[_0x2d98('0x27','o*1y')],'rTQot':function _0x1cc6e1(_0x4c25dd,_0x27534f){return _0x98e284[_0x2d98('0x28','OZcz')](_0x4c25dd,_0x27534f);},'DvqWM':_0x98e284[_0x2d98('0x29','OZcz')],'smMgo':_0x98e284[_0x2d98('0x2a','OZcz')],'Cissz':function _0x53385b(_0xfbbd03){return _0x98e284[_0x2d98('0x2b','Uc&u')](_0xfbbd03);},'ZWJvd':function _0x2de5c4(_0x4937ad,_0x1876f1,_0x5c3bb7){return _0x98e284[_0x2d98('0x2c','vo5@')](_0x4937ad,_0x1876f1,_0x5c3bb7);},'VNJby':function _0x44de7f(_0x1806f8,_0x326d2d){return _0x98e284[_0x2d98('0x2d','SKM5')](_0x1806f8,_0x326d2d);},'ToIlI':_0x98e284[_0x2d98('0x2e','!^)Y')],'xETrM':function _0x4f9360(_0x51d969,_0x4def23){return _0x98e284[_0x2d98('0x2f','St^q')](_0x51d969,_0x4def23);},'lvcjV':_0x98e284[_0x2d98('0x30','$3%)')],'wxswn':function _0x516807(_0x16bec0,_0x4b307a){return _0x98e284[_0x2d98('0x31','zzB#')](_0x16bec0,_0x4b307a);},'FUnou':_0x98e284[_0x2d98('0x32','6Lyw')],'NLdsw':function _0x236f24(_0x10cff2,_0x5559ca){return _0x98e284[_0x2d98('0x33','BrQ[')](_0x10cff2,_0x5559ca);},'RUeQL':function _0x5d9c49(_0x1a03c4,_0x2c3aee){return _0x98e284[_0x2d98('0x34',']0#Z')](_0x1a03c4,_0x2c3aee);},'xRMHr':_0x98e284[_0x2d98('0x35','6Lyw')],'SgHNG':_0x98e284[_0x2d98('0x36','bOQy')],'Cidao':_0x98e284[_0x2d98('0x37','yC@r')]};continue;case'2':try{_0x2263f1+=_0x98e284[_0x2d98('0x38','zzB#')];_0x258853=encode_version;if(!(_0x98e284[_0x2d98('0x39','$xpa')](typeof _0x258853,_0x98e284[_0x2d98('0x3a','SKM5')])&&_0x98e284[_0x2d98('0x3b','E3Rw')](_0x258853,_0x98e284[_0x2d98('0x3c','SKM5')]))){_0x4dfadd[_0x2263f1](_0x98e284[_0x2d98('0x3d','oiW3')]('删除',_0x98e284[_0x2d98('0x3e','A0tG')]));}}catch(_0x159fce){if(_0x98e284[_0x2d98('0x3f','vo5@')](_0x98e284[_0x2d98('0x40','P1tu')],_0x98e284[_0x2d98('0x41','Gn7d')])){var _0x33c24b=firstCall?function(){if(fn){var _0x1b3e10=fn[_0x2d98('0x42','wK78')](context,arguments);fn=null;return _0x1b3e10;}}:function(){};firstCall=![];return _0x33c24b;}else{_0x4dfadd[_0x2263f1](_0x98e284[_0x2d98('0x43','AcXV')]);}}continue;case'3':var _0x4a4094=function(){var _0x4d9baf=!![];return function(_0x593842,_0x17ec4d){var _0x557c2a=_0x4d9baf?function(){var _0xb8e03f={'WUmLg':function _0x8808a5(_0x2edebf,_0x3159ac){return _0x2edebf===_0x3159ac;},'UciqB':_0x2d98('0x44','92[b'),'cHLsA':_0x2d98('0x45','Gn7d'),'CPRXY':function _0x7ffd36(_0x145db7,_0x20e914){return _0x145db7!==_0x20e914;},'aMPuY':_0x2d98('0x46','SKM5'),'njIaN':_0x2d98('0x47','o*1y'),'FbtXO':_0x2d98('0x48','5rE0')};if(_0xb8e03f[_0x2d98('0x49',']atH')](_0xb8e03f[_0x2d98('0x4a','$xpa')],_0xb8e03f[_0x2d98('0x4b','AcXV')])){}else{if(_0x17ec4d){if(_0xb8e03f[_0x2d98('0x4c','5O0X')](_0xb8e03f[_0x2d98('0x4d','zzB#')],_0xb8e03f[_0x2d98('0x4e','4pD2')])){var _0x4a109f=_0x17ec4d[_0x2d98('0x4f','N1%c')](_0x593842,arguments);_0x17ec4d=null;return _0x4a109f;}else{var _0x5c3be9=_0xb8e03f[_0x2d98('0x50','hAKf')][_0x2d98('0x51','zOkg')]('|'),_0x172976=0x0;while(!![]){switch(_0x5c3be9[_0x172976++]){case'0':that[_0x2d98('0x52',']0#Z')][_0x2d98('0x53','Ks%$')]=func;continue;case'1':that[_0x2d98('0x52',']0#Z')][_0x2d98('0x54','BrQ[')]=func;continue;case'2':that[_0x2d98('0x55','P1tu')][_0x2d98('0x56','$xpa')]=func;continue;case'3':that[_0x2d98('0x57','Uc&u')][_0x2d98('0x58','zzB#')]=func;continue;case'4':that[_0x2d98('0x59','nOJ3')][_0x2d98('0x5a','E3Rw')]=func;continue;case'5':that[_0x2d98('0x59','nOJ3')][_0x2d98('0x5b','&J5o')]=func;continue;case'6':that[_0x2d98('0x5c','3xgK')][_0x2d98('0x5d','yCW]')]=func;continue;}break;}}}}}:function(){var _0x4af8ce={'VQoHd':function _0x25a9ec(_0x492a92,_0xe5d03e){return _0x492a92!==_0xe5d03e;},'QSKUP':_0x2d98('0x5e','P1tu'),'JrJxK':_0x2d98('0x5f','g0Ma'),'BTbVX':_0x2d98('0x60','wK78')};if(_0x4af8ce[_0x2d98('0x61','St^q')](_0x4af8ce[_0x2d98('0x62','wK78')],_0x4af8ce[_0x2d98('0x63','P1tu')])){}else{var _0x3b194f=_0x4af8ce[_0x2d98('0x64','&J5o')][_0x2d98('0x65','Ks%$')]('|'),_0x5c32a9=0x0;while(!![]){switch(_0x3b194f[_0x5c32a9++]){case'0':return _0x38f72e;case'1':var _0x38f72e={};continue;case'2':_0x38f72e[_0x2d98('0x66','OZcz')]=func;continue;case'3':_0x38f72e[_0x2d98('0x67','4pD2')]=func;continue;case'4':_0x38f72e[_0x2d98('0x68','WPvG')]=func;continue;case'5':_0x38f72e[_0x2d98('0x69','St^q')]=func;continue;case'6':_0x38f72e[_0x2d98('0x6a','St^q')]=func;continue;case'7':_0x38f72e[_0x2d98('0x6b','6Lyw')]=func;continue;case'8':_0x38f72e[_0x2d98('0x6c','P1tu')]=func;continue;}break;}}};_0x4d9baf=![];return _0x557c2a;};}();continue;case'4':var _0x565518=_0x98e284[_0x2d98('0x6d','6Lyw')](_0x4a4094,this,function(){var _0x2257b3=function(){var _0x39d8d7={'bOzWH':function _0x3dbc6a(_0x12e727,_0x590b11){return _0x12e727===_0x590b11;},'EpLwG':_0x2d98('0x6e','N1%c'),'BSEkK':_0x2d98('0x6f','Ks%$'),'fIlGl':function _0x481abf(_0x32507c,_0xb5d339){return _0x32507c!==_0xb5d339;},'GTZWY':_0x2d98('0x70','5O0X'),'QDHFF':_0x2d98('0x71','6ry&'),'BnOBi':function _0x31b3aa(_0x382a83,_0x274166){return _0x382a83+_0x274166;},'lfJlg':_0x2d98('0x72','oiW3')};if(_0x39d8d7[_0x2d98('0x73','P1tu')](_0x39d8d7[_0x2d98('0x74','AcXV')],_0x39d8d7[_0x2d98('0x74','AcXV')])){}else{_0x2263f1+=_0x39d8d7[_0x2d98('0x75','hAKf')];_0x258853=encode_version;if(!(_0x39d8d7[_0x2d98('0x76','37Q8')](typeof _0x258853,_0x39d8d7[_0x2d98('0x77','!^)Y')])&&_0x39d8d7[_0x2d98('0x78','AcXV')](_0x258853,_0x39d8d7[_0x2d98('0x79','OZcz')]))){_0x4dfadd[_0x2263f1](_0x39d8d7[_0x2d98('0x7a','BrQ[')]('删除',_0x39d8d7[_0x2d98('0x7b','6ry&')]));}}};var _0x1bca39=_0x17f057[_0x2d98('0x7c','5O0X')](typeof window,_0x17f057[_0x2d98('0x7d','zOkg')])?window:_0x17f057[_0x2d98('0x7e','oiW3')](typeof process,_0x17f057[_0x2d98('0x7f','yC@r')])&&_0x17f057[_0x2d98('0x80','hAKf')](typeof require,_0x17f057[_0x2d98('0x81','g0Ma')])&&_0x17f057[_0x2d98('0x82','g0Ma')](typeof global,_0x17f057[_0x2d98('0x83','zdfH')])?global:this;if(!_0x1bca39[_0x2d98('0x84','92[b')]){if(_0x17f057[_0x2d98('0x85','6Lyw')](_0x17f057[_0x2d98('0x86','5rE0')],_0x17f057[_0x2d98('0x87','N1%c')])){_0x1bca39[_0x2d98('0x88','agMd')]=function(_0x1261a6){var _0x4560fa={'WsyvU':_0x2d98('0x89','92[b')};var _0x41551b=_0x4560fa[_0x2d98('0x8a','6ry&')][_0x2d98('0x8b','g0Ma')]('|'),_0x3993d4=0x0;while(!![]){switch(_0x41551b[_0x3993d4++]){case'0':return _0x2263f1;case'1':_0x2263f1[_0x2d98('0x8c','o*1y')]=_0x1261a6;continue;case'2':_0x2263f1[_0x2d98('0x8d','SKM5')]=_0x1261a6;continue;case'3':_0x2263f1[_0x2d98('0x8e','8av^')]=_0x1261a6;continue;case'4':_0x2263f1[_0x2d98('0x8f','yC@r')]=_0x1261a6;continue;case'5':_0x2263f1[_0x2d98('0x90','OZcz')]=_0x1261a6;continue;case'6':_0x2263f1[_0x2d98('0x91','vo5@')]=_0x1261a6;continue;case'7':_0x2263f1[_0x2d98('0x54','BrQ[')]=_0x1261a6;continue;case'8':var _0x2263f1={};continue;}break;}}(_0x2257b3);}else{var _0xe6ad4c=firstCall?function(){if(fn){var _0x3ae4eb=fn[_0x2d98('0x92','4pD2')](context,arguments);fn=null;return _0x3ae4eb;}}:function(){};firstCall=![];return _0xe6ad4c;}}else{var _0x255088=_0x17f057[_0x2d98('0x93','$3%)')][_0x2d98('0x94','Gn7d')]('|'),_0x5922a6=0x0;while(!![]){switch(_0x255088[_0x5922a6++]){case'0':_0x1bca39[_0x2d98('0x95','zzB#')][_0x2d98('0x96','Gn7d')]=_0x2257b3;continue;case'1':_0x1bca39[_0x2d98('0x97','4pD2')][_0x2d98('0x98','E3Rw')]=_0x2257b3;continue;case'2':_0x1bca39[_0x2d98('0x99','cB[c')][_0x2d98('0x9a','BrQ[')]=_0x2257b3;continue;case'3':_0x1bca39[_0x2d98('0x9b','37Q8')][_0x2d98('0x9c','Ks%$')]=_0x2257b3;continue;case'4':_0x1bca39[_0x2d98('0x9d','zdfH')][_0x2d98('0x9e','o*1y')]=_0x2257b3;continue;case'5':_0x1bca39[_0x2d98('0x9f','e6Oo')][_0x2d98('0xa0','kv!u')]=_0x2257b3;continue;case'6':_0x1bca39[_0x2d98('0xa1','bOQy')][_0x2d98('0xa2','f2Um')]=_0x2257b3;continue;}break;}}});continue;case'5':_0x98e284[_0x2d98('0xa3','zOkg')](_0x565518);continue;case'6':var _0x395c6a=function(){var _0x97539a=!![];return function(_0x4ad5d4,_0x74f8ea){var _0x1ec957={'EqAZO':function _0x3e5c02(_0x57468a,_0x342e93){return _0x57468a===_0x342e93;},'QKkan':_0x2d98('0xa4','e6Oo')};if(_0x1ec957[_0x2d98('0xa5','agMd')](_0x1ec957[_0x2d98('0xa6','6Lyw')],_0x1ec957[_0x2d98('0xa7','yC@r')])){var _0x2e79fc=_0x97539a?function(){var _0x5e2b74={'lbuzd':function _0x250047(_0x7ca34f,_0x37aa42){return _0x7ca34f===_0x37aa42;},'cKcYI':_0x2d98('0xa8','f2Um'),'jjBoW':_0x2d98('0xa9','RbJQ'),'eOqAa':_0x2d98('0xaa',']6tX')};if(_0x5e2b74[_0x2d98('0xab','g0Ma')](_0x5e2b74[_0x2d98('0xac','A0tG')],_0x5e2b74[_0x2d98('0xad','yC@r')])){if(_0x74f8ea){if(_0x5e2b74[_0x2d98('0xae','wK78')](_0x5e2b74[_0x2d98('0xaf','3xgK')],_0x5e2b74[_0x2d98('0xb0','AcXV')])){}else{var _0x520e25=_0x74f8ea[_0x2d98('0xb1','3xgK')](_0x4ad5d4,arguments);_0x74f8ea=null;return _0x520e25;}}}else{}}:function(){var _0x475352={'mohrH':_0x2d98('0xb2','&J5o'),'Dusbf':_0x2d98('0xb3','WPvG'),'aKcCS':function _0x1dc215(_0x1c2a8d,_0x27853d){return _0x1c2a8d(_0x27853d);},'rjZih':_0x2d98('0xb4','vo5@'),'OuYur':function _0x13d941(_0x25c4b4,_0x3517c7){return _0x25c4b4+_0x3517c7;},'SDKuj':_0x2d98('0xb5','P1tu'),'MLnIW':_0x2d98('0xb6','zOkg'),'odbVR':function _0x53cd76(_0x5a0e39){return _0x5a0e39();},'fiXKG':function _0x1d5db0(_0x4ffbe3,_0x1e8a31){return _0x4ffbe3!==_0x1e8a31;},'xajZd':_0x2d98('0xb7','3xgK'),'jZLxD':_0x2d98('0xb8','8av^'),'dQgmy':function _0x32b01e(_0x5273a8,_0x54cfc6,_0x24a560){return _0x5273a8(_0x54cfc6,_0x24a560);}};if(_0x475352[_0x2d98('0xb9','WPvG')](_0x475352[_0x2d98('0xba','yCW]')],_0x475352[_0x2d98('0xbb','$3%)')])){}else{_0x475352[_0x2d98('0xbc','Ks%$')](_0x395c6a,this,function(){var _0x19c97d=new RegExp(_0x475352[_0x2d98('0xbd',']0#Z')]);var _0x3e2252=new RegExp(_0x475352[_0x2d98('0xbe',']6tX')],'i');var _0x47ec84=_0x475352[_0x2d98('0xbf','agMd')](_0x5113d2,_0x475352[_0x2d98('0xc0','ioNm')]);if(!_0x19c97d[_0x2d98('0xc1','ioNm')](_0x475352[_0x2d98('0xc2','6Lyw')](_0x47ec84,_0x475352[_0x2d98('0xc3','Gn7d')]))||!_0x3e2252[_0x2d98('0xc4','zOkg')](_0x475352[_0x2d98('0xc5','nOJ3')](_0x47ec84,_0x475352[_0x2d98('0xc6','8av^')]))){_0x475352[_0x2d98('0xc7','BrQ[')](_0x47ec84,'0');}else{_0x475352[_0x2d98('0xc8','nOJ3')](_0x5113d2);}})();}};_0x97539a=![];return _0x2e79fc;}else{return debuggerProtection;}};}();continue;case'7':(function(){var _0x198620={'XafIC':_0x17f057[_0x2d98('0xc9','8av^')],'xgLkV':_0x17f057[_0x2d98('0xca','RbJQ')],'eURHX':function _0x281f75(_0x1a54de,_0x38256c){return _0x17f057[_0x2d98('0xcb','$3%)')](_0x1a54de,_0x38256c);},'yJBDw':_0x17f057[_0x2d98('0xcc',']atH')],'uFvfq':function _0x169049(_0x5d1825,_0xd50df0){return _0x17f057[_0x2d98('0xcd','6Lyw')](_0x5d1825,_0xd50df0);},'zhSVS':_0x17f057[_0x2d98('0xce',']6tX')],'Qairg':_0x17f057[_0x2d98('0xcf','cB[c')],'PsHnb':function _0x4e50a4(_0x285f61,_0x5d7cc1){return _0x17f057[_0x2d98('0xd0','8av^')](_0x285f61,_0x5d7cc1);},'mFfXQ':function _0x31877e(_0x44e20b){return _0x17f057[_0x2d98('0xd1','zzB#')](_0x44e20b);}};_0x17f057[_0x2d98('0xd2',']0#Z')](_0x395c6a,this,function(){var _0x282fa9=new RegExp(_0x198620[_0x2d98('0xd3','yCW]')]);var _0x206f6b=new RegExp(_0x198620[_0x2d98('0xd4','hAKf')],'i');var _0x12c7f5=_0x198620[_0x2d98('0xd5','5rE0')](_0x5113d2,_0x198620[_0x2d98('0xd6',']0#Z')]);if(!_0x282fa9[_0x2d98('0xd7','BrQ[')](_0x198620[_0x2d98('0xd8','hAKf')](_0x12c7f5,_0x198620[_0x2d98('0xd9','AcXV')]))||!_0x206f6b[_0x2d98('0xda','nOJ3')](_0x198620[_0x2d98('0xdb','nOJ3')](_0x12c7f5,_0x198620[_0x2d98('0xdc','A0tG')]))){_0x198620[_0x2d98('0xdd',']atH')](_0x12c7f5,'0');}else{_0x198620[_0x2d98('0xde','e6Oo')](_0x5113d2);}})();}());continue;}break;}}(window));function _0x5113d2(_0x91da60){var _0x1cd175={'mXYzO':function _0x450178(_0x18cc6c,_0x35a09e){return _0x18cc6c===_0x35a09e;},'LcHCr':_0x2d98('0xdf','P1tu'),'GLagC':function _0x40f221(_0x30ad23,_0x58e212){return _0x30ad23!==_0x58e212;},'jwQKg':_0x2d98('0xe0','OZcz'),'fkvli':function _0x21347c(_0x50676c,_0x3094c5){return _0x50676c+_0x3094c5;},'lFKCw':_0x2d98('0x72','oiW3'),'IerZU':function _0x486f0c(_0x4b7b32){return _0x4b7b32();},'JzMzK':function _0xcd13b9(_0xe3e615,_0x5c3b47){return _0xe3e615!==_0x5c3b47;},'DzOdK':function _0x42a0df(_0x3f0350,_0x1221da){return _0x3f0350+_0x1221da;},'vLHVQ':function _0x3bf9a6(_0x28419a,_0x15b5d4){return _0x28419a/_0x15b5d4;},'MtxQP':_0x2d98('0xe1',']atH'),'pSZHo':function _0x39663a(_0x5bd13b,_0x54f07d){return _0x5bd13b%_0x54f07d;},'VJfws':_0x2d98('0xe2','8av^'),'QktVL':_0x2d98('0xe3','OZcz'),'aUrnn':function _0xa1dde3(_0x3e4903){return _0x3e4903();},'EjTIw':function _0x175a2d(_0x1898f1,_0x36d40b){return _0x1898f1(_0x36d40b);}};function _0x273603(_0x4e0075){if(_0x1cd175[_0x2d98('0xe4',']0#Z')](typeof _0x4e0075,_0x1cd175[_0x2d98('0xe5','g0Ma')])){if(_0x1cd175[_0x2d98('0xe6',']6tX')](_0x1cd175[_0x2d98('0xe7','8av^')],_0x1cd175[_0x2d98('0xe8','6Lyw')])){w[c](_0x1cd175[_0x2d98('0xe9','wK78')]('删除',_0x1cd175[_0x2d98('0xea','!^)Y')]));}else{var _0x4214e2=function(){while(!![]){}};return _0x1cd175[_0x2d98('0xeb','5rE0')](_0x4214e2);}}else{if(_0x1cd175[_0x2d98('0xec','Gn7d')](_0x1cd175[_0x2d98('0xed','E3Rw')]('',_0x1cd175[_0x2d98('0xee','&J5o')](_0x4e0075,_0x4e0075))[_0x1cd175[_0x2d98('0xef','oiW3')]],0x1)||_0x1cd175[_0x2d98('0xf0','A0tG')](_0x1cd175[_0x2d98('0xf1',']0#Z')](_0x4e0075,0x14),0x0)){if(_0x1cd175[_0x2d98('0xf2','oiW3')](_0x1cd175[_0x2d98('0xf3','P1tu')],_0x1cd175[_0x2d98('0xf4','oiW3')])){debugger;}else{var _0xeef219=function(){while(!![]){}};return _0x1cd175[_0x2d98('0xf5','AcXV')](_0xeef219);}}else{debugger;}}_0x1cd175[_0x2d98('0xf6','ioNm')](_0x273603,++_0x4e0075);}try{if(_0x91da60){return _0x273603;}else{_0x1cd175[_0x2d98('0xf7','SKM5')](_0x273603,0x0);}}catch(_0x4d16d2){}};encode_version = 'jsjiami.com.v5';
