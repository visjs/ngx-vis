import { Injectable, EventEmitter } from '@angular/core';
import * as Vis from 'vis';

export interface IFitOptionsAnimation {
  duration: number;
  easingFunction?: string;
}

export interface IFitOptions {
  nodes?: string[];
  animation?: IFitOptionsAnimation | boolean;
}

@Injectable()
export class VisNetworkService {
  public click: EventEmitter<any> = new EventEmitter<any>();
  public doubleClick: EventEmitter<any> = new EventEmitter<any>();
  public oncontext: EventEmitter<any> = new EventEmitter<any>();
  public hold: EventEmitter<any> = new EventEmitter<any>();
  public release: EventEmitter<any> = new EventEmitter<any>();
  public select: EventEmitter<any> = new EventEmitter<any>();
  public selectNode: EventEmitter<any> = new EventEmitter<any>();
  public selectEdge: EventEmitter<any> = new EventEmitter<any>();
  public deselectNode: EventEmitter<any> = new EventEmitter<any>();
  public deselectEdge: EventEmitter<any> = new EventEmitter<any>();
  public dragStart: EventEmitter<any> = new EventEmitter<any>();
  public dragging: EventEmitter<any> = new EventEmitter<any>();
  public dragEnd: EventEmitter<any> = new EventEmitter<any>();
  public hoverNode: EventEmitter<any> = new EventEmitter<any>();
  public blurNode: EventEmitter<any> = new EventEmitter<any>();
  public hoverEdge: EventEmitter<any> = new EventEmitter<any>();
  public blurEdge: EventEmitter<any> = new EventEmitter<any>();
  public zoom: EventEmitter<any> = new EventEmitter<any>();
  public showPopup: EventEmitter<any> = new EventEmitter<any>();
  public hidePopup: EventEmitter<any> = new EventEmitter<any>();
  public startStabilizing: EventEmitter<any> = new EventEmitter<any>();
  public stabilizationProgress: EventEmitter<any> = new EventEmitter<any>();
  public stabilizationIterationsDone: EventEmitter<any> = new EventEmitter<any>();
  public stabilized: EventEmitter<any> = new EventEmitter<any>();
  public resize: EventEmitter<any> = new EventEmitter<any>();
  public initRedraw: EventEmitter<any> = new EventEmitter<any>();
  public beforeDrawing: EventEmitter<any> = new EventEmitter<any>();
  public afterDrawing: EventEmitter<any> = new EventEmitter<any>();
  public animationFinished: EventEmitter<any> = new EventEmitter<any>();
  public configChange: EventEmitter<any> = new EventEmitter<any>();

  private _networks: {[id: string]: any} = [];

  public create(
    visNetwork: string,
    container: HTMLElement,
    data: Vis.IData,
    options?: Vis.IOptions): void {
    this._networks[visNetwork] = new Vis.Network(container, data, options);
  }

  public destroy(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].destroy();
      delete this._networks[visNetwork];
    }
  }

  public on(visNetwork: string, eventName: string): void {
    if (this._networks[visNetwork]) {
      let that: {[index: string]: any} = this;
      this._networks[visNetwork].on(eventName, (params: any) => {
        let emitter = that[eventName] as EventEmitter<any>;
        if (emitter) {
          emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
        }
      });
    }
  }

  public off(visNetwork: string, eventName: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].off(eventName);
    }
  }

  public once(visNetwork: string, eventName: string): void {
    if (this._networks[visNetwork]) {
      let that: {[index: string]: any} = this;
      this._networks[visNetwork].on(eventName, (params: any) => {
        let emitter = that[eventName] as EventEmitter<any>;
        if (emitter) {
          emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
          this.off(visNetwork, eventName);
        }
      });
    }
  }

  public setData(visNetwork: string, data: Vis.IData): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].setData(data);
    }
  }

  public setOptions(visNetwork: string, options: Vis.IOptions): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].setOptions(options);
    }
  }

  public selectNodes(visNetwork: string, nodeIds: string[], highlightEdges?: boolean): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].selectNodes(nodeIds, highlightEdges);
    }
  }

  public getSelection(visNetwork: string): Vis.IData {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelection();
    }
    return undefined;
  }

  public getSelectedNodes(visNetwork: string): string[] {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelectedNodes();
    }
    return undefined;
  }

  public getSelectedEdges(visNetwork: string): string[] {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelectedEdges();
    }
    return undefined;
  }

  public unselectAll(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].unselectAll();
    }
  }

  public fit(visNetwork: string, options?: IFitOptions): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].fit(options);
    }
  }

  public redraw(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].redraw();
    }
  }

  public enableEditMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].enableEditMode();
    }
  }

  public addEdgeMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].addEdgeMode();
    }
  }

  public disableEditMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].disableEditMode();
    }
  }

  public deleteSelected(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].deleteSelected();
    }
  }

  public cluster(visNetwork: string, options?: any): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].cluster(options);
    }
  }

  public openCluster(visNetwork: string, nodeId: string, options?: any): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].openCluster(nodeId, options);
    }
  }

  public isCluster(visNetwork: string, nodeId: string): boolean {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].isCluster(nodeId);
    }

    return false;
  }

  public getSeed(visNetwork: string): number {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSeed();
    }

    return -1;
  }
}
