# react-dll
## 使用DII库（动态链接库）
- 对我们构建速度进行优化操作，新版本的webapck性能上的优化已经很不错了，vue跟react都已经移除了dll优化的模块，但是合理使用dll库的确可以一定程度上提高我们的打包构建速度
## dll库是什么
- webpack内置：DllPlugin和DllReferencePlugin用某种方法实现了拆分bundles，同时还大幅度提升了构建的速度。
## 怎样使用dll库，怎么打包一个自己的dll库
- 把项目里面经常要用到的一些共享的资源呢，它可能比较大，代码也不经常变动，所以每一次在build的时候没必要跟着我们的入口文件或者依赖文件一起去被打包。所以我们就借助Windows下的一些思想，把他们单独拎出来做成一个dll包，一个动态链接库文件。也就是一个经过一次构建的js文件，跟他配套的还有一个叫manifest.json的文件，将来要去使用它的时候就相当于会先加载这个json文件，相对于它再去找它的源文件js
- 怎么在webpack中配置使用
需要两个插件配合完成dll链接库能够在项目中使用
	- DllReferencePlugin
	- AddAssetHtmlWebpackPlugin
