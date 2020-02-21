import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { TopBarComponent } from './top-bar/top-bar.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'about' , component: AboutComponent },
    { path: 'top-bar' , component: TopBarComponent }
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }