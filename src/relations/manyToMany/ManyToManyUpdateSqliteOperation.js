const UpdateOperation = require('../../queryBuilder/operations/UpdateOperation');

module.exports = class ManyToManyUpdateSqliteOperation extends UpdateOperation {

  constructor(name, opt) {
    super(name, opt);

    this.relation = opt.relation;
    this.owner = opt.owner;
  }

  onBeforeBuild(builder) {
    super.onBeforeBuild(builder);
    this.relation.selectForModifySqlite(builder, this.owner).modify(this.relation.modify);
  }
}
