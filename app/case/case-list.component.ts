import {Component, Input, OnInit} from '@angular/core'
import {Case} from "../model/case";
import {ViewType, ViewTypeExtensions} from "../common/viewType"
import {ActivatedRoute, Params} from '@angular/router'
import{Location} from '@angular/common'
import {CaseService} from '../service/case.service'

import 'rxjs/add/operator/switchMap'

@Component({
  moduleId: module.id,
  selector: 'case-list',
  templateUrl: 'case-list.component.html',
  styleUrls: ['case-list.component.css'],
  providers: [ViewTypeExtensions]
})

export class CaseListComponent implements OnInit {
  title = "Processing Items";
  caseList: Case[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private viewTypeExtentions: ViewTypeExtensions,
              private caseService: CaseService) {

  };

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.caseService.getCases(+[params['type']])).subscribe(caseList => {
      this.caseList = caseList;
    });
    this.route.params.subscribe(params => {
      this.title = this.viewTypeExtentions.getTitle(+params['type']);
    });
  };

}
