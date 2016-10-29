import { VisNetworkService } from './vis-network.service';

describe('VisNetworkService Tests', () => {

  let visNetworkService = new VisNetworkService();

  it('returns undefined when network id is unknown', () => {
    let selection = visNetworkService.getSelection('unkown network id');
    expect(selection).toBeUndefined();
  });
});
