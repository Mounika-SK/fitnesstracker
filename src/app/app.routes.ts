import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Userms } from './USER_PROFILE/userms/userms';
import { AddUser } from './USER_PROFILE/add-user/add-user';
import { ViewProfile } from './USER_PROFILE/view-profile/view-profile';
import { Goalms } from './goalms/goalms';
import { Addactivity } from './ACTIVITY_GOAL/addactivity/addactivity';
import { Viewactivity } from './ACTIVITY_GOAL/viewactivity/viewactivity';
import { Addgoal } from './ACTIVITY_GOAL/addgoal/addgoal';
import { Viewgoal } from './ACTIVITY_GOAL/viewgoal/viewgoal';
import { Login } from './USER_PROFILE/login/login';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"user-profile",component:Userms},
    {path:"add-user",component:AddUser},
    {path:"view-profile",component:ViewProfile},
    {path:"goal-activity",component:Goalms},
    {path:"add-Activity",component:Addactivity},
    {path:"view-activity",component:Viewactivity},
    {path:"add-goal",component:Addgoal},
    {path:"view-goal",component:Viewgoal},
    {path:"login",component:Login}
    

   




];
