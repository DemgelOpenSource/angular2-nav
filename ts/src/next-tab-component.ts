import {Directive, Input, Host} from "angular2/core";
import {AngularNavTab} from "./tab-directive";
import {AngularNavTabs} from "./tabs-component";

@Directive({
    selector: "[anNextTab]",
    host: {
        "(click)": "onClick()"
    }
})
export class NextTab {
    @Input("anNextTab") nextTab: string;
    
    constructor(@Host() private anTabs: AngularNavTabs) {}
    
    onClick() {
        this.anTabs.activateTab(this.nextTab);
    }
}