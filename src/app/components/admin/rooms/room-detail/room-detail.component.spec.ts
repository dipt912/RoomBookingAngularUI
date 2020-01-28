import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailComponent } from './room-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../../../../services/data.service';
import { Layout } from '../../../../Models/Room';

describe('RoomDetailComponent', () => {
  let component: RoomDetailComponent;
  let dataService: DataService;
  let fixture: ComponentFixture<RoomDetailComponent>;

  beforeEach(async(() => {
    dataService = new DataService();

    TestBed.configureTestingModule({
      declarations: [ RoomDetailComponent ],
      imports : [ RouterTestingModule],
      providers: [ {
        provide: DataService ,  useValue: dataService
      } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailComponent);
    component = fixture.componentInstance;
    component.room =  { id: 1,  name: '', location: '', capacities: [ {capacity : 10, layout: Layout.THEATER}]  };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
