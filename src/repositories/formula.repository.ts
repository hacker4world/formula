import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FormulaDataSource} from '../datasources';
import {Formula, FormulaRelations} from '../models';

export class FormulaRepository extends DefaultCrudRepository<
  Formula,
  typeof Formula.prototype.id,
  FormulaRelations
> {
  constructor(
    @inject('datasources.formula') dataSource: FormulaDataSource,
  ) {
    super(Formula, dataSource);
  }
}
