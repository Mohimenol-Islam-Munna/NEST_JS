import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  index() {
    return {
        status: 200,
        message: "this is home page of our application"
    };
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen("4545", () => {
    console.log(`Your server is running at port ${4545}...`);
  });
}

bootstrap()
