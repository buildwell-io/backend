import { StateEntity } from '@app/database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsSelect, Repository } from 'typeorm';

@Injectable()
export class StatesService {
    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository: Repository<StateEntity>,
    ) {}

    findOne(stateId: number, select?: FindOptionsSelect<StateEntity>): Promise<StateEntity> {
        return this.stateRepository.findOne({ where: { id: stateId }, select });
    }

    findAllByCountry(countryId: number, select?: FindOptionsSelect<StateEntity>): Promise<StateEntity[]> {
        return this.stateRepository.find({ where: { countryId }, select });
    }
}
