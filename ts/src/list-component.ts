import {Component, Input} from "angular2/core";
import {NgClass} from "angular2/common";
import {AngularNavTab} from "./tab-directive";

@Component({
    selector: "an-tablist,[an-tablist]",
    template: `<ul [attr.class]="listClass">
                  <li class="an-tablistitem" [ngClass]="{'an-active': tab.active, 'an-inactive': !tab.active, 'an-canactivate': tab.canActivate(), 'an-cantactivate': !tab.canActivate()}" *ngFor="#tab of tabs" (click)="onClick(tab)">{{tab.an}}
                  </li>
              <ul>`,
    exportAs: "anTabList"
})
export class TabListComponent {
    tabs: Array<AngularNavTab> = [];
    @Input('anListClass') listClass: string = "an-tablist";
    
    onClick(ev: AngularNavTab) {
        if (ev.canActivate()) {
            this.tabs.forEach(tab => {
                if (ev !== tab) {
                    tab.deactivate();
                }
            });
        
            if (!ev.active) {
                ev.activate();
            }
        }
    }
}