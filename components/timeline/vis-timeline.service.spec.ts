import {
  VisTimelineGroups,
  VisTimelineItems,
  VisTimelineService } from './index';

describe('VisTimelineService Tests', () => {

  let visTimelineService: VisTimelineService;

  beforeEach(() => {
    visTimelineService = new VisTimelineService();
  });

  it('throws no error when the network does not exist', () => {
    visTimelineService.destroy('unknown');
    visTimelineService.off('unknown', 'click');
  });

  it('throws error when network already exists', () => {
    const dummyElement = document.createElement('div');
    const items = new VisTimelineItems([
            {id: 1, content: 'item 1', start: '2016-04-20'},
            {id: 2, content: 'item 2', start: '2016-04-14'},
            {id: 3, content: 'item 3', start: '2016-04-18'},
            {id: 4, content: 'item 4', start: '2016-04-16', end: '2016-04-19'},
            {id: 5, content: 'item 5', start: '2016-04-25'},
            {id: 6, content: 'item 6', start: '2016-04-27', type: 'point'},
        ]);
    const groups = new VisTimelineGroups();
    visTimelineService.createWithItems('knownNetwork', dummyElement, items);
    expect(() => visTimelineService.createWithItems('knownNetwork', dummyElement, items)).toThrowError();
    expect(() => visTimelineService.createWithItemsAndGroups(
      'knownNetwork', dummyElement, items, groups)).toThrowError();
  });

  it('returns false when network does not exist', () => {
    expect(visTimelineService.on('unknown', 'click')).toBe(false);
  });

  it('throws error when network does not exist', () => {
    const items = new VisTimelineItems([
            {id: 1, content: 'item 1', start: '2016-04-20'},
            {id: 2, content: 'item 2', start: '2016-04-14'},
            {id: 3, content: 'item 3', start: '2016-04-18'},
            {id: 4, content: 'item 4', start: '2016-04-16', end: '2016-04-19'},
            {id: 5, content: 'item 5', start: '2016-04-25'},
            {id: 6, content: 'item 6', start: '2016-04-27', type: 'point'},
        ]);
    const groups = new VisTimelineGroups();

    expect(() => visTimelineService.setData('unknown', { items, groups })).toThrowError();
    expect(() => visTimelineService.setItems('unknown', items)).toThrowError();
    expect(() => visTimelineService.setGroups('unknown', groups)).toThrowError();
    expect(() => visTimelineService.setOptions('unknown', {} as any)).toThrowError();
    expect(() => visTimelineService.addCustomTime('unknown', Date.now())).toThrowError();
    expect(() => visTimelineService.fit('unknown', {})).toThrowError();
    expect(() => visTimelineService.fit('unknown')).toThrowError();
    expect(() => visTimelineService.focusOnId('unknown', 12, {})).toThrowError();
    expect(() => visTimelineService.focusOnId('unknown', 12)).toThrowError();
    expect(() => visTimelineService.focusOnIds('unknown', [12, 11], {})).toThrowError();
    expect(() => visTimelineService.focusOnIds('unknown', [12, 11])).toThrowError();
    expect(() => visTimelineService.getCurrentTime('unknown')).toThrowError();
    expect(() => visTimelineService.getCustomTime('unknown')).toThrowError();
    expect(() => visTimelineService.getCustomTime('unknown', 12)).toThrowError();
    expect(() => visTimelineService.getEventProperties('unknown', new Event('click'))).toThrowError();
    expect(() => visTimelineService.getItemRange('unknown')).toThrowError();
    expect(() => visTimelineService.getSelection('unknown')).toThrowError();
    expect(() => visTimelineService.getVisibleItems('unknown')).toThrowError();
    expect(() => visTimelineService.getWindow('unknown')).toThrowError();
    expect(() => visTimelineService.moveTo('unknown', Date.now())).toThrowError();
    expect(() => visTimelineService.moveTo('unknown', Date.now(), {})).toThrowError();
    expect(() => visTimelineService.redraw('unknown')).toThrowError();
    expect(() => visTimelineService.removeCustomTime('unknown', 12)).toThrowError();
    expect(() => visTimelineService.setCustomTime('unknown', Date.now())).toThrowError();
    expect(() => visTimelineService.setCustomTime('unknown', Date.now(), 12)).toThrowError();
    expect(() => visTimelineService.setCustomTimeTitle('unknown', 'title')).toThrowError();
    expect(() => visTimelineService.setSelectionToId('unknown', 12)).toThrowError();
    expect(() => visTimelineService.setSelectionToIds('unknown', [12, 11])).toThrowError();
    expect(() => visTimelineService.setWindow('unknown', Date.now(), Date.now())).toThrowError();
    expect(() => visTimelineService.setWindow('unknown', Date.now(), Date.now(), {})).toThrowError();
  });
});
