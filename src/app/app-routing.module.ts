import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TableComponent from './table/table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path :  '' , component : HomeComponent},
  { path : 'table', component : TableComponent },
  { path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
