import { Component, OnInit, OnDestroy } from '@angular/core';

import * as Vis from 'vis';

import { VisNetworkService } from '../../components/network';

@Component({
    selector: 'network-example',
    template: require('./network-example.component.html'),
    styles: [
        require('./network-example.component.css')
    ]
})
export class VisNetworkExampleComponent implements OnInit, OnDestroy {

    public visNetwork: string = 'networkId1';
    public visNetworkData: Vis.IData;
    public visNetworkOptions: Vis.IOptions;

    public constructor(private visNetworkService: VisNetworkService) { }

    public addNode(): void {
        let length = this.visNetworkData.nodes.length + 1;

        (this.visNetworkData.nodes as Vis.INode[]).push({ id: length.toString(), label: 'Node ' + length});

        let newNetworkData: Vis.IData = {
            nodes: this.visNetworkData.nodes,
            edges: this.visNetworkData.edges
        }
        this.visNetworkData = newNetworkData;
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
        this.visNetworkData = {
            nodes: [
                { id: '1', label: 'Node 1' },
                { id: '2', label: 'Node 2' },
                { id: '3', label: 'Node 3' },
                { id: '4', label: 'Node 4' },
                { id: '5', label: 'Node 5' }
            ],
            edges: [
                { from: '1', to: '3' },
                { from: '1', to: '2' },
                { from: '2', to: '4' },
                { from: '2', to: '5' }
            ]
        };

        this.visNetworkOptions = {};
    }

    public ngOnDestroy(): void {
        this.visNetworkService.off(this.visNetwork, 'click');
    }
}
