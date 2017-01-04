import {Owner} from './owner'

export class Case{
  id: number;
  srNumber: string;
  version: string;
  subject: string;
  description: string;
  owner: Owner;
}
