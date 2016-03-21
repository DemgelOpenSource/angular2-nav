import {Directive, Input} from "angular2/core";
import {AngularNavTab} from "./tab-directive";

@Directive({
    selector: "[anNextTab]",
    host: {
        "click": "onClick()"
    }
})
export class NextTab {
    @Input("anNextTab") nextTab: AngularNavTab;
    
    onClick() {
        this.nextTab.anTabs.list.onClick(this.nextTab);
    }
}