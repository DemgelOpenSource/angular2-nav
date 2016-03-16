import {Directive, Input, ViewChildren, QueryList, Optional, HostViewRef} from "angular2/core";
import {AngularNavTab} from "./tab-directive";
import {TabListComponent} from "./list-component";

@Directive({
    selector: "an-tabs,[anTabs]"
})
export class AngularNavTabs {
    @Input("align") alignment: string;
    @Input("anList") list: TabListComponent;
    
    constructor() {
    }
}