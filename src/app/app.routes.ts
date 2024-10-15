import { Routes } from '@angular/router';
import { SummaryComponent } from './Components/summary/summary.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {path:'', redirectTo:'summary', pathMatch:'full'},
    {path:'summary', component:SummaryComponent},
    {path:'resume', component:ResumeComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'contact', component:ContactComponent}
];
