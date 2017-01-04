import {Injectable} from '@angular/core'
import {Case} from '../model/case'
import {CASELIST} from '../service/mock/case.mock'
@Injectable()
export class CaseService{
  getCases(type: number): Promise<Case[]>{
    //call api by type
    return Promise.resolve(CASELIST);
  }
}

