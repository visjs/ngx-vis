import { Component, OnInit, OnDestroy } from '@angular/core';

import {
    VisNode,
    VisNodes,
    VisEdges,
    VisNetworkService,
    VisNetworkData,
    VisNetworkOptions } from '../../components/network';

class ExampleNetworkData implements VisNetworkData {
    public nodes: VisNodes;
    public edges: VisEdges;
}

@Component({
    selector: 'network-example',
    template: require('./network-example.component.html'),
    styles: [
        require('./network-example.component.css')
    ]
})
export class VisNetworkExampleComponent implements OnInit, OnDestroy {

    public visNetwork: string = 'networkId1';
    public visNetworkData: ExampleNetworkData;
    public visNetworkOptions: VisNetworkOptions;

    public constructor(private visNetworkService: VisNetworkService) { }

    public addNode(): void {
        let newId = this.visNetworkData.nodes.getLength() + 1;
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
        let nodes = new VisNodes([
            { id: '1', label: 'Node 1' },
            { id: '2', label: 'Node 2' },
            { id: '3', label: 'Node 3' },
            { id: '4', label: 'Node 4' },
            { id: '5', label: 'Node 5' }]);

        let edges = new VisEdges([
            { from: '1', to: '3' },
            { from: '1', to: '2' },
            { from: '2', to: '4' },
            { from: '2', to: '5' }]);

        this.visNetworkData = {
            nodes: nodes,
            edges: edges
        };

        this.visNetworkOptions = {};
    }

    public ngOnDestroy(): void {
        this.visNetworkService.off(this.visNetwork, 'click');
    }
}
