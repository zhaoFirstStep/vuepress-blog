/*
* @Author: admin
* @Date:   2019-03-27 19:53:25
* @Last Modified by:   admin
* @Last Modified time: 2019-03-28 13:47:28
*/

module.exports = {
	base:'/blog/',
	title: 'Magic飘', 
	// theme:'reco',
    description: 'magic的博客',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/images/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    markdown:{
       lineNumbers: true,//显示代码行号
	},
	activeHeaderLinks: true,
	scss: {
        includePaths: ["/style/theme.scss"]
    },
	themeConfig:{
		repo: 'zhaoFirstStep/blog',
		label: '简体中文',
		selectText: '选择语言',
		nav:[
		{text:'首页',link:'/'},
		{text:'博客',items:[
           {text:'web前端',link:'/docs/web/'},
           {text:'node',link:'/docs/node/'},
           {text:'算法',link:'/docs/algorithm/'},
           {text:'AI学习',link:'/docs/AI/'},
		   {text:'生活',link:'/docs/life/'},
		]},
		{text:'关于',link:'/docs/about/'},
		],
		editLinkText: '博主通道__GitHub Private Repo ！',
		searchMaxSuggestions: 10,
		// algolia: {//algolia搜索
	 //      apiKey: '<API_KEY>',
	 //      indexName: '<INDEX_NAME>'
	 //    },
		// sidebar:'auto',
		sidebar:{
			'/docs/web/':[
				'',
			],
			'/docs/node/':[
				'',
			],
			'/docs/algorithm/':[
				'',
			],
			'/docs/AI/':[
				'',
			],
			'/docs/life/':[
				'',
			],
		},
		sidebarDepth:3,
		lastUpdated: 'Last Updated',
	},
	plugins:[
		['@vuepress/container', true],
		['@vuepress/nprogress', true],
		['@vuepress/active-header-links', true],
		['@vuepress/register-components', true],
		['@vuepress/search', {
		  searchMaxSuggestions: 10
		}],
		['@vuepress/pwa',{
			serviceWorker: true,
			popupComponent:'MySWUpdatePopup',
			updatePopup: {
            message: "博客内容已更新",
            buttonText: "确定"
        }
		}]
	],
}
