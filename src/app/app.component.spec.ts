import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from "primeng/api";
import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { UserListComponent } from "./features/users/components/user-list/user-list.component";

describe('AppComponent', () => {
  let router: Router;
  let location: Location;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        UserListComponent
      ]
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jumia-exercise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jumia-exercise');
  });

  it('navigate to "" redirects you to /users', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/users");
    });
  }));

  it('navigate to "users" takes you to /users', fakeAsync(() => {
    router.navigate(["users"]).then(() => {
      expect(location.path()).toBe("/users");
    });
  }));
});
