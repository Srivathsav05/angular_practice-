import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path: 'products', component:ProductsComponent},
    {path:'cart', component:CartComponent},
];
