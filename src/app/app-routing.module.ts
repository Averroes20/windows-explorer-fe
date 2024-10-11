import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';

const routes: Routes = [
  { path: '', redirectTo: 'desktop', pathMatch: 'full'},
  { path: 'desktop', component: DesktopComponent },
  // { path: 'ViewEmployee/:employeeId', component: ViewEmployeeComponent },
  // { path: 'AddEmployee', component: AddEmployeeComponent },
  // { path: 'EditEmployee/:employeeId', component: EditEmployeeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
