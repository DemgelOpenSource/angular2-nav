import {Directive, Input, Host, HostListener, HostBinding} from "angular2/core";
import {AngularNavTab} from "./tab-directive";
import {AngularNavTabs} from "./tabs-component";
import {TabInterface} from "../core";

@Directive({
    selector: "[anNextTab]"
})
export class NextTab {
    tab: AngularNavTab;
    @HostBinding('class.an-cantactivate') get cantactivate() {
        return !this.tab.canActivate();
    }
    @HostBinding('class.an-canactivate') get canactivate() {
        return this.tab.canActivate();
    }
    @HostBinding('innerHTML') get html() {
        return this.tab.title;
    }
    
    constructor(@Host() private anTabs: AngularNavTabs) {}
    
    @HostListener('click', [])
    onClick() {
        this.anTabs.activateTab(this.tab.key);
    }
    
    @Input("anNextTab") set nextTab(value: string | TabInterface) {
        let tabs: Array<AngularNavTab> = [];
        if (typeof value === 'string') {
            tabs = this.anTabs.list.tabs.filter(tab => tab.key === value);
        } else {
            tabs = this.anTabs.list.tabs.filter(tab => tab.key === value.id);
        }
        if (tabs.length > 0) {
            this.tab = tabs[0];
        }
    }
}