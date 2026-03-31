import { ElementRef, SimpleChange } from '@angular/core';
import { VisNetworkDirective } from './vis-network.directive';
import { VisNetworkService } from './vis-network.service';

describe('VisNetworkDirective Tests', () => {
  let directive: VisNetworkDirective;
  let mockService: jasmine.SpyObj<VisNetworkService>;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('VisNetworkService', ['create', 'destroy', 'setData', 'setOptions']);
    mockElementRef = new ElementRef(document.createElement('div'));
    directive = new VisNetworkDirective(mockElementRef, mockService);
    directive.visNetwork = 'testNetwork';
    directive.visNetworkData = { nodes: [], edges: [] };
  });

  it('creates the network on init when visNetwork and visNetworkData are set', () => {
    directive.ngOnInit();
    expect(mockService.create).toHaveBeenCalledOnceWith(
      'testNetwork',
      mockElementRef.nativeElement,
      directive.visNetworkData,
      undefined
    );
  });

  it('does not create the network on init when visNetworkData is missing', () => {
    directive.visNetworkData = undefined;
    directive.ngOnInit();
    expect(mockService.create).not.toHaveBeenCalled();
  });

  it('calls setData when visNetworkData changes after initialization', () => {
    directive.ngOnInit();

    const newData: import('vis-network').Data = { nodes: [{ id: 1 }], edges: [] };
    directive.ngOnChanges({
      visNetworkData: new SimpleChange({ nodes: [], edges: [] }, newData, false),
    });

    expect(mockService.setData).toHaveBeenCalledOnceWith('testNetwork', newData);
    expect(mockService.setOptions).not.toHaveBeenCalled();
  });

  it('calls setOptions when visNetworkOptions changes after initialization', () => {
    directive.ngOnInit();

    const newOptions = { physics: { enabled: false } };
    directive.ngOnChanges({
      visNetworkOptions: new SimpleChange(undefined, newOptions, false),
    });

    expect(mockService.setOptions).toHaveBeenCalledOnceWith('testNetwork', newOptions);
    expect(mockService.setData).not.toHaveBeenCalled();
  });

  it('does not call setData or setOptions on first change', () => {
    directive.ngOnChanges({
      visNetworkData: new SimpleChange(undefined, directive.visNetworkData, true),
    });

    // network gets created but setData is not called for first change
    expect(mockService.setData).not.toHaveBeenCalled();
    expect(mockService.setOptions).not.toHaveBeenCalled();
  });

  it('destroys the network on destroy', () => {
    directive.ngOnInit();
    directive.ngOnDestroy();
    expect(mockService.destroy).toHaveBeenCalledOnceWith('testNetwork');
  });
});
