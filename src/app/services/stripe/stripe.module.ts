import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigurableModuleClass } from './configurable-module';
import { StripeService } from './stripe.service';

@Module({
    providers: [ StripeService ],
    exports: [ StripeService ],
    imports: [ ConfigModule ],
})
export class StripeModule extends ConfigurableModuleClass {}
