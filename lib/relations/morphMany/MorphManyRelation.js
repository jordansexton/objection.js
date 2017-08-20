'use strict';

const Relation = require('../Relation');
const MorphManyInsertOperation = require('./HasManyInsertOperation');
const MorphManyRelateOperation = require('./HasManyRelateOperation');
const MorphManyUnrelateOperation = require('./HasManyUnrelateOperation');

class MorphManyRelation extends Relation {
  insert(builder, owner) {
    return new MorphManyInsertOperation('insert', {
      relation: this,
      owner: owner
    });
  }

  relate(builder, owner) {
    return new MorphManyRelateOperation('relate', {
      relation: this,
      owner: owner
    });
  }

  unrelate(builder, owner) {
    return new MorphManyUnrelateOperation('unrelate', {
      relation: this,
      owner: owner
    });
  }
}

module.exports = MorphManyRelation;

