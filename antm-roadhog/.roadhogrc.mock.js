var username_test = '13999260121',
	password_test = '123456',
	accountToken_test = 'testDemoUser';

export default {
	'POST /api/create_user' : (req, res) => {
		const { username } = req.body;
		if( username == username_test ){
			res.json({status: 'success', msg: '', data: { accountToken: accountToken_test, phone: username_test, nikeName: '测试账号' }});
		}
		else{
			res.json({status: 'error', msg: '该账户已注册', data: { }});
		}
	},
  	'POST /api/users': (req, res) => {
  		const { username, password } = req.body;
  		if(username == username_test && password == password_test){
  			res.json({status: 'success', msg: '', data: { accountToken: accountToken_test, phone: username_test, nikeName: '测试账号' }});
  		}
  		else{
  			res.json({status: 'error', msg: '账户密码错误', data: { }});
  		}
  	},
  	'POST /api/user_check': (req, res) => {
  		const { token } = req.body;
  		if(token == "testDemoUser"){
  			res.json({status: 'success', msg: '', data: { accountToken: accountToken_test, phone: username_test, nikeName: '测试账号' }});
  		}
  		else{
  			res.json({status: 'error', msg: 'token失效', data: { }});
  		}
  	},
	'POST /api/page': (req, res) => {
		let page = req.body.page;
		let pageData = {};
		if(page == 'Index' || typeof page == 'undefined'){
			pageData = {
				CarouselData : ['https://pic.solux.cn/image/70/f2/a5/7b46c9f5de27cd2c2319e04eb9.jpg','https://pic.solux.cn/image/8b/c6/e9/9bcd54d471187389f3b661d764.jpg','https://pic.solux.cn/image/82/a3/8f/f82e5937d5c63e9dbb7f5e1a00.jpg','https://pic.solux.cn/image/1f/6b/d2/ad0e8c6d124ba83d866612ea7c.png'],
				TabList: [
					{
						TabTitleMain: '家装精品',
						TabTitle: '卫浴·橱柜·家具·设计',
						TabMain: 'http://pic.solux.cn/image/cf/ae/0a/bda633eb9412991dff96f235c4.jpg',
						TabChildList: [
							'http://pic.solux.cn/image/3c/19/1d/6f2aab6cc41e0994c42e380d78.jpg',
							'http://pic.solux.cn/image/7f/c3/ef/4f559841447b5959770380b749.jpg',
						],
					},
					{
						TabTitleMain: '生活好物',
						TabTitle: '餐厨·洗护·居家·收纳·松霖推荐',
						TabMain: 'http://pic.solux.cn/image/14/27/99/31eb27418e10b721a6f256b768.jpg',
						TabChildList: [
							'http://pic.solux.cn/image/88/b2/35/48a960aebeb2e3642e866e107a.jpg',
							'http://pic.solux.cn/image/85/25/1d/37b6b6f6a59f36d426e481a49a.jpg',
						],
					}
				]
			}
		}
		res.json({status: 'success', pageData: pageData});
	},
	'POST /api/category': (req, res) => {
		let categoryData = {};
		categoryData = {
			categoryList: [
				{
					'categoryname': '新品',
					'categoryid': '1',
				},{
					'categoryname': '手机',
					'categoryid': '2',
				},{
					'categoryname': '电视',
					'categoryid': '3',
				},{
					'categoryname': '电脑',
					'categoryid': '4',
				},{
					'categoryname': '家电',
					'categoryid': '5',
				},{
					'categoryname': '路由',
					'categoryid': '6',
				},{
					'categoryname': '智能',
					'categoryid': '7',
				},{
					'categoryname': '儿童',
					'categoryid': '8',
				},{
					'categoryname': '电源',
					'categoryid': '9',
				},{
					'categoryname': '耳机',
					'categoryid': '10',
				},{
					'categoryname': '音箱',
					'categoryid': '11',
				},{
					'categoryname': '礼品',
					'categoryid': '12',
				}
				,{
					'categoryname': '生活',
					'categoryid': '13',
				},{
					'categoryname': '服务',
					'categoryid': '14',
				}
			]
		};
		res.json({status: 'success', categoryData: categoryData});
	},
	'POST /api/get_recommend': (req, res) => {
		let recom_list = [{
				"action": {
					"type": "product",
					"path": "7359",
					"log_code": "recom_list_0-1#eid=force_15:0:0:0:0:0:0:0:0:7359&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7359",
					"recommend_code": "recom_list_0-1#eid=force_15:0:0:0:0:0:0:0:0:7359&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7359"
				},
				"image_url": "//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp",
				"is_multi_price": false,
				"market_price": "1299",
				"name": "红米5 Plus 64GB",
				"price": "1269",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，直降30元」</font>全面屏 / 4000mAh大电量 / 前置柔光自拍 / 14nm骁龙八核处理器",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "4795",
					"log_code": "recom_list_0-2#eid=force_15:0:0:0:0:0:0:0:0:4795&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=4795",
					"recommend_code": "recom_list_0-2#eid=force_15:0:0:0:0:0:0:0:0:4795&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=4795"
				},
				"image_url": "//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c.webp",
				"is_multi_price": false,
				"market_price": "599",
				"name": "红米4A ",
				"price": "499",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节，回馈米粉限时钜惠，直降100元」</font> 5英寸，舒适手感 / 3120mAh 大电池 / 1300万像素相机 /  最高可扩展至 128GB ",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "7147",
					"log_code": "recom_list_0-3#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7147",
					"recommend_code": "recom_list_0-3#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7147"
				},
				"image_url": "//i8.mifile.cn/v1/a1/a09eac36-c1e1-e8b0-5ef7-b5c7e2c2009b.webp",
				"is_multi_price": false,
				"market_price": "2299",
				"name": "小米6 新版本",
				"price": "2099",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，下单限量赠御泥坊面膜」</font>骁龙835 旗舰处理器 / 变焦双摄，4 轴防抖 / 5.15\" 护眼屏 / 四曲面玻璃机身",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "5782",
					"log_code": "recom_list_0-4#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5782",
					"recommend_code": "recom_list_0-4#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5782"
				},
				"image_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b5c473ac1f550495beb76a58172c37d1.jpg",
				"is_multi_price": false,
				"market_price": "1299",
				"name": "红米Note 4X 浅蓝色",
				"price": "1299",
				"product_desc": "5.5\"金属机身 / 4100mAh 超长续航 / 骁龙 625处理器",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "7244",
					"log_code": "recom_list_0-5#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7244",
					"recommend_code": "recom_list_0-5#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7244"
				},
				"image_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/806866db7cfac7efdb561e9d796b4a33.jpg",
				"is_multi_price": false,
				"market_price": "9.9",
				"name": "米兔指尖积木",
				"price": "9.9",
				"product_desc": "无限翻转 / 简约外观 / 精致便携",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "5781",
					"log_code": "recom_list_0-6#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5781",
					"recommend_code": "recom_list_0-6#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5781"
				},
				"image_url": "//i8.mifile.cn/v1/a1/d0b480c7-1965-a94e-06c3-07b3ad5548bf.webp",
				"is_multi_price": false,
				"market_price": "1999",
				"name": "小米Max 2 128GB",
				"price": "1799",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，下单限量赠御泥坊面膜」</font>6.44''大屏 / 5300mAh 充电宝级的大电量 / 大像素相机 / 轻薄全金属 / ​4GB 大内存 / 骁龙八核处理器",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "5780",
					"log_code": "recom_list_0-7#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5780",
					"recommend_code": "recom_list_0-7#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5780"
				},
				"image_url": "//i8.mifile.cn/v1/a1/4db2d2d1-9200-5ad6-013b-997c8ab5253e.webp",
				"is_multi_price": false,
				"market_price": "1699",
				"name": "小米Max 2 64GB",
				"price": "1499",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，下单限量赠御泥坊面膜」</font>6.44''大屏 / 5300mAh 充电宝级的大电量 / 大像素相机 / 轻薄全金属  / ​4GB 大内存 / 骁龙八核处理器",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6704",
					"log_code": "recom_list_0-8#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6704",
					"recommend_code": "recom_list_0-8#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6704"
				},
				"image_url": "//i8.mifile.cn/v1/a1/2daed8c9-5c8b-6565-72a4-16f467e6cdc6.webp",
				"is_multi_price": true,
				"market_price": "2599",
				"name": "小米Note 3 128GB",
				"price": "2399",
				"product_desc": "1600万美颜自拍 / 2倍变焦双摄，四轴光学防抖 / 5.5\"护眼屏 / 超轻四曲面，7系铝金属边框。",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6997",
					"log_code": "recom_list_0-9#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6997",
					"recommend_code": "recom_list_0-9#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6997"
				},
				"image_url": "//i8.mifile.cn/v1/a1/a541e5be-dc5d-d374-c707-4dcbc400f5df.webp",
				"is_multi_price": false,
				"market_price": "129",
				"name": "小米双层抓绒夹克 男款",
				"price": "129",
				"product_desc": "长效抗静电 / 双层贴合抓绒 / 动态保暖",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6783",
					"log_code": "recom_list_0-10#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6783",
					"recommend_code": "recom_list_0-10#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6783"
				},
				"image_url": "//i8.mifile.cn/v1/a1/c0de124b-305d-1149-50ef-a49c02877d7b.webp",
				"is_multi_price": false,
				"market_price": "5599",
				"name": "15.6\"笔记本i5 8GB",
				"price": "5599",
				"product_desc": "NVIDIA MX150 2G独显/第八代i5处理器【温馨提示：请在系统激活后6个月内完成Office激活，逾期将无法使用】",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6625",
					"log_code": "recom_list_0-11#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6625",
					"recommend_code": "recom_list_0-11#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6625"
				},
				"image_url": "//i8.mifile.cn/v1/a1/bd7b0c0e-e329-dd46-a664-6bec31d685f6.webp",
				"is_multi_price": false,
				"market_price": "1399",
				"name": "小米Max 2 32GB",
				"price": "1399",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，下单限量赠御泥坊面膜」</font>6.44''大屏 / 5300mAh 充电宝级的大电量 / 大像素相机 / 轻薄全金属  / ​4GB 大内存 / 骁龙八核处理器",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "7695",
					"log_code": "recom_list_0-12#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7695",
					"recommend_code": "recom_list_0-12#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7695"
				},
				"image_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dbba6838f2ef6e8f32cfb0e39b930cc2.jpg",
				"is_multi_price": false,
				"market_price": "599",
				"name": "MADV Mini 全景相机",
				"price": "599",
				"product_desc": "1300万镜头 / 360°全景拍摄 / 一键分享 / 全景直播",
				"product_tag": "//i8.mifile.cn/v1/a1/289039eb-c3ed-7c26-69c3-5b07b72a797d.webp?w=120&h=48"
			}, {
				"action": {
					"type": "product",
					"path": "7714",
					"log_code": "recom_list_0-13#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7714",
					"recommend_code": "recom_list_0-13#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7714"
				},
				"image_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ead828c6fe4487f2f2926ed5b3f8c644.jpg",
				"is_multi_price": false,
				"market_price": "19.9",
				"name": "小米USB-C数据线 编织线版 100cm",
				"price": "19.9",
				"product_desc": "高强度纤维编织线体 / 一体化接口设计 / 结实耐用",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "5892",
					"log_code": "recom_list_0-14#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5892",
					"recommend_code": "recom_list_0-14#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5892"
				},
				"image_url": "//i8.mifile.cn/v1/a1/fc42f947-2c35-6a73-3805-63fd4c18e9cc.webp",
				"is_multi_price": false,
				"market_price": "9999",
				"name": "小米电视4 65英寸",
				"price": "9999",
				"product_desc": "<font color='#ff4a00'>【享小米分期3期免息】</font>4.9mm 极超薄机身 / 无边框式设计 / 3GB+32GB超大内存",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "7154",
					"log_code": "recom_list_0-15#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7154",
					"recommend_code": "recom_list_0-15#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7154"
				},
				"image_url": "//i8.mifile.cn/v1/a1/789e99e4-2355-1cbc-746e-f4d6478f8ed2.webp",
				"is_multi_price": false,
				"market_price": "4699",
				"name": "MIX 2 全陶瓷尊享版",
				"price": "4299",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：特惠400元，女神更享专属福利，下单限量赠御泥坊面膜」</font>搭载骁龙835旗舰处理器，8GB大内存，采用4轴光学防抖大像素相机，5.99\"大屏，正面几乎全是屏幕。被全球著名博物馆收藏，荣获 2018 iF设计奖。",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6782",
					"log_code": "recom_list_0-16#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6782",
					"recommend_code": "recom_list_0-16#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6782"
				},
				"image_url": "//i8.mifile.cn/v1/a1/82488d9e-b7ec-c845-e9d7-4e03f5c5e272.webp",
				"is_multi_price": false,
				"market_price": "6399",
				"name": "15.6\"笔记本i7 8GB",
				"price": "6199",
				"product_desc": "NVIDIA MX150 2G独显/第八代i7处理器【温馨提示：请在系统激活后6个月内完成Office激活，逾期将无法使用】",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6781",
					"log_code": "recom_list_0-17#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6781",
					"recommend_code": "recom_list_0-17#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6781"
				},
				"image_url": "//i8.mifile.cn/v1/a1/71a40922-389b-70fd-375c-2e409df60338.webp",
				"is_multi_price": false,
				"market_price": "6999",
				"name": "15.6\"笔记本i7 16GB",
				"price": "6999",
				"product_desc": "<font color='#ff4a00'>【小米女神节！I7 16G版本 买赠VGA转接器，赠完为止】</font>NVIDIA MX150 2G独显/第八代i7处理器【温馨提示：请在系统激活后6个月内完成Office激活，逾期将无法使用】",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "6699",
					"log_code": "recom_list_0-18#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6699",
					"recommend_code": "recom_list_0-18#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=6699"
				},
				"image_url": "//i8.mifile.cn/v1/a1/010cd93e-3d15-979b-ff69-14f6e29931ec.webp",
				"is_multi_price": false,
				"market_price": "3599",
				"name": "小米MIX 2 128GB",
				"price": "3199",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：女神享专属福利，下单限量赠御泥坊面膜」</font>全面屏2.0，5.99\"大屏 / 骁龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段。",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "7153",
					"log_code": "recom_list_0-19#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7153",
					"recommend_code": "recom_list_0-19#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=7153"
				},
				"image_url": "//i8.mifile.cn/v1/a1/7d04d143-a95c-0c1c-7c37-1ee23ae9906e.webp",
				"is_multi_price": false,
				"market_price": "4699",
				"name": "小米MIX 2 全陶瓷尊享版",
				"price": "4299",
				"product_desc": "<font color='#ff4a00'>「3.7~3.9女神节：特惠400元，女神更享专属福利，下单限量赠御泥坊面膜」</font>搭载骁龙835旗舰处理器，8GB大内存，采用4轴光学防抖大像素相机，5.99\"大屏，正面几乎全是屏幕。被全球著名博物馆收藏，荣获 2018 iF设计奖。",
				"product_tag": ""
			}, {
				"action": {
					"type": "product",
					"path": "5126",
					"log_code": "recom_list_0-20#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5126",
					"recommend_code": "recom_list_0-20#eid=15:12:0:0:0:0:0:0:0:0&tid=BlankRec-4ECCb3UVMGW2ZbNpTmsQEA==&page=list&pid=5126"
				},
				"image_url": "//i8.mifile.cn/v1/a1/38f1fa24-815b-c6a6-925f-65460ce541e4.webp",
				"is_multi_price": false,
				"market_price": "49",
				"name": "小米 USB 充电器 ",
				"price": "39",
				"product_desc": "兼容 QC 3.0 的双口充电器/  快速充电，速度很赞 / 8重品质保护使用更放心",
				"product_tag": ""
			}];
			
		res.json({status: 'success', recom_list: recom_list});
	},
	'POST /api/commodityList': (req, res) => {
		let listId = req.body.listId;
		
		let com_list = [{
			"product_id": 7574,
			"name": "小米电视4A 40英寸",
			"product_desc": "<font color='#ff4a00'>【3月16日限时特惠，抢购一天！专享小米分期3/6期免息!】</font>FHD全高清屏 / 人工智能语音系统 / 超窄边 / 海量片源 / 64位四核处理器",
			"price": "1499",
			"is_multi_price": false,
			"icon_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/210ab427a1c8b8953ca6676a272cf43d.png?w=180&h=48",
			"img_url": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fae2b26cdb8a025d83ace2a971b82d7d.jpg",
		}, {
			"product_id": 6222,
			"name": "小米电视4A 32英寸",
			"product_desc": "<font color='#ff4a00'>【“百万爆款”，小米电视4A 32英寸从开始量产到100万台交付，仅8个月时间，刷新中国电视行业记录！3月14日-3月19日专享小米分期3/6期免息！】</font>64位四核处理器 / 1GB+4GB大内存 / 高清液晶屏 / 第6代画质引擎 / 人工智能系统PatchWall / 轻至4kg",
			"price": "999",
			"is_multi_price": false,
			"icon_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0c55f13eefcb247d5a706ae91cff24c2.png?w=180&h=48",
			"img_url": "//i8.mifile.cn/v1/a1/d342ccbf-e3d6-2dcc-47a3-18656f28a0cc!360x3600.webp",
		}, {
			"product_id": 6846,
			"name": "32'' 电视4A 体育版",
			"product_desc": "<font color='#ff4a00'>【3月14日-3月18日超值特价，限时抢购，专享3/6期免息！】</font>高清液晶屏 / 第6代画质引擎 / 1GB+8GB大内存",
			"price": "1099",
			"is_multi_price": false,
			"icon_img": "",
			"img_url": "//i8.mifile.cn/v1/a1/8bbb5877-e568-1a21-682d-59962f1da6f0!360x3600.webp",
		}];
		
		res.json({status: 'success', com_list: com_list});
	},
	'POST /api/checkFoceds': (req, res) => {
		let fcode = req.body.fcode;
		let account_token = req.body.account_token;
		if(account_token == accountToken_test && fcode == '123456'){
			res.json({status: 'success', msg: 'f码使用成功'});
		}
		else{
			res.json({status: 'error', msg: 'f码使用失败'});
		}
	},
	'POST /api/productView2_new': (req, res) => {
		let productId = req.body.productId;
		
		let buy_option = [{
			"list": [{
				"is_stock": true,
				"icon_img": "",
				"name": "6GB+64GB",
				"price": "2999元",
				"prop_value_id": 480,
			},{
				"is_stock": true,
				"icon_img": "",
				"name": "6GB+128GB",
				"price": "3199元",
				"prop_value_id": 481,
			},{
				"is_stock": true,
				"icon_img": "",
				"name": "全陶瓷尊享版",
				"price": "4299元",
				"prop_value_id": 559,
			}],
			"name": "版本",
			"prop_cfg_id": 138,
		},{
			"list": [{
				"is_stock": false,
				"icon_img": "//i8.mifile.cn/b2c-mimall-media/3215be39ab4b7fe8d8492d889572d213.png",
				"name": "皓月白",
				"prop_value_id": 560
			},{
				"is_stock": false,
				"icon_img": "//i8.mifile.cn/b2c-mimall-media/bc99af80103f531296be0be09811bd7f.png",
				"name": "黑色陶瓷",
				"prop_value_id": 483
			}],
			"name": "颜色",
			"prop_cfg_id": 139,
		}];
		
		let goods_info = [{
			"buy_limit": "1",
			"image_url": "//i8.mifile.cn/v1/a1/97a8e6f0-db84-6a6c-c5a5-4014b3f1fac8!720x7200.jpg",
			"goods_id": 2173500017,
			"pd_name": "小米MIX 2 6GB+128GB 黑色陶瓷",
			"pd_market_price": "3599",
			"pd_price": "3199",
			"prop_list": [{
				"prop_cfg_id": 138,
				"prop_value_id": 481,
			},{
				"prop_cfg_id": 139,
				"prop_value_id": 483,
			}],
		},{
			"buy_limit": "5",
			"image_url": "//i8.mifile.cn/v1/a1/97a8e6f0-db84-6a6c-c5a5-4014b3f1fac8!720x7200.jpg",
			"goods_id": 1173500015,
			"pd_name": "小米MIX 2 6GB+64GB 黑色陶瓷",
			"pd_market_price": "3299",
			"pd_price": "2999",
			"prop_list": [{
				"prop_cfg_id": 138,
				"prop_value_id": 480,
			},{
				"prop_cfg_id": 139,
				"prop_value_id": 483,
			}],
		},{
			"buy_limit": "1",
			"image_url": "//i8.mifile.cn/v1/a1/bd474c32-5f78-531f-8e89-0395bf3e03d4!720x7200.jpg",
			"goods_id": 2174200041,
			"pd_name": "小米MIX 2 STARCK全陶瓷限量版 8GB+128GB 黑色",
			"pd_market_price": "4999",
			"pd_price": "4999",
			"prop_list": [{
				"prop_cfg_id": 138,
				"prop_value_id": 567,
			},{
				"prop_cfg_id": 139,
				"prop_value_id": 483,
			}],
		},{
			"buy_limit": "5",
			"image_url": "//i8.mifile.cn/v1/a1/6077dd4d-686f-9ff6-b97b-c7f6fe3ea918!720x7200.webp",
			"goods_id": 2174200042,
			"pd_name": "小米MIX 2 全陶瓷尊享版 8GB+128GB 黑色",
			"pd_market_price": "4699",
			"pd_price": "4299",
			"prop_list": [{
				"prop_cfg_id": 138,
				"prop_value_id": 559,
			},{
				"prop_cfg_id": 139,
				"prop_value_id": 483,
			}],
		},{
			"buy_limit": "5",
			"image_url": "//i8.mifile.cn/v1/a1/0ad7e46f-c035-7034-c9d9-5eefca118e80!720x7200.jpg",
			"goods_id": 2174200043,
			"pd_name": "小米MIX 2 全陶瓷尊享版 8GB+128GB 皓月白",
			"pd_market_price": "4699",
			"pd_price": "4299",
			"prop_list": [{
				"prop_cfg_id": 138,
				"prop_value_id": 559,
			},{
				"prop_cfg_id": 139,
				"prop_value_id": 560,
			}],
		}];
		
		let galleryView = ["//i8.mifile.cn/v1/a1/6ef534bb-6817-f6e2-192a-460e659819b8.webp?bg=684A46", "//i8.mifile.cn/v1/a1/2ec6acfd-6d81-0bbd-191c-830b91802564.webp?bg=E2C3B9", "//i8.mifile.cn/v1/a1/59508b3c-fdb4-70b3-1364-d2260478617c.webp?bg=3B3B42", "//i8.mifile.cn/v1/a1/ec11c5fb-df45-f78b-90a4-f6012d865830.webp?bg=EAD8D1", "//i8.mifile.cn/v1/a1/2aa2177d-6b9c-70d2-9d71-9bf5679e2eba.webp?bg=E5C5BA"];
		let titleView = {
			"canJoinActs": [{
				"title": "赠米粉卡",
				"type": "gift",
				"type_desc": "赠品"
			}],
			"pd_market_price": "3599",
			"pd_name": "小米MIX 2  全面屏2.0",
			"pd_price": "3199",
			"product_desc": "<font color='#ff4a00'>【6GB+128GB直降400元】</font>全面屏2.0，5.99\"大屏 / 骁龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段。",
			"share_content": ""
		};
		
		let descTabsView = [{
			"name": "概述",
			"tabContent": [
				"//i8.mifile.cn/v1/a1/c5f6d8bb-dbdb-901f-38fc-4cf7aea1fb86.jpg?w=1080&h=1924&s=177.7",
				"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c580424ff305584b2287c124bbae8fad.jpg?w=1080&h=1549",
				"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/24c023e2edda60d019a4a4a5ae519884.jpg?w=1080&h=1640",
				"//i8.mifile.cn/v1/a1/c056bbb1-6526-75fe-5311-26b44c48de30.jpg?w=1080&h=2108&s=165.3",
				"//i8.mifile.cn/v1/a1/784c2b86-04af-e26d-8838-5adbc1df6cac.jpg?w=1080&h=1673&s=176.3",
				"//i8.mifile.cn/v1/a1/2b1127b8-eba1-95e7-bb2b-3b4da5126b69.jpg?w=1080&h=1123&s=46.6",
				"//i8.mifile.cn/v1/a1/f68d5e02-f395-1ff7-e68d-2f2bca54bedc.jpg?w=1080&h=1924&s=66.5",
				"//i8.mifile.cn/v1/a1/e6abf914-d5bc-fe69-8e18-bc723d461e35.jpg?w=1080&h=1920&s=108.7",
				"//i8.mifile.cn/v1/a1/89f62bc7-2098-63d1-ca94-46f4daa95470.jpg?w=1080&h=1917&s=147.1",
				"//i8.mifile.cn/v1/a1/b125cb4e-5a9d-3f67-06b6-da1387c7de9e.jpg?w=1080&h=1920&s=156.2",
				"//i8.mifile.cn/v1/a1/fec73ca2-7ebc-10fe-673a-6367ac829771.jpg?w=1080&h=1920&s=105.6",
				"//i8.mifile.cn/v1/a1/ceb95a77-97cc-4778-d26c-20ed211676ec.jpg?w=1080&h=1919&s=180.9",
				"//i8.mifile.cn/v1/a1/54d1cf7e-bb31-7ded-bfee-00c6eece9db1.jpg?w=1080&h=1917&s=140.6",
				"//i8.mifile.cn/v1/a1/547e4735-3f08-4ef3-97fd-6fbf3ea2c7e0.jpg?w=1080&h=1300&s=105.7",
				"//i8.mifile.cn/v1/a1/b6e801a4-93c7-fa78-24f3-595089ac7f05.jpg?w=1080&h=2068&s=103.1",
				"//i8.mifile.cn/v1/a1/17154606-8cf5-183e-c6e7-da097b08e26b.webp?w=1080&h=1293",
			],
		},{
			"name": "参数",
			"tabContent": [
				"//i8.mifile.cn/v1/a1/dbd53e91-75eb-d9e9-0969-326a41435a34.jpg?w=1080&h=1287&s=148.5",
				"//i8.mifile.cn/v1/a1/0ba33fbe-65c9-424a-f1dc-ca219c89a224.jpg?w=1080&h=1623&s=123.5",
				"//i8.mifile.cn/v1/a1/869750dc-efd4-ae15-19cc-f83f68c491db.jpg?w=1080&h=2128&s=191.3",
				"//i8.mifile.cn/v1/a1/e7bf84bc-bbb3-bb1f-3c4e-ca8f5d3c326b.jpg?w=1080&h=657&s=44",
				"//i8.mifile.cn/v1/a1/4062698e-f975-7985-c03d-0b6e90c25f44.jpg?w=1080&h=2263&s=153.4",
				"//i8.mifile.cn/v1/a1/bc79fada-0fbc-06bf-f215-12970af204bf.jpg?w=1080&h=2763&s=147.2",
				"//i8.mifile.cn/v1/a1/e941105c-3d0f-d8e5-45f4-e5ad251e0714.jpg?w=1080&h=2651&s=133.6",
				"//i8.mifile.cn/v1/a1/94eb2c50-f496-407d-e315-0f7122a83729.jpg?w=1080&h=1556&s=128.2",
				"//i8.mifile.cn/v1/a1/870d5d71-2edf-4d23-08de-2c1dda39eb8a.jpg?w=1080&h=1014&s=144.6",
			]
		},{
			"name": "意外险",
			"tabContent": [
				"//i8.mifile.cn/v1/a1/fd83d023-0b76-b00c-353d-76fdb62d4d9f.jpg?w=1080&h=540&s=115.7",
				"//i8.mifile.cn/v1/a1/490ab746-7186-98da-7d63-78c5e97eee97.jpg?w=1080&h=587&s=122.2",
			]
		},{
			"name": "创意海报",
			"tabContent": [
				"//i8.mifile.cn/v1/a1/7b0304bb-e490-85f5-1e3a-089e51e62f16.webp?w=1080&h=715",
				"//i8.mifile.cn/v1/a1/95ac2334-d1d1-3add-1e38-0e6df02e7b57.webp?w=1080&h=785",
				"//i8.mifile.cn/v1/a1/35f74287-1359-7dfa-38c6-b9cda0c83fa8.webp?w=1080&h=718",
				"//i8.mifile.cn/v1/a1/6d5b88c3-ae29-d89f-f04c-88d7d0de4801.webp?w=1080&h=573",
				"//i8.mifile.cn/v1/a1/ba7aeacb-2c18-9b59-2838-d9cefea7b2c5.webp?w=1080&h=578",
				"//i8.mifile.cn/v1/a1/5b1f57fb-29e7-cef4-43aa-f1c802af8670.webp?w=1080&h=578",
				"//i8.mifile.cn/v1/a1/dc647c58-b269-1fc6-9867-59118ad92d7f.webp?w=1080&h=575",
				"//i8.mifile.cn/v1/a1/1b7490f4-28cb-12d4-7d0a-2bd0ac0ef125.webp?w=1080&h=577",
				"//i8.mifile.cn/v1/a1/bf99f653-7c65-f395-4d33-125629fe66e2.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/763fd241-bda0-5d15-be2d-d488aa21e0ca.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/a069c0fe-1ddc-3701-f25d-fecaa827c3b0.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/4bc1acb8-409b-e2c9-118e-57586f99d1c6.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/d331a5ec-ad8c-f362-c5c0-ab25f46ad2eb.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/7d8680a1-8851-e850-0184-c3f4b2040db2.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/df6852ee-4924-4ce1-50a8-240cdf3e1ce8.webp?w=1080&h=572",
				"//i8.mifile.cn/v1/a1/83cde7d5-b93e-0c12-89cf-b02ce357cb7e.webp?w=1080&h=574",
				"//i8.mifile.cn/v1/a1/1f02d903-5e27-b6c8-a1c2-e5fe4effa1ed.webp?w=1080&h=583",
			]
		}];
		
		res.json({
			status: 'success',
			datas: {
				default_goods_id: "2173500017",
				goods_info,
				buy_option,
				view_content: {
					galleryView,
					titleView,
					descTabsView,
				}
			}
		});
	},
};
