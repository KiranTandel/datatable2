import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'datatable', component: DatatableComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {path:'product',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  canLoad: [ AuthGuard ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
