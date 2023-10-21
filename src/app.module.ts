import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './users/customers/customers.controller';

//
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'reminders',
      port: 5432,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MessagesModule,
    UsersModule,
    AuthModule,
    AwsModule,
  ],
  controllers: [CustomersController],
  providers: [],
})
export class AppModule {}
