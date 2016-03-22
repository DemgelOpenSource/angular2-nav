import {Component, Input} from "angular2/core";
import {NgClass} from "angular2/common";
import {AngularNavTab} from "./tab-directive";

@Component({
    selector: "an-tablist,[an-tablist]",
    template: `<ul [attr.class]="listClass">
                  <li class="an-tablistitem" [ngClass]="{'an-active': tab.active, 'an-inactive': !tab.active, 'an-canactivate': tab.canActivate(), 'an-cantactivate': !tab.canActivate()}" *ngFor="#tab of tabs" (click)="onClick(tab)">
                     {{tab.title}}
                  </li>
              <ul>`,
    exportAs: "anTabList"
})
export class TabListComponent {
    tabs: Array<AngularNavTab> = [];
    activeTab: AngularNavTab;
    @Input('anListClass') listClass: string = "an-tablist";
    
    onClick(ev: AngularNavTab) {
        this.activateByTab(ev);
    }
    
    activateByTab(tab: AngularNavTab) {
        if (tab !== this.activeTab && tab.canActivate()) {
            if (this.activeTab) {
                this.activeTab.deactivate();
            }
            this.activeTab = tab;
            this.activeTab.activate();
        }
    }
    
    activateByKey(key: string) {
        const tab = this.tabs.filter(value => value.key === key);
        if (tab && tab.length > 0) {
            this.onClick(tab[0]);
        }
    }
}