import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configurations } from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configurations],
        }),
    ],
    controllers: [],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class ConfigurationModule {}
