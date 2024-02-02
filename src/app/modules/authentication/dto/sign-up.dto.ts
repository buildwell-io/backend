import { Account } from '@interfaces/account.interface';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDTO implements Pick<Account, 'name' | 'email' | 'password'> {
    @MaxLength(64)
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @ApiProperty({example: 'John Doe', required: false })
    readonly name: string;

    @ApiProperty({ example: 'john.doe@gmail.com' })
    @IsEmail()
    readonly email: string;

    @MaxLength(64)
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: 'P@ssw0rd' })
    readonly password: string;
}