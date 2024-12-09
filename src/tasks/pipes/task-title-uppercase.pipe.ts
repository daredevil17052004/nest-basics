import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TaskTitleUppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.title = value.title.toUpperCase(); // Transform the title to uppercase
    return value;
  }
}
