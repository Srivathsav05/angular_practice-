import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'education', component:EducationComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'experience',component:ExperienceComponent},
    
];
