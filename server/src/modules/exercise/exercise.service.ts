import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../../entity/exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  create(dto) {
    return this.exerciseRepository.create(dto);
  }

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  findOne(id: number): Promise<Exercise | null> {
    return this.exerciseRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {                           
    await this.exerciseRepository.delete(id);
  }
}
