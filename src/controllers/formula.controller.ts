import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Formula} from '../models';
import {FormulaRepository} from '../repositories';

export class FormulaController {
  constructor(
    @repository(FormulaRepository)
    public formulaRepository : FormulaRepository,
  ) {}

  @post('/formulas')
  @response(200, {
    description: 'Formula model instance',
    content: {'application/json': {schema: getModelSchemaRef(Formula)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formula, {
            title: 'NewFormula',
            exclude: ['id'],
          }),
        },
      },
    })
    formula: Omit<Formula, 'id'>,
  ): Promise<Formula> {
    return this.formulaRepository.create(formula);
  }

  @get('/formulas/count')
  @response(200, {
    description: 'Formula model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Formula) where?: Where<Formula>,
  ): Promise<Count> {
    return this.formulaRepository.count(where);
  }

  @get('/formulas')
  @response(200, {
    description: 'Array of Formula model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Formula, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Formula) filter?: Filter<Formula>,
  ): Promise<Formula[]> {
    return this.formulaRepository.find(filter);
  }

  @patch('/formulas')
  @response(200, {
    description: 'Formula PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formula, {partial: true}),
        },
      },
    })
    formula: Formula,
    @param.where(Formula) where?: Where<Formula>,
  ): Promise<Count> {
    return this.formulaRepository.updateAll(formula, where);
  }

  @get('/formulas/{id}')
  @response(200, {
    description: 'Formula model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Formula, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Formula, {exclude: 'where'}) filter?: FilterExcludingWhere<Formula>
  ): Promise<Formula> {
    return this.formulaRepository.findById(id, filter);
  }

  @patch('/formulas/{id}')
  @response(204, {
    description: 'Formula PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formula, {partial: true}),
        },
      },
    })
    formula: Formula,
  ): Promise<void> {
    await this.formulaRepository.updateById(id, formula);
  }

  @put('/formulas/{id}')
  @response(204, {
    description: 'Formula PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() formula: Formula,
  ): Promise<void> {
    await this.formulaRepository.replaceById(id, formula);
  }

  @del('/formulas/{id}')
  @response(204, {
    description: 'Formula DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.formulaRepository.deleteById(id);
  }
}
