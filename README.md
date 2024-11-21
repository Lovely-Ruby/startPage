<p align="center">
    <a href="https://jvmao.net/" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://i.v2ex.co/f37S9mrrb.png" alt="橘猫起始页 logo" />
    </a>
</p>

<p align="center"><b>橘猫起始页</b></p>


### 官方版本的问题

我是一个前端开发人员，官方此插件运行的时候，控制台会报错



### 介绍

一个浏览器新标签页插件

###### 详细说明：

1. 外观与显示模式：简洁界面，仅有壁纸和搜索框，也可设置成有时间和快捷链接的样式，并且支持暗黑模式。
1. 聚合搜索：集成该功能，支持快捷键切换及自定义搜索源，搜索结果页罗列其他搜索图标，点击可跳转。
1. 壁纸功能：默认支持必应壁纸和自定义上传，还可设置第二壁纸，默认不显示，长按壁纸显示。
1. 抽屉功能：用于存放网址，可添加、拖拽网址，一键添加已打开网址，右击分组名称可一键打开或复制网址，数据存放在本地，支持 wevdav 接口同步数据，按特定键盘操作可激活抽屉暗格存放私密网址。
1. 便签功能：基础便签可临时记录事情，首屏任意位置双击可召唤快捷便签并支持拖拽；框选网页文本或图片后右击可快速保存到便签；首屏添加的便签右击头部可变为时间胶囊。

### 相关介绍

https://sspai.com/post/90463

### 使用

```bash
 yarn && yarn build
```

### 调试

```bash
 yarn && yarn d
```



### 推送报错

```
git push -u origin main
Enumerating objects: 137, done.
Counting objects: 100% (137/137), done.
Delta compression using up to 8 threads
Compressing objects: 100% (130/130), done.
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
send-pack: unexpected disconnect while reading sideband packet
Writing objects: 100% (137/137), 1.64 MiB | 1.24 MiB/s, done.
Total 137 (delta 4), reused 0 (delta 0), pack-reused 0
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

解决办法是

```bash
git config --global http.postBuffer 524288000  # 将缓存区大小设置为 500MB
```
