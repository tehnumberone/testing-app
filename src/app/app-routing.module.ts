import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestingComponentComponent} from './testing-component/testing-component.component';


const routes: Routes = [
  {path: 'test', component: TestingComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
