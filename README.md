#### lerna 工程初始化
    lerna init

#### 创建项目
    lerna create [package]
    注意：如果生成的package包想再当前应用使用，注意重新npm install下
    
#### 添加依赖
    lerna add [package] [--scope=特定的某个包] 

#### 安装依赖
1、为每个包安装依赖 lerna bootstrap [--scope=特定的某个包] 功能和npm install差不多，如果不加scope，lerna会把工程下的所有包的依赖都安装好！
2、删除包下面的node_modules 上面的命令安装依赖会在每个包目录下生成node_modules，下面的命令就是将node_modules删除 lerna clean
3、导入外部的包（这个命令比较有意思） lerna import 外部包的位置 --dest=工程下的位置

#### 发包
    第一步： npm login（已登录可省略）
    第二部： 将需要更新的包代码提交到git仓库
    第二部： lerna publish [package]
    