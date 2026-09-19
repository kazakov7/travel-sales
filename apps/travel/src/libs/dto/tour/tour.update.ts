import { InputType, PartialType } from '@nestjs/graphql';
import { TourInput } from './tour.input';

@InputType()
export class TourUpdateInput extends PartialType(TourInput) {}
