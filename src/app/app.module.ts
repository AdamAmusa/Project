import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { DataService } from './data.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{IonicStorageModule} from '@ionic/storage-angular'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ForcastPage } from './forcast/forcast.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},DataService,ForcastPage ],
  bootstrap: [AppComponent],
})
export class AppModule {}
