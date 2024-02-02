import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from '@core/database/entities/account.entity';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
    imports: [ TypeOrmModule.forFeature([ AccountEntity ]) ],
    controllers: [ AccountController ],
    providers: [ AccountService ],
    exports: [ AccountService ],
})
export class AccountModule {
}
