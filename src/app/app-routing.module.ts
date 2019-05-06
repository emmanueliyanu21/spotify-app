import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { TodolistComponent } from './components/pages/todo-list.component';
import { SigninComponent } from './components/pages/signin.component';
import { SignupComponent } from './components/pages/signup.component';
import { DetailComponent } from './components/pages/detail.component';
import { ArtistComponent } from './components/pages/artist.component';
import { AlbumComponent } from './components/pages/album.component';



const routes: Routes = [
    {   path: '', 
        component: HomeComponent 
    },
    {   path: 'artist/:id', 
        component: ArtistComponent 
    },
    {
        path:'album/:id',
        component: AlbumComponent
    },

    {   path: 'todolist', 
        component: TodolistComponent 
    },
    {   path: 'signin', 
        component: SigninComponent 
    },
    {   path: 'signup', 
        component: SignupComponent 
    },
    {
        path: 'detail',
        component: DetailComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
