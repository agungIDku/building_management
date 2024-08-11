import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  building: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  location_name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  location_number: string;

  @Column('float')
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  area: number;
}
