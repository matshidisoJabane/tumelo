import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { combineLatest } from 'rxjs';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [{path: 'ContactUs', component: ContactUsComponent},
                        {path: 'AboutUs', component: AboutUsComponent},
                      {path: 'Home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
