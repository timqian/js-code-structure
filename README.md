## Analyse the structure of your js project

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/js-code-structure)

Figure out relations between your js files(thorgh `require()` and `import`)

## Usage

1. Open terminal
2. Install the package: `npm install -g js-code-structure`
3. Go to the directory of your project
4. Input `jss`

**then a html file describing the relations of your the js files will show up**

## Advanced Usage:

1. Ignore some directory inside the directory:

    `jss --ignore dirname1 dirname2 dirname3 ...`

    > these dirs are ignored by default: `['node_modules', '.git', 'dist', 'build', 'doc', 'test', 'submodules']`
2. Show required files: hover on the node
3. Show being required files: click the node


## Example： Appium code:

![appium code](./assets/example.png)

## Tools

[sigma.js](http://sigmajs.org/)

## 参考资料：

- [开发成命令行工具](http://jslite.io/2015/06/19/Nodejs-%E5%88%B6%E4%BD%9C%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/)
- [node 目录遍历](http://swordair.com/directory-traversal-in-nodejs/)

## License: MIT
