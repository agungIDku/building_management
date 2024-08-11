import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateBuildingDto {
  @IsNotEmpty()
  @IsString()
  building: string;

  @IsNotEmpty()
  @IsString()
  location_name: string;

  @IsNotEmpty()
  @IsString()
  location_number: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  area: number;
}
