import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';

//Import HttpClientModule
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    NotFoundComponent,
    DetailsActorsComponent,
    FeedbackComponent,

    //Pipes
    ProfitPipe,
    
    //Directives
    HeaderDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-pf8s6elr.auth0.com',
      clientId: 'KaXbPvKcgUaDsGf0lqRH1jbhBDpm6jLk',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [MoviesService, 
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
