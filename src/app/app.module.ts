import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MdlModule} from '@angular-mdl/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HorizontalBarChartComponent} from './commons/horizontalbarchart/horizontalbarchart.component';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {GuageChartComponent} from './commons/guagechart/guagechart.component';
import {LineChartDashboardComponent} from './commons/linechartdashboard/linechartdashboard.component';
import {FirstPassRateComponent} from './claims/firstpassrate/firstpassrate.component';
import {DashboardTableComponent} from './commons/dashboardtable/dashboardtable.component';
import {LineChartFPComponent} from './commons/linechartfpclaims/linechartfp.component';
import {ClaimsFPTableComponent} from './claims/firstpassrate/claimsfptable/claimsfptable.component';
import {TrendingInventoryComponent} from './claims/trendinginventory/trendinginventory.component';
import {ChartTrendInv} from './commons/linechartrendinv/linecharttrendinv.component'; 
import {TrendInvTableComponent} from './claims/trendinginventory/trendinvtable/trendinvtable.component';
import {MatSelectModule} from '@angular/material';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {MatPaginatorModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BarChartsComponent} from './commons/horizontalbarchart/barcharts.component';
import {LoginComponent} from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {PopupModalComponent} from './commons/horizontalbarchart/popupmodal.component';
import { DatePipe } from '@angular/common'


//Authentication Users
import {AuthGuard} from './auth/guards/auth.guards';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './auth/helpers/fake-backend';
import {AlertService} from './auth/services/alert.service'; 
import {AuthenticationService} from './auth/services/authentication.service';
import {UserService} from './auth/services/user.service';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {MatTableModule} from '@angular/material/table';
import { MemberComponent } from './member/member.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SettingsComponent } from './settings/settings.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HorizontalBarChartComponent,
    GuageChartComponent,
    LineChartDashboardComponent,
    FirstPassRateComponent,
    DashboardTableComponent,
    LineChartFPComponent,
    ClaimsFPTableComponent,
    TrendingInventoryComponent,
    ChartTrendInv,
    TrendInvTableComponent,
    BarChartsComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PopupModalComponent,
    MemberComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdlModule,
    MDBBootstrapModule.forRoot(),
    MdlDatePickerModule,
    RoundProgressModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    HttpModule,
    MatPaginatorModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [
    AuthGuard,
     AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        DataService,
        DatePipe ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  entryComponents:[PopupModalComponent]
})
export class AppModule { }




