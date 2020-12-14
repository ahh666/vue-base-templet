# vue-base-templet

## image-webpack-loader 安装注意事项

**一定要使用 cnpm 安装**

1. 若安装过 image-webpack-loader 先卸载

   ```bash
   yarn remove image-webpack-loader // npm uninstall image-webpack-loader
   ```

2. 安装 cnpm ，并将全局的 registry 设置成阿里的镜像

   ```bash
   npm install cnpm -g --registry=https://registry.npm.taobao.org
   ```

3. 使用 cnpm 安装 image-webpack-loader

   ```bash
   cnpm install --save-dev image-webpack-loader
   ```