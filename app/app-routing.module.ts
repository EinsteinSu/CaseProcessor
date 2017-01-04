import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CaseListComponent} from "./case/case-list.component";


const routes: Routes = [
  {path: '', redirectTo: '/list/1', pathMatch: 'full'},
  {path: 'list/:type', component: CaseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

