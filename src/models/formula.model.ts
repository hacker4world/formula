import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Formula extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  cin: string;

  @property({
    type: 'string',
    required: true,
  })
  addresse: string;

  @property({
    type: 'string',
    required: true,
  })
  voiture: string;

  @property({
    type: 'number',
    required: true,
  })
  num_competition: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Formula>) {
    super(data);
  }
}

export interface FormulaRelations {
  // describe navigational properties here
}

export type FormulaWithRelations = Formula & FormulaRelations;
