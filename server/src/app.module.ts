import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URL),
        TrackModule,

    ]
})
export class AppModule{}