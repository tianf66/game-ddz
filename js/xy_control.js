/* NKS0406 */
var console=console||{log:function(){}};
(function(){
var baseUrl = location.hostname;
window._XYU_=window._XYU_||{
	
	i:{
		index:baseUrl, 
		pburl:"",
		game:[],
		channel:{
			0:{s:"u3702363",b:"u3702375"},
			3000:{s:"u3702363",b:"u3702375"}
		},
		//banner轮播时间
		time:4000,
		//阻塞广告展示时间
		recTime:8000,
		returnTime:300,
		//阻塞广告以及推荐游戏开关
		swichFlag:true,
		baurl:"",
		banner:[],
		//推荐游戏列表
		recGames:[]
	},
	d:{},
	f:{
		l:function(u,c){var j=document.createElement("script");j.src=u;j.type="text/javascript";j.onload=j.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){this.onload=this.onreadystatechange=null;this.parentNode.removeChild(this);if(typeof(c)=="function"){c();};};};document.getElementsByTagName("head")[0].appendChild(j);},
		check:function(){
			var u=_XYU_;
			var g=(function(){var a={},t,s=location.search.substring(1),r=/(?:([^&]+)=([^&]+))/g;while((t=r.exec(s))!=null){t[2]=decodeURIComponent(t[2]);t[1] in a?typeof(a[t[1]])==="string"?a[t[1]]=[a[t[1]],t[2]]:a[t[1]].push(t[2]):a[t[1]]=t[2];};return a;}());
			var h=location.href;
			if(!g.hasOwnProperty("did")){
				location.href=h+(h.indexOf("?")>0?"&":"?")+"did=0";
				u.i.error=1;
				return false;
			};
			if(!u.i.channel.hasOwnProperty(g.did)){
				location.href=h.replace("did="+g.did,"did=0");
				u.i.error=1;
				return false;
			};
			u.i.channel=u.i.channel[g.did];
			u.i.channel.w="did="+g.did;
			u.i.channel.xyu=g.did;
			
		},
		init:function(){
			var u=_XYU_;
			if(u.i.error==1){return false;};
			var cd=document.createElement("div");cd.style.cssText="display:none;";document.body.appendChild(cd);
			var cj=document.createElement("script");cj.type="text/javascript";cj.src="https://hm.baidu.com/hm.js?13fcd4b8919ae5de9298a26869d48d04";cd.appendChild(cj);
			var jq=document.createElement("script");jq.type="text/javascript";jq.src="./js/jquery.js";cd.appendChild(jq);
			// 金立
			u.f.Ag();
			
			//底部插入广告
			/*var bottomAdv = document.createElement("div");
			bottomAdv.id = "bottomAdv";
			bottomAdv.className = "adv-warp";
			var wadv = document.createElement("div");
			wadv.id = "b";
			bottomAdv.appendChild(wadv)
			document.body.appendChild(bottomAdv)
			// 生成不重复的uid
			function GenNonDuplicateID(randomLength){
				var idStr = Date.now().toString(36)
				idStr  = Math.random().toString(36).substr(3,randomLength)
				return idStr
			}
			//新手引导
			var uid = window.localStorage.getItem("uid")
			var uuid = GenNonDuplicateID(12)
			if(uid==undefined){
				// document.getElementById("new").style.display="block"
				window.localStorage.setItem("uid",uuid)
				// document.getElementById("body").style.overflow="hidden"
				// document.getElementById("body").style.position="fixed"
				// document.getElementById("zs").style.display="none"
			}else{
				// document.getElementById("new").style.display="none"
			}

			//底部插广告
			var bottom=document.createElement("script");
			bottom.type="text/javascript";
			wadv.className="_xccq1c123vse"
			bottom.innerHTML="(window.slotbydup = window.slotbydup || []).push({id: \"u6625542\",container: \"_xccq1c123vse\",async: true});";

			wadv.appendChild(bottom);
			var botTimer = window.setInterval(function(){
				bottomAdv.removeChild(b)
				if(true){
					var wadv = document.createElement("div");   
					wadv.id = "b";
					bottomAdv.appendChild(wadv)
					// document.body.appendChild(bottomAd)
					wadv.className="_xccq1c321vse";
					var bottom=document.createElement("script");
					bottom.type="text/javascript";
					bottom.innerHTML="(window.slotbydup = window.slotbydup || []).push({id: \"u6625542\",container: \"_xccq1c321vse\",async: true});";
					wadv.appendChild(bottom);
				}
			},60000)
			window.onbeforeunload=function(e){     
				　　var e = window.event||e;  
				    clearInterval(botTimer)
				} 	
				*/
				var h=location.href.split("?")[0];
				var p=["r","10px","10px"];
				for(var i=0;i<u.i.game.length;i++){
					if(u.i.game[i].l.indexOf(h)==0&&u.i.game[i].hasOwnProperty("p")){
						p=u.i.game[i].p.split("-");
						break;
					};
				};
				u.f.icon(p[0],p[1],p[2]);
		},
		icon:function(p,t,x){
			var u=_XYU_;
			if(u.d.hasOwnProperty("icon")){
				console.log("icon:already exist!");
				return false;
			};
			if(window.location.href.indexOf("blockPage")>0){
				return false;
			};
			return true;
		},
		icon_close:function(){
			var u=_XYU_;
			if(u.d.hasOwnProperty("icon")){
				u.d.icon.parentNode.removeChild(u.d.icon);
				delete u.d.icon;
				return true;
			}else{
				return false;
			};
		},
		promotion:function(d){//d=[id/dom]
			var u=_XYU_;
			if(typeof(d)=="string"){
				d=document.getElementById(d);
			};
			if(!d){
				console.log("promotion:container error!");
				return false;
			};
			if(u.d.hasOwnProperty("promotion")){
				u.d.promotion.innerHTML="";
			};
			u.d.promotion=d;
			u.d.promotion.innerHTML="";
			var a=document.createElement("a");
			a.innerHTML="<img src=\"//www.wjxcdn.com/other/img/xyx_25_ppl.gif\" style=\"display:block;width:100%;\">";
			a.href="/";
			u.d.promotion.appendChild(a);
		},
		promotion_close:function(){
			var u=_XYU_;
			if(u.d.hasOwnProperty("promotion")){
				u.d.promotion.innerHTML="";
				delete u.d.promotion;
				return true;
			}else{
				return false;
			};
		},
		suspended_adv:function(p){//p=[t/b]
			var u=_XYU_;
			var c="position:fixed;z-index:100;"+(p=="t"?"top":"bottom")+":0;left:0;width:100%;background:#DDD;";
			if(!u.d.hasOwnProperty("suspended_adv")){
				u.d.suspended_adv=document.createElement("div");
				document.body.appendChild(u.d.suspended_adv);
			};
			u.d.suspended_adv.innerHTML="";
			u.d.suspended_adv.style.cssText=c;
			u.d.suspended_adv.className="_xasfwqd12";
			var s=document.createElement("script");
			s.type="text/javascript";
			s.innerHTML="(window.slotbydup = window.slotbydup || []).push({id: \"u6658271\",container: \"_xasfwqd12\",async: true});";
			u.d.suspended_adv.appendChild(s);
		},
		suspended_adv_close:function(){
			var u=_XYU_;
			if(u.d.hasOwnProperty("suspended_adv")){
				u.d.suspended_adv.parentNode.removeChild(u.d.suspended_adv);
				delete u.d.suspended_adv;
				return true;
			}else{
				return false;
			};
		},
		insert_adv:function(d){//d=[id/dom]
			var u=_XYU_;
			if(typeof(d)=="string"){
				d=document.getElementById(d);
			};
			if(!d){
				console.log("insert_adv:container error!");
				return false;
			};
			if(u.d.hasOwnProperty("insert_adv")){
				u.d.insert_adv.innerHTML="";
			};
			u.d.insert_adv=d;
			u.d.insert_adv.innerHTML="";
			var s=document.createElement("script");
			s.type="text/javascript";
			s.setAttribute("smua","d=m&s=b&u="+u.i.channel.s+"&h=20:5");
			s.src="//www.smucdn.com/smu/o.js";
			u.d.insert_adv.appendChild(s);
		},
		insert_adv_close:function(){
			var u=_XYU_;
			if(u.d.hasOwnProperty("insert_adv")){
				u.d.insert_adv.innerHTML="";
				delete u.d.insert_adv;
				return true;
			}else{
				return false;
			};
		},
		//退出游戏时调用的方法
		signOut:function(c){
			var u=_XYU_;
			u.d.signOut={};
			if(typeof(c)=="function"){
				u.d.signOut.callback=c;
			};
			//外蒙层
			u.d.signOut.cover=document.createElement("div");
			u.d.signOut.cover.id="inScreenAd"
			u.d.signOut.cover.style.cssText="position:fixed;z-index:102;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:block;";
			document.body.appendChild(u.d.signOut.cover);
			//广告我模块
			u.d.signOut.adv=document.createElement("div");
			u.d.signOut.adv.id="signId"
			u.d.signOut.adv.style.cssText="position:fixed;z-index:102;top:50%;left:7%;width:85%;height:300px;margin:-150px 0 0 0;background:#fff;border-radius:1.5%;padding:3px;padding-bottom: 40px;";
			document.body.appendChild(u.d.signOut.adv);
			//退出提示语
			u.d.signOut.tips=document.createElement("div");
			u.d.signOut.tips.id="tips"
			u.d.signOut.tips.style.cssText="position:fixed;z-index:103;top:52%;left:7%;width:85%;height:20px;margin:-150px 0 0 0;background:rgba(255,255,255,0);border-radius:3%;padding:3px;line-height:20px;display:flex;justify-content: center;";
			u.d.signOut.tips.innerHTML="<img src=\"https://www.wjxcdn.com/xy_union/img2.0/signout.png\" style=\"display:block;width:20px;height:19px;margin-right:9px;\"/><span style='display:inline-block;font-weight:400;font-size:16px;'>确认退出游戏吗？</span>"
			document.body.appendChild(u.d.signOut.tips);
			//按钮
			u.d.signOut.btns=document.createElement("div");
			u.d.signOut.btns.id="btns"
			u.d.signOut.btns.style.cssText="position:fixed;z-index:103;top:94%;left:10%;width:80%;height:55px;margin:-150px 0 0 0;background:#fff;border-radius:5%;padding:3px;display:flex;justify-content: space-around;";
			window.setTimeout(function(){
				// if(window.screen.width >= 393){
				// 	document.getElementById("btns").style.top="93%"
				// }
			},50)
			document.body.appendChild(u.d.signOut.btns);
			//取消按钮
			u.d.signOut.canlebtn=document.createElement("div");
			u.d.signOut.canlebtn.id="canlebtn"
			u.d.signOut.canlebtn.innerHTML="取消"
			u.d.signOut.canlebtn.style.cssText="width:120px;height:37px;border:2px solid rgba(255,198,0,1);border-radius:19px;text-align:center;line-height:40px;color:#333;font-size:14px;font-weight:bold;";
			u.d.signOut.btns.appendChild(u.d.signOut.canlebtn);
			u.d.signOut.canlebtn.onclick=(function(){
                u.d.signOut.cover.parentNode.removeChild(u.d.signOut.cover);
                u.d.signOut.adv.parentNode.removeChild(u.d.signOut.adv);
				u.d.signOut.tips.parentNode.removeChild(u.d.signOut.tips);
				u.d.signOut.btns.parentNode.removeChild(u.d.signOut.btns);
				clearInterval(signTimer)
			})
			//确定按钮
			u.d.signOut.surebtn=document.createElement("div");
			u.d.signOut.surebtn.id="surebtn"
			u.d.signOut.surebtn.innerHTML="<a style='display:inline-block;width:100%;height:100%;color: #000;text-decoration: none;-webkit-tap-highlight-color:rgba(0,0,0,0);' href=\""+u.i.index+"?"+u.i.channel.w+"\">是的，不玩啦</a>"
			u.d.signOut.surebtn.style.cssText="width:120px;height:37px;border:2px solid rgba(203,203,203,1);border-radius:19px;text-align:center;line-height:40px;color:#333;font-size:14px;font-weight:bold;";
			u.d.signOut.btns.appendChild(u.d.signOut.surebtn);
			u.d.signOut.surebtn.onclick=(function(){
                u.d.signOut.cover.parentNode.removeChild(u.d.signOut.cover);
                u.d.signOut.adv.parentNode.removeChild(u.d.signOut.adv);
				u.d.signOut.tips.parentNode.removeChild(u.d.signOut.tips);
				u.d.signOut.btns.parentNode.removeChild(u.d.signOut.btns);
				clearInterval(signTimer);
            })
			//插入广告
			var s=document.createElement("script");
			s.type="text/javascript";
			s.setAttribute("smua","d=m&s=b&u="+u.i.channel.b+"&h=300");
			s.src="//www.smucdn.com/smu/o.js";
			u.d.signOut.adv.appendChild(s);
			// 5秒加载广告
			var signTimer = window.setInterval(function(){
				document.body.removeChild(signId)
				if(true){
					u.d.signOut.adv=document.createElement("div");
					u.d.signOut.adv.id="signId"
					u.d.signOut.adv.style.cssText="position:fixed;z-index:102;top:50%;left:7%;width:85%;height:300px;margin:-150px 0 0 0;background:#fff;border-radius:1.5%;padding:3px;padding-bottom: 40px;";
					document.body.appendChild(u.d.signOut.adv);
					var s=document.createElement("script");
					s.type="text/javascript";
					s.setAttribute("smua","d=m&s=b&u="+u.i.channel.b+"&h=300");
					s.src="//www.smucdn.com/smu/o.js";
					u.d.signOut.adv.appendChild(s);
				}
				_XYU_.f.matchMed();
			},60000)
			_XYU_.f.matchMed();
			// var xhr = new XMLHttpRequest ( ) ;
			// 	xhr.onreadystatechange=function(){
			// 		if(xhr.readyState===4){//请求成功
			// 			if(xhr.status===200){//响应成功
			// 				console.log("成功了！")		
			// 			}}}
			// 	xhr.open('post',baseUrl+'/api/sendLog',true);
			// 	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			// 	xhr.send('log_type=8'); 
		},
		insert_screen:function(c){
			var u=_XYU_;
			// if(u.d.hasOwnProperty("insert_screen")){
			// 	console.log("insert_screen:already exist!");
			// 	return false;
			// };
			u.d.insert_screen={};
			if(typeof(c)=="function"){
				u.d.insert_screen.callback=c;
			};
			//外蒙层
			u.d.insert_screen.cover=document.createElement("div");
			u.d.insert_screen.cover.id="inScreenAd"
			u.d.insert_screen.cover.style.cssText="position:fixed;z-index:100;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:block;";
			document.body.appendChild(u.d.insert_screen.cover);
			//广告我模块
			u.d.insert_screen.adv=document.createElement("div");
			u.d.insert_screen.adv.id="slideId"
			u.d.insert_screen.adv.style.cssText="position:fixed;z-index:100;top:50%;left:2%;width:94%;height:320px;margin:-150px 0 0 0;background:#fff;border-radius:3%;padding:3px;";
			// u.d.insert_screen.txt=document.createElement("div");
			// u.d.insert_screen.txt.id="txt"
			// u.d.insert_screen.txt.innerHTML="<div style='position:fixed;z-index:-1;top:50%;left:26%;color:#000;font-size:20px;'>正在加载...请稍后！</div>"
			// u.d.insert_screen.adv.appendChild(u.d.insert_screen.txt)
			document.body.appendChild(u.d.insert_screen.adv);
			//关闭键
			u.d.insert_screen.close=document.createElement("div");
			u.d.insert_screen.close.style.cssText="position:fixed;z-index:100;top:46%;right:3%;width:6.8%;height:3.7%;margin:-160px 0 0 0;border-radius:50%;";
			u.d.insert_screen.pic=document.createElement("img");
			u.d.insert_screen.pic.setAttribute('src','https://www.wjxcdn.com/xy_union/img2.0/close.png')
			u.d.insert_screen.pic.style.cssText="width:100%;"
			u.d.insert_screen.close.appendChild(u.d.insert_screen.pic);

			u.d.insert_screen.close.onclick=(function(){
                u.d.insert_screen.cover.parentNode.removeChild(u.d.insert_screen.cover);
                u.d.insert_screen.adv.parentNode.removeChild(u.d.insert_screen.adv);
				u.d.insert_screen.close.parentNode.removeChild(u.d.insert_screen.close);
				clearInterval(insertTimer)
            })
			document.body.appendChild(u.d.insert_screen.close);
			//插入广告
			var s=document.createElement("script");
			s.type="text/javascript";
			s.setAttribute("smua","d=m&s=b&u="+u.i.channel.b+"&h=300");
			s.src="//www.smucdn.com/smu/o.js";
			u.d.insert_screen.adv.appendChild(s);
			//5秒加载广告
			var insertTimer = window.setInterval(function(){
				console.log("1")
				document.body.removeChild(slideId)
				if(true){
					console.log("2")
					u.d.insert_screen.adv=document.createElement("div");
					u.d.insert_screen.adv.id="slideId"
					u.d.insert_screen.adv.style.cssText="position:fixed;z-index:100;top:50%;left:2%;width:94%;height:320px;margin:-150px 0 0 0;background:#fff;border-radius:3%;padding:3px;";
					// u.d.insert_screen.txt=document.createElement("div");
					// u.d.insert_screen.txt.id="txt"
					// u.d.insert_screen.txt.innerHTML="<div style='position:fixed;z-index:-1;top:50%;left:26%;color:#000;font-size:20px;'>正在加载...请稍后！</div>"
					// u.d.insert_screen.adv.appendChild(u.d.insert_screen.txt)
					document.body.appendChild(u.d.insert_screen.adv);
					var s=document.createElement("script");
					s.type="text/javascript";
					s.setAttribute("smua","d=m&s=b&u="+u.i.channel.b+"&h=300");
					s.src="//www.smucdn.com/smu/o.js";
					u.d.insert_screen.adv.appendChild(s);
				}
			},60000) 
		},
		//引导点击广告
		guide_adv:function(){
			var u=_XYU_;
			// if(u.d.hasOwnProperty("guide_adv")){
			// 	console.log("guide_adv:already exist!");
			// 	return false;
			// };
			u.d.guide_adv={};
			if(typeof(c)=="function"){
				u.d.guide_adv.callback=c;
			};
			//外蒙层
			u.d.guide_adv.cover=document.createElement("div");
			u.d.guide_adv.cover.id="guide"
			u.d.guide_adv.cover.style.cssText="position:fixed;z-index:107;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:block;";
			document.body.appendChild(u.d.guide_adv.cover);
			//广告我模块
			u.d.guide_adv.adv=document.createElement("div");
			u.d.guide_adv.adv.id="guideId"
			u.d.guide_adv.adv.style.cssText="position:fixed;z-index:107;top:40%;left:2%;width:94%;height:320px;margin:-150px 0 0 0;background:#fff;border-radius:3%;padding:3px;";
			document.body.appendChild(u.d.guide_adv.adv);
			//插入文案
			u.d.guide_adv.tips=document.createElement("div");
			u.d.guide_adv.tips.id="up"
			u.d.guide_adv.tips.style.cssText="position:fixed;z-index:107;top:72%;left:28%;width:90%;height:32px;font:17px/2 Arial;color:#fff;text-align:left;";
			u.d.guide_adv.tips.innerHTML="<span>点击广告解锁游戏<span>";
			document.body.appendChild(u.d.guide_adv.tips);
			u.d.guide_adv.pic=document.createElement("img");
			u.d.guide_adv.pic.setAttribute('src','https://www.wjxcdn.com/xy_union/img2.0/手.gif')
			u.d.guide_adv.pic.style.cssText="height:20px;float:left;margin-top:5px;margin-right:9px;"
			u.d.guide_adv.tips.appendChild(u.d.guide_adv.pic);
			//插入广告
			var s=document.createElement("script");
			s.type="text/javascript";
			s.setAttribute("smua","d=m&s=b&u="+u.i.channel.b+"&h=300");
			s.src="//www.smucdn.com/smu/o.js";
			u.d.guide_adv.adv.appendChild(s);
		},
		guide_adv_close:function(){
			var u=_XYU_;
			if(u.d.hasOwnProperty("guide_adv")){
				document.getElementById("guide").style.display="none"
				document.getElementById("guideId").style.display="none"
				document.getElementById("up").style.display="none"
				document.getElementById("outId").style.display="none"
				return true;
			}else{
				return false;
			};
		},
		cover_adv:function(c){//c=function
			var u=_XYU_;
			if(u.d.hasOwnProperty("cover_adv")){
				console.log("cover_adv:already exist!");
				return false;
			};
			if(window.hasOwnProperty("starNative")&&window.hasOwnProperty("starNativeRewardedVideoAd")){
					window.starNativeRewardedVideoAd.open();
					if(typeof(c)=="function"){
						c();
					};
					return false;
			} 
				u.d.cover_adv={};
				if(typeof(c)=="function"){
					u.d.cover_adv.callback=c;
				};
				u.d.cover_adv.cover=document.createElement("div");
				u.d.cover_adv.cover.style.cssText="position:fixed;z-index:101;top:0;left:0;width:100%;height:100%;background:#fff;";
				document.body.appendChild(u.d.cover_adv.cover);
				u.d.cover_adv.second=30;
				var url = window.location.href;
				var Bind = u.i.channel.xyu
				console.log("redsff",u.i.channel.xyu)
				u.d.cover_adv.time=document.createElement("div");
				u.d.cover_adv.time.id="adTime"
				u.d.cover_adv.time.style.cssText="position:fixed;z-index:101;top:5%;left:5%;width:90%;height:32px;font:16px/2 PingFangSC-Regular,PingFang SC;color:#000;text-align:left;";
				u.d.cover_adv.time.innerHTML="广告 (<span>"+u.d.cover_adv.second+"</span>) 秒后自动关闭";
				document.body.appendChild(u.d.cover_adv.time);
				u.d.cover_adv.tips=document.createElement("div");
				u.d.cover_adv.tips.id="adTips"
				u.d.cover_adv.tips.style.cssText="position:fixed;z-index:101;top:78%;left:20%;width:90%;height:32px;font:17px/2 Arial;color:#000;text-align:left;";
				u.d.cover_adv.tips.innerHTML="<span>遇到喜欢的广告就点吧!<span>";
				document.body.appendChild(u.d.cover_adv.tips);
				u.d.cover_adv.pic=document.createElement("img");
				u.d.cover_adv.pic.setAttribute('src','https://www.wjxcdn.com/xy_union/img2.0/手.gif')
				u.d.cover_adv.pic.style.cssText="height:20px;float:left;margin-top:5px;margin-right:9px;"
				u.d.cover_adv.tips.appendChild(u.d.cover_adv.pic);
				u.d.cover_adv.timec=document.createElement("div");
				u.d.cover_adv.timec.id="timec"
				u.d.cover_adv.timec.style.cssText="position:fixed;z-index:101;right:0;bottom:5%;width:50%;height:48px;border:solid #E0E0E0;border-width:1px 0 1px 1px;font:18px/2.7 Arial;color:#000;text-align:center;";
				// u.d.cover_adv.timec.style.cssText="position:fixed;z-index:101;right:0;bottom:5%;width:50%;height:48px;border:solid #E0E0E0;border-width:1px 0 1px 1px;font:18px/2.7 Arial;color:#000;text-align:center;";
				u.d.cover_adv.timec.innerHTML="(<span>"+(Bind=='20030'?u.d.cover_adv.second-28:u.d.cover_adv.second-15)+"</span>) 秒后可跳过广告";
				document.body.appendChild(u.d.cover_adv.timec);
				u.d.cover_adv.adv=document.createElement("div");
				u.d.cover_adv.adv.style.cssText="position:fixed;z-index:101;top:50%;left:2%;width:94%;height:310px;margin:-150px 0 0 0;border:1px solid #D9D9D9;border-radius:10px;padding:3px;";
				document.body.appendChild(u.d.cover_adv.adv);
				u.d.cover_adv.adv.className="_xccq1c3vse";
				var s=document.createElement("script");
				s.type="text/javascript";
				s.innerHTML="(window.slotbydup = window.slotbydup || []).push({id: \"u6658271\",container: \"_xccq1c3vse\",async: true});";
				u.d.cover_adv.adv.appendChild(s);
				// 5秒加载广告
				u.d.cover_adv.adv.id="ad"
				var timer = window.setInterval(function(){
					document.body.removeChild(ad)
					if(true){
						u.d.cover_adv.adv=document.createElement("div");
						u.d.cover_adv.adv.id="ad"
						u.d.cover_adv.adv.className="_xccq1c3vse";
						u.d.cover_adv.adv.style.cssText="position:fixed;z-index:101;top:50%;left:2%;width:94%;height:310px;margin:-150px 0 0 0;background:#fff;border:1px solid #D9D9D9;border-radius:10px;padding:3px;";
						document.body.appendChild(u.d.cover_adv.adv);
						var s=document.createElement("script");
						s.type="text/javascript";
						s.innerHTML="(window.slotbydup = window.slotbydup || []).push({id: \"u6658271\",container: \"_xccq1c3vse\",async: true});";
						u.d.cover_adv.adv.appendChild(s);
					}
				},60000)
				u.d.cover_adv.dispose=function(){
					u.d.cover_adv.time.firstElementChild.innerHTML=--u.d.cover_adv.second;
					if(u.d.cover_adv.second<1){
						u.d.cover_adv.close();
					}else if(Bind=='20030'?u.d.cover_adv.second<28:u.d.cover_adv.second<15){
						if(!u.d.cover_adv.hasOwnProperty("close")){
							u.d.cover_adv.close=function(){
								clearInterval(u.d.cover_adv.timer);
								clearInterval(timer);
								u.d.cover_adv.adv.parentNode.removeChild(u.d.cover_adv.adv);
								u.d.cover_adv.time.parentNode.removeChild(u.d.cover_adv.time);
								u.d.cover_adv.timec.parentNode.removeChild(u.d.cover_adv.timec);
								u.d.cover_adv.cover.parentNode.removeChild(u.d.cover_adv.cover);
								u.d.cover_adv.tips.parentNode.removeChild(u.d.cover_adv.tips);
								if(u.d.cover_adv.hasOwnProperty("callback")){
									u.d.cover_adv.callback();
								};
								delete u.d.cover_adv;
							};
							u.d.cover_adv.timec.style.cssText="position:fixed;z-index:101;right:0;bottom:5%;width:33%;height:48px;border:solid #E0E0E0;border-width:1px 0 1px 1px;font:18px/2.7 Arial;color:#000;text-align:center;";
							u.d.cover_adv.timec.innerHTML="跳过广告<span style=\"display:inline-block;margin: 0 0 0 10px;width:0;height:0;border:9px solid #fff;border-left:12px solid #000;border-right:0;vertical-align:middle;\"></span><span style=\"display:inline-block;width:0;height:18px;border-left:3px solid #000;vertical-align:middle;\">";
							u.d.cover_adv.timec.onclick=function(){
								u.d.cover_adv.close();
							};
						};
					}else{
						u.d.cover_adv.timec.firstElementChild.innerHTML=Bind=='20030'?u.d.cover_adv.second-28:u.d.cover_adv.second-15;
					};
					_XYU_.f.matchMed();
				};
				_XYU_.f.matchMed();
				u.d.cover_adv.timer=setInterval(function(){
					u.d.cover_adv.dispose();
				},1000);
		},
		// 判断运行环境
		Ag: function() {
			if(navigator.userAgent.toLowerCase().indexOf("gionee")<0&&!window.hasOwnProperty("starNative")){
				var ce="a"+("ActiveXObject" in window?1:0)+"c"+("chrome" in window?1:0)+"e"+(navigator.cookieEnabled?1:0)+"t"+(navigator.maxTouchPoints==undefined?"u":navigator.maxTouchPoints)+"_s(w"+screen.width+"h"+screen.height+")a(w"+screen.availWidth+"h"+screen.availHeight+")p(x"+(window.screenX||window.screenLeft)+"y"+(window.screenY||window.screenTop)+")b(w"+document.body.clientWidth+"h"+document.body.clientHeight+")d(w"+document.documentElement.clientWidth+"h"+document.documentElement.clientHeight+")";
				_XYU_.f.l("https://counterlog.xingchenjia.com/log?log_id=13&data="+encodeURIComponent(location.href+"***"+document.referrer)+"***"+ce);
			};
		},
		// 横屏广告样式
		matchMed: function() {
			if (window.matchMedia("(max-width: 600px)").matches) {
				/* 窗口小于或等于 600 像素 */
				$('#signId').css({ 'left': '5%','width': '88%', 'height' : '330px','top': '44%','border-radius': '1.5%'});
				$('#tips').css({ 'display': 'none' })
				$('#btns').css({
					'left': '10%',
					'top': '93%',
					'border-radius': '1.5%',
					'width': '80%',
					'height': '40px',
					'flex-direction': 'row',
					'justify-content': 'space-around',
					'padding-left': '3px',
				})
				$('#canlebtn').css({
					'width':'120px',
					'margin-top':'0'
				})
				$('#surebtn').css({
					'width':'120px',
					'margin-top':'0'
				})
				// 激励广告
				$('#adTime').css({ 'top': '5%' })
				$('#adTips').css({ 'display': 'block' })
				$('#ad').css({ 
					'top': '50%',
					'width': '94%',
					'left': '2%',
					'height': '310px',
					'border': '1px solid rgb(217, 217, 217)'
				})
				$('#timec').css({
					'bottom':'5%',
					'border':'1px solid rgb(224, 224, 224)'
				})
			} else {
				/*窗口大于 600 像素 */
				$('#signId').css({ 'left': '13%','width': '49%', 'height' : '270px','top': '49%','border-radius': '0',});
				$('#tips').css({ 'display': 'none' })
				$('#btns').css({
					'left': '62%',
					'border-radius': '0',
					'top': '49%',
					'width': '18%',
					'flex-direction': 'column',
					'height': '307px',
					'padding-left': '5%',
					'justify-content': 'center'
				})
				$('#canlebtn').css({
					'width':'100px',
					'margin-top':'10%'
				})
				$('#surebtn').css({
					'width':'100px',
					'margin-top':'40%'
				})
				// 激励广告
				$('#adTime').css({ 'top': '0' })
				$('#adTips').css({ 'display': 'block' })
				$('#ad').css({ 
					'top': '60%',
					'width': '45%',
					'left': '0',
					'height': '210px',
					'border':'none'
				})
				$('#timec').css({
					'bottom':'88%',
					'border':'none'
				})
			}
		}
	}
};

//手机横屏样式
window.onresize = function(){
	_XYU_.f.matchMed();
}
_XYU_.f.check();

function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);};};
function completed(){if(document.addEventListener||window.event.type=="load"||document.readyState=="complete"){detach();_XYU_.f.init();};};
if(document.readyState=="complete"||(document.readyState!="loading"&&!document.documentElement.doScroll)){window.setTimeout(_XYU_.f.init);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed );}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);};

}());