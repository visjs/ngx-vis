import { Component } from '@angular/core';

@Component({
    selector: 'home-example',
    template: `
      <div class="jumbotron">
        <h1>ng2-vis</h1>
        <p class="lead"><strong>Note:</strong> these examples mimic the ones for <code>vis</code>, but using <code>ng2-vis</code>.</p>
        <p>
          <a class="btn btn-lg btn-success" href="https://github.com/seveves/ng2-vis" role="button">Get it on GitHub</a>
          <a class="btn btn-lg btn-success" href="http://visjs.org" role="button">Check out visjs.org</a>
        </p>
        </div>
        <h2>Examples</h2>
        <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src="http://visjs.org/images/network.png" alt="Network Examples">
            <div class="caption">
                <h3>Network</h3>
                <p>Display dynamic, automatically organised, customizable network views.</p>
                <p><a routerLink="/network" class="btn btn-primary" role="button">Examples</a></p>
            </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src="http://visjs.org/images/timeline.png" alt="Timeline Examples">
            <div class="caption">
                <h3>Timeline</h3>
                <p>Create a fully customizable, interactive timeline with items and ranges.</p>
                <p><a routerLink="/timeline" class="btn btn-primary" role="button">Examples</a></p>
            </div>
            </div>
        </div>
        </div>
    `,
})
export class HomeComponent {}
