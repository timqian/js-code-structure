### Figure out relations between your `js` files (through `require()` and `import`)

[![npm](https://nodei.co/npm/js-code-structure.png?downloadRank=true)](https://www.npmjs.com/package/js-code-structure)

### Example： Appium code:

![appium code](./assets/example.png)

### Install

`npm install -g js-code-structure`

### Usage

1. Open a terminal
2. Go to the directory of your project
3. Input `jss`

**an html file describing the relations of your the js files will be created and opened in your browser**

### Advanced Usage

1. Ignore some directory inside the directory:

    `jss --ignore dirname1 dirname2 dirname3 ...`

    > these dirs are ignored by default: `['node_modules', '.git', 'dist', 'build', 'doc', 'test', 'submodules']`
2. Show required files: hover on the node
3. Show being required files: click the node


### Tools

[sigma.js](http://sigmajs.org/)

### Thanks

- [command line tool](http://jslite.io/2015/06/19/Nodejs-%E5%88%B6%E4%BD%9C%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/)
- [directory traversal](http://swordair.com/directory-traversal-in-nodejs/)

### License
MIT

> [Donate with bitcoin](https://getcryptoo.github.io/)
