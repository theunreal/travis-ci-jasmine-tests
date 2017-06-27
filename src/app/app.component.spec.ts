import {TestBed, async} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AnimeService } from './anime.service';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  let fixture;
  let component;
  let animeService;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpModule],
      providers: [AnimeService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInsance;
      compiled = fixture.debugElement.nativeElement;
      animeService = fixture.debugElement.injector.get(AnimeService);
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should change the title to `New Title!`', async(() => {
    fixture.detectChanges();
    jasmine.createSpy('changeTitle').and.callThrough();

    const button = compiled.querySelector('button');
    button.click();
    return fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(compiled.querySelector('h1').textContent).toBe(`New Title!`);
    });
  }));

  it('should populate the anime section with data', async(() => {
    expect(true).toBe(true);
  }));
});
