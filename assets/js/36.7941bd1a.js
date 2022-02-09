(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{360:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"记windows开发迁移至mac环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记windows开发迁移至mac环境"}},[a._v("#")]),a._v(" 记Windows开发迁移至Mac环境")]),a._v(" "),s("p",[a._v("第一次使用Mac pro，感觉整个迁移过程还是令人心酸的。基本耗时很久，但好的事是大部分都装好了，补一下安装过程。")]),a._v(" "),s("p",[a._v("本人Java开发一枚，偶尔用Python和Node.js。最近工作环境从windows迁移到了Mac os, 自己给自己挖了不少坑。Mac的基本操作就不说了，官方教程都有，很容易上手，说一下开发环境配置和常用软件。")]),a._v(" "),s("h2",{attrs:{id:"java-多版本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-多版本配置"}},[a._v("#")]),a._v(" Java 多版本配置")]),a._v(" "),s("p",[a._v("当前常用的jdk7、jdk8，先从官网下载Mac OS X x64 版本，Java版本归档地址："),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/archive-139210.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Oracle Java Archive"),s("OutboundLink")],1),a._v(" 。下载后默认安装至/Library/Java/JavaVirtualMachines")]),a._v(" "),s("p",[a._v("多版本切换问题，同Linux和windows一样，需要配置环境变量。")]),a._v(" "),s("blockquote",[s("p",[a._v("补充一下:  Mac 也分用户个人级别环境变量和系统级别环境变量。/etc/profile和/etc/paths是系统级,~/.bash_profile ~/.bash_login ~/.profile ~/.bashrc 用户级。加载次序依次为:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/etc/profile /etc/paths ~/.bash_profile ~/.bash_login ~/.profile ~/.bashrc\n")])])])]),a._v(" "),s("p",[a._v("因为懒直接配置到了/etc/profile 上面。在末尾追加：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_7_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_8_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_7_HOME")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jdk8")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'export JAVA_HOME="),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_8_HOME")]),a._v("'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jdk7")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'export JAVA_HOME="),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_7_HOME")]),a._v("'")]),a._v("\n")])])]),s("p",[a._v("直接在bash上输入jdk7/jdk8可以直接修改当前jdk版本")]),a._v(" "),s("ul",[s("li",[a._v("Jdk7")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("xx@MacBook-Pro ~$ jdk7 \nxx@MacBook-Pro ~$ java -version\njava version "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.7.0_80"')]),a._v("\nJava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" SE Runtime Environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.7")]),a._v(".0_80-b15"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nJava HotSpot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("24.80")]),a._v("-b11, mixed mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("ul",[s("li",[a._v("Jdk8")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("xx@MacBook-Pro ~$ jdk8\nxx@MacBook-Pro ~$ java -version\njava version "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.8.0_171"')]),a._v("\nJava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" SE Runtime Environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_171-b11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nJava HotSpot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("TM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("64")]),a._v("-Bit Server VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("build "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25.171")]),a._v("-b11, mixed mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"tomcat配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat配置"}},[a._v("#")]),a._v(" Tomcat配置")]),a._v(" "),s("p",[a._v("直接从"),s("a",{attrs:{href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tomcat 官网"),s("OutboundLink")],1),a._v(" 下载的版本，zip/tar.gz格式，下载后解压安装到/Library/Tomcat/apache-tomcat-7.0.86。")]),a._v(" "),s("p",[a._v("IntelliJ IDEA使用Tomcat报错：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("error=13, permission denied\n")])])]),s("p",[a._v("需要设置权限")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd /Library/Tomcat/apache-tomcat-7.0.86/bin\n\nchmod 777 *.sh\n")])])]),s("h2",{attrs:{id:"ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[a._v("#")]),a._v(" SSH")]),a._v(" "),s("h3",{attrs:{id:"shuttle-已经放弃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shuttle-已经放弃"}},[a._v("#")]),a._v(" Shuttle(已经放弃)")]),a._v(" "),s("p",[s("strong",[a._v("Shuttle")]),a._v(" 避免ssh远程连接频繁输入host、port。开源免费：http://fitztrev.github.io/shuttle/，但是需输入password.")]),a._v(" "),s("p",[a._v("懒人还需安装**sshpass **，借鉴"),s("a",{attrs:{href:"https://stackoverflow.com/questions/32255660/how-to-install-sshpass-on-mac",target:"_blank",rel:"noopener noreferrer"}},[a._v("stackoverflow的问题"),s("OutboundLink")],1),a._v("，通过brew安装。")]),a._v(" "),s("p",[a._v("先安装"),s("strong",[a._v("brew")]),a._v(", "),s("strong",[a._v("brew")]),a._v("官网：https://brew.sh/index_zh-cn.html")]),a._v(" "),s("p",[a._v("后安装"),s("strong",[a._v("sshpass")])]),a._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb\n")])])]),s("p",[s("strong",[a._v("Shuttle")]),a._v(" 配置文件demo")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  "_comments": [\n    "Valid terminals include: \'Terminal.app\' or \'iTerm\'",\n    "In the editor value change \'default\' to \'nano\', \'vi\', or another terminal based editor.",\n    "Hosts will also be read from your ~/.ssh/config or /etc/ssh_config file, if available",\n    "For more information on how to configure, please see http://fitztrev.github.io/shuttle/"\n  ],\n  "editor": "default",\n  "launch_at_login": false,\n  "terminal": "Terminal.app",\n  "iTerm_version": "nightly",\n  "default_theme": "Homebrew",\n  "open_in": "new",  \n  "show_ssh_config_hosts": false,\n  "ssh_config_ignore_hosts": [  ],\n  "ssh_config_ignore_keywords": [  ],\n  "hosts": [\n    {\n      "myself": [\n        {\n          "cmd": "sshpass -p yourpassword ssh loginname@yourhostaddress -p yourhostport",\n          "inTerminal": "tab",\n          "name": "test",\n          "theme": "basic",\n          "title": "title of tab"\n        }\n      ]\n    }\n  ]\n}\n\n        \n')])])]),s("h3",{attrs:{id:"alfred-snippets-sshpass-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alfred-snippets-sshpass-ssh"}},[a._v("#")]),a._v(" Alfred snippets + sshpass + ssh")]),a._v(" "),s("blockquote",[s("p",[a._v("主要的是cmd，例如 sshpass -p 123456 ssh root@192.168.11.11 -p 1000")]),a._v(" "),s("p",[a._v("2019.06.01补充：配合Alfred 的snippets 的自定义快捷键，非常好用")])]),a._v(" "),s("h2",{attrs:{id:"ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[a._v("#")]),a._v(" ftp")]),a._v(" "),s("p",[s("strong",[a._v("Forklift")])]),a._v(" "),s("h2",{attrs:{id:"其他开发软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他开发软件"}},[a._v("#")]),a._v(" 其他开发软件")]),a._v(" "),s("blockquote",[s("p",[a._v("安装时.app结尾程序需要拖到"),s("strong",[a._v("应用程序")]),a._v("文件夹内,部分安装时会提示将程序放进去")])]),a._v(" "),s("h3",{attrs:{id:"intellij-idea-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea-配置"}},[a._v("#")]),a._v(" IntelliJ IDEA 配置")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[a._v("jetbrains 官网"),s("OutboundLink")],1),a._v(" 下载IDEA，默认安装配置。常用使用同Windows下，除快捷键不同，无太大差别。")]),a._v(" "),s("h3",{attrs:{id:"datagrip-已经放弃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datagrip-已经放弃"}},[a._v("#")]),a._v(" DataGrip(已经放弃)")]),a._v(" "),s("p",[a._v("jetbrains旗下数据库客户端，idea付费版有插件支持datagrip全部功能，不过单独装一个datagrip比较合适，避免多项目的时候切换比较麻烦。配置不复杂，搜一下即可。")]),a._v(" "),s("blockquote",[s("p",[a._v("2019.06.01补充：复制表的时候结构不会全量复制，需要每个字段逐一更改，修改字段及创建新的表的时候也很麻烦，已经放弃使用，改为Navicate Premium")])]),a._v(" "),s("h3",{attrs:{id:"navicate-premium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navicate-premium"}},[a._v("#")]),a._v(" Navicate Premium")]),a._v(" "),s("p",[a._v("windows用习惯了，还行。")]),a._v(" "),s("h3",{attrs:{id:"svn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svn"}},[a._v("#")]),a._v(" SVN")]),a._v(" "),s("p",[a._v("mac 自带svn，前提需要安装Xcode。 svn客户端使用的是"),s("strong",[a._v("Cornerstone")]),a._v("，收费。先配置"),s("strong",[a._v("repository")]),a._v(" ，后check out。")]),a._v(" "),s("h3",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[a._v("#")]),a._v(" Git")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("git 官网"),s("OutboundLink")],1),a._v(" 下载mac版本，看官方自带document就好。Git 客户端用"),s("strong",[a._v("Sourcetree")]),a._v("，开源免费。")]),a._v(" "),s("p",[a._v("git推荐使用ssh连接，先在本地生成ssh 私钥和公钥，再将.ssh目录下的id_rsa.pub公钥传到github上配置，私钥请保密。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ssh")]),a._v("-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"youremail@example.com"')]),a._v("\n")])])]),s("h3",{attrs:{id:"vscode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[a._v("#")]),a._v(" VSCode")]),a._v(" "),s("p",[a._v("微软开源编辑器，"),s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),s("OutboundLink")],1),a._v("下载就可以。")]),a._v(" "),s("h3",{attrs:{id:"markdown编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown编辑器"}},[a._v("#")]),a._v(" Markdown编辑器")]),a._v(" "),s("p",[a._v("vscode支持markdown，idea也支持，另外推荐"),s("strong",[a._v("Typora")]),a._v(" ，开源，简洁，美观，前提需熟悉markdown语法。官网：https://www.typora.io/")]),a._v(" "),s("h3",{attrs:{id:"vpn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vpn"}},[a._v("#")]),a._v(" VPN")]),a._v(" "),s("p",[a._v("Mac os 12.13抛弃了pptp协议，pptp协议需要安装"),s("strong",[a._v("Shimo")]),a._v(" ，收费软件。")]),a._v(" "),s("p",[a._v("SS 则使用"),s("strong",[a._v("ShadowsocksX-NG")]),a._v(" ，开源免费。下载地址：https://github.com/shadowsocks/ShadowsocksX-NG/releases/")]),a._v(" "),s("h3",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("p",[a._v("开发环境搭建利器，docker-compose.yml配置完后部署十分舒服。")]),a._v(" "),s("h2",{attrs:{id:"其他工作软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他工作软件"}},[a._v("#")]),a._v(" 其他工作软件")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("workflowy, 一个月有350条免费使用")])]),a._v(" "),s("li",[s("p",[a._v("wunderlist，免费版足够，chrome还有有标签页的插件")])]),a._v(" "),s("li",[s("p",[a._v("teambition，项目任务管理")])]),a._v(" "),s("li",[s("p",[a._v("xmind zen，思维导图")])]),a._v(" "),s("li",[s("p",[a._v("cacher 代码片段收集，可同步github gist")])]),a._v(" "),s("li",[s("p",[a._v("postman")]),a._v(" "),s("ul",[s("li",[a._v("http api调试，同步、导出、导入、group等功能")]),a._v(" "),s("li",[a._v("可根据不同环境配置环境参数，支持脚本")]),a._v(" "),s("li",[a._v("可批量添加header参数")])])]),a._v(" "),s("li",[s("p",[a._v("anaconda，python科学计算包")])]),a._v(" "),s("li",[s("p",[a._v("marginNote 3 "),s("strong",[a._v("已弃用")])])]),a._v(" "),s("li",[s("p",[a._v("读书软件，结合思维导图及笔记，很清晰的归纳及复习")])]),a._v(" "),s("li",[s("p",[a._v("2019/12/10反馈: 需要配ipad，mac上做笔记很麻烦，已经弃用")])]),a._v(" "),s("li",[s("p",[a._v("印象笔记")])]),a._v(" "),s("li",[s("p",[a._v("tag和搜索用起来很方便，多端同步")])]),a._v(" "),s("li",[s("p",[a._v("Scrivener")]),a._v(" "),s("ul",[s("li",[a._v("专业级写作软件")])])]),a._v(" "),s("li",[s("p",[a._v("AnotherRedisDesktopManager")]),a._v(" "),s("ul",[s("li",[a._v("redis 可视化工具")])])])]),a._v(" "),s("hr"),a._v(" "),s("h3",{attrs:{id:"其他工具整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他工具整理"}},[a._v("#")]),a._v(" 其他工具整理")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/jaywcjlove/linux-command",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/jaywcjlove/linux-command"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/zenorocha/alfred-workflows",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/zenorocha/alfred-workflows"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/jaywcjlove/awesome-mac",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/jaywcjlove/awesome-mac"),s("OutboundLink")],1)])]),a._v(" "),s("p",[a._v("to  be continue...")])])}),[],!1,null,null,null);t.default=r.exports}}]);