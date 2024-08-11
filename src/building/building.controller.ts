import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  ValidationPipe,
  UseFilters,
} from '@nestjs/common';

import { BuildingService } from './building.service';
import { Building } from './building.entity';
import { CreateBuildingDto } from './building.dto';
import { AllExceptionsFilter } from '../filters/all-exceptions.filter';

@Controller({
  path: 'buildings',
  version: '1',
})
@UseFilters(AllExceptionsFilter)
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) createBuildingDto: CreateBuildingDto,
  ): Promise<Building> {
    return this.buildingService.create(createBuildingDto as Building);
  }

  @Get()
  findAll(): Promise<Building[]> {
    return this.buildingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const building = await this.buildingService.findOne(id);
    if (!building) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    return building;
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updateBuildingDto: CreateBuildingDto,
  ): Promise<Building> {
    return this.buildingService.update(id, updateBuildingDto as Building);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.buildingService.remove(id);
  }
}
