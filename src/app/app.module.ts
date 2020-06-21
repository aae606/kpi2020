import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { KpiMddComponent } from './pages/kpiMoph/kpi-mdd/kpi-mdd.component';
import { KpiSuicideComponent } from './pages/kpiMoph/kpi-suicide/kpi-suicide.component';
import { KpiPsyComponent } from './pages/servicePlan/kpi-psy/kpi-psy.component';
import { KpiADHDComponent } from './pages/servicePlan/kpi-adhd/kpi-adhd.component';
import { KpiiAutismComponent } from './pages/servicePlan/kpii-autism/kpii-autism.component';
import { KpiiAlcoholicComponent } from './pages/servicePlan/kpii-alcoholic/kpii-alcoholic.component';
import { KpiFullremissionComponent } from './pages/servicePlan/kpi-fullremission/kpi-fullremission.component';
import { GuaranteeComponent } from './pages/guarantee/guarantee.component';
@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    MainComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    KpiMddComponent,
    KpiSuicideComponent,
    KpiPsyComponent,
    KpiADHDComponent,
    KpiiAutismComponent,
    KpiiAlcoholicComponent,
    KpiFullremissionComponent,
    GuaranteeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
