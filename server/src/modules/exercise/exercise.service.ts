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
    let exercise = this.exerciseRepository.create(dto);
    let res;
    try {
      res = this.exerciseRepository.save(exercise);
      console.log('ExerciseService create:', dto, res);
    } catch (error) {
      console.log('create error', error);
    }
    return res;
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
