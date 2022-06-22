#### lerna 工程初始化
    lerna init
#### 添加package
    lerna add [package]
    注意：如果生成的package包想再当前应用使用，注意重新npm install下

#### 发包
    第一步： npm login（已登录可省略）
    第二部： 将需要更新的包代码提交到git仓库
    第二部： lerna publish [package]
    