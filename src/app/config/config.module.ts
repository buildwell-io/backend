import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validationSchema } from './validation-schema';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema,
            validationOptions: { abortEarly: true },
        }),
    ],
})
export class CustomConfigModule {
}
