import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent,
    children: [
      {
        path: 'details', // child route path
        component: ProductDetailsComponent, // child route component that the router renders
      },
      {
        path: 'gallery',
        component: ProductGalleryComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
