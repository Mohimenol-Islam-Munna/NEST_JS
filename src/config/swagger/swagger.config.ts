import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerConfigHandler = (app: any) => {
  const config = new DocumentBuilder()
    .setTitle('Nest js practice with prisma orm')
    .setDescription(
      'This is the description of nest js application with prisma orm.',
    )
    .setVersion('1.0')
    .addTag('nest js + prisma')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

export default swaggerConfigHandler;
