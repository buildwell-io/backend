import { WidgetEntity } from '@app/database';
import { assert } from '@app/utilities';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WidgetAppService {
    constructor(
        @InjectRepository(WidgetEntity)
        private readonly widgetRepository: Repository<WidgetEntity>,
    ) {}

    async verify(key: string, referrer: string) {
        const widgetExists = await this.widgetRepository.existsBy({ key });
        assert(widgetExists, () => new BadRequestException());
    }
}
