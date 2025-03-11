import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ListproductoComponent } from './page/listproducto/listproducto.component';
import { UpdateproductoComponent } from './page/updateproducto/updateproducto.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [

    
{
    path: 'home',    
    component:HomeComponent,
},
{
    path: 'producto', 
    component:ProductoComponent,
},
{
    path: 'lista-producto',
    component:ListproductoComponent

},
{
    path: 'updata-producto',
    component: UpdateproductoComponent
},



];
