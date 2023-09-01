import { LucasComponent } from './component/lucas/lucas.component';
import { EduardoComponent } from './component/eduardo/eduardo.component';
import { AnaComponent } from './component/ana/ana.component';
import { HomeComponent } from './template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'ana', component:AnaComponent},
    {path: 'eduardo', component:EduardoComponent},
    {path: 'lucas', component:LucasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
