import todoList from '../js/app.js';

describe('glob', function() {

  it('allows to pass in file paths', function() {
    chai.expect(todoList.MAX_ITEMS).to.equal(10);
  });
});
