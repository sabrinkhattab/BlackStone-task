import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import { ListComponent } from './main-layout/sidebar/list/list.component';
import { ListItemComponent } from './main-layout/sidebar/list/list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedsComponent } from './feeds/feeds.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './pages/home/home.component';
import { RightSideComponent } from './right-side/right-side.component';
import { TopComponent } from './right-side/top/top.component';
import { SuggestionsComponent } from './right-side/suggestions/suggestions.component';
import { PostActivityComponent } from './right-side/post-activity/post-activity.component';
import {ToggleComponent} from './main-layout/sidebar/toggle/toggle.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SidebarComponent,
    ListComponent,
    ListItemComponent,
    FeedsComponent,
    StoriesComponent,
    HomeComponent,
    RightSideComponent,
    TopComponent,
    SuggestionsComponent,
    PostActivityComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
