import { Module } from "@nestjs/common";
import { Controller, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  NestExpressApplication,
  ExpressAdapter,
} from "@nestjs/platform-express";
import * as express from "express";

@Controller("nest")
class AppController {
  @Get()
  getHello(): string {
    return "Hello from NestJS!";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap(expressInstance) {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  await app.init();
}

export { bootstrap };
