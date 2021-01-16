
import {RouterModule, Routes} from '@angular/router';
import { AdminGuard } from './../admin.guard';
import { Login1Component } from './../../login1/login1.component';
import { ProjectUpdateComponent } from './../../project/project-update/project-update.component';
import { ProjectCreateComponent } from './../../project/project-create/project-create.component';
import { ProjectListComponent } from './../../project/project-list/project-list.component';
import { ProjectComponent } from './../../project/project.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'admin',
    component: ProjectComponent,
    children: [
      {
        path: 'list',
        component: ProjectListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'create',
        component: ProjectCreateComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'update',
        component: ProjectUpdateComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'login1',
        component: Login1Component
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
