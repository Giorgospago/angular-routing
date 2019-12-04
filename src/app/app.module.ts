import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';


const routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "product/:productId",
    component: ProductComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_Z-2QrGLQVSzP6Kn9unYaE9GiamEn4uE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
