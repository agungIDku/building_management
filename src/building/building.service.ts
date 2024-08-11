import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Building } from './building.entity';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  private readonly logger = new Logger(BuildingService.name);

  async create(building: Building): Promise<Building> {
    try {
      this.logger.log('Creating a new building');
      return await this.buildingRepository.save(building);
    } catch (error) {
      throw new Error('Failed to create a building');
    }
  }

  findAll(): Promise<Building[]> {
    this.logger.log('Finding all buildings');
    return this.buildingRepository.find();
  }

  async findOne(id: number): Promise<Building> {
    this.logger.log(`Finding building with id ${id}`);
    const building = await this.buildingRepository.findOneBy({ id });
    if (!building) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    return building;
  }

  async update(id: number, building: Building): Promise<Building> {
    this.logger.log(`Updating building with id ${id}`);
    await this.buildingRepository.update(id, building);
    return this.buildingRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    this.logger.log(`Deleting building with id ${id}`);
    await this.buildingRepository.delete(id);
  }
}
