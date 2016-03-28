import {Directive, TemplateRef, ViewContainerRef, Input, ViewChildren, QueryList, Host} from "angular2/core";
import {AngularNavTabs} from "./tabs-component";
import {TabInterface} from "../core";

@Directive({
    selector: "[anTab]",
    inputs: ['anTab']
})
export class AngularNavTab {
    canActivate: Function = () => {return true;};
    key: string;
    title: string;
    anTabs: AngularNavTabs;
    active: boolean = false;
    
    constructor(public templateRef: TemplateRef, public view: ViewContainerRef, @Host() anTabs: AngularNavTabs) {
        this.anTabs = anTabs;
    }
    
    ngOnInit() {
        this.anTabs.list.tabs.push(this);
    }
    
    set anTab(value: TabInterface | string) {
        if (typeof value === 'object') {
            if (value.title) {
                this.title = value.title;
            } else {
                throw "Title is required if an Object is passed into AngularNavTab";
            }
            
            if (value.canActivate) {
                this.canActivate = value.canActivate;
            }
            if (value.id) {
                this.key = value.id;
            } else {
                this.key = value.title;
            }
        } else {
            this.title = value;
            this.key = value;
        }
    }
    
    activate() {
        if (!this.active) {
            this.view.createEmbeddedView(this.templateRef);
            this.active = true;
        }
    }
    
    deactivate() {
        if (this.active) {
            this.view.clear();
            this.active = false;
        }
    }
}

@Directive({
    selector: "[anTabDefault]",
    inputs: ['anTabDefault']
})
export class AngularNavTabDefault extends AngularNavTab {
    constructor(templateRef: TemplateRef, view: ViewContainerRef, @Host() anTabs: AngularNavTabs) {
        super(templateRef, view, anTabs);
    }
    
    ngOnInit() {
        super.ngOnInit();
        this.anTabs.list.activateByTab(this);
    }
    
    set anTabDefault(value) {
        this.anTab = value;
    }
}
