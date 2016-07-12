var should = require('should')
var deleteExt = require('../lib/deleteExt');

describe('deleteExt', function () {
  
  it('delete .js', function () {
    deleteExt('/a/b/c.js').should.equal('/a/b/c')
    deleteExt('/a/b/c.json').should.equal('/a/b/c')
    deleteExt('/a/b/c.node').should.equal('/a/b/c')
  });
  
  it('not deleting other file format(maybe path)', function () {
    deleteExt('/a/b/c.java').should.equal('/a/b/c.java')
  });
  
});

