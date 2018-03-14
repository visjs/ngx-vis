import { Component, OnDestroy, OnInit } from '@angular/core';

import {
    VisEdges,
    VisNetworkData,
    VisNetworkOptions,
    VisNetworkService,
    VisNode,
    VisNodes } from '../../components/network';

class ExampleNetworkData implements VisNetworkData {
    public nodes: VisNodes;
    public edges: VisEdges;
}

@Component({
    selector: 'network-example',
    styles: [
      `.network-canvas {
          width: 100%;
          height: 400px;
          border: 1px solid lightgray;
      }`,
    ],
    template: `
      <h2>Network</h2>
      <h3>Basic usage</h3>
      <div class="network-canvas"
        [visNetwork]="visNetwork"
        [visNetworkData]="visNetworkData"
        [visNetworkOptions]="visNetworkOptions"
        (initialized)="networkInitialized()"></div>
      <button type="button" class="btn btn-default" (click)="addNode()">Add node</button>
      <p>
        <strong>Note:</strong> Open your dev tools to see the console output when the network receives click events.
      </p>
    `,
})
export class VisNetworkExampleComponent implements OnInit, OnDestroy {

    public visNetwork: string = 'networkId1';
    public visNetworkData: ExampleNetworkData;
    public visNetworkOptions: VisNetworkOptions;

    public constructor(private visNetworkService: VisNetworkService) { }

    public addNode(): void {
        const newId = this.visNetworkData.nodes.getLength() + 1;
        this.visNetworkData.nodes.add({ id: newId.toString(), label: 'Node ' + newId });
        this.visNetworkService.fit(this.visNetwork);
    }

    public networkInitialized(): void {
        // now we can use the service to register on events
        this.visNetworkService.on(this.visNetwork, 'click');

        // open your console/dev tools to see the click params
        this.visNetworkService.click
            .subscribe((eventData: any[]) => {
                if (eventData[0] === this.visNetwork) {
                  console.log(eventData[1]);
                }
            });
    }

    public ngOnInit(): void {
        const nodes = new VisNodes([
            { id: '1', label: 'Node 1' },
            { id: '2', label: 'Node 2' },
            { id: '3', label: 'Node 3' },
            { id: '4', label: 'Node 4' },
            { id: '5', label: 'Node 5', title: 'Title of Node 5' }]);

        const edges = new VisEdges([
            { from: '1', to: '3' },
            { from: '1', to: '2' },
            { from: '2', to: '4' },
            { from: '2', to: '5' }]);

        this.visNetworkData = {
            nodes,
            edges,
        };

        this.visNetworkOptions = {};
    }

    public ngOnDestroy(): void {
        this.visNetworkService.off(this.visNetwork, 'click');
    }
}
