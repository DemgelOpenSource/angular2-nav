import {Directive, TemplateRef, ViewContainerRef, Input, ViewChildren, QueryList, Host} from "angular2/core";
import {AngularNavTabs} from "./tabs-component";

@Directive({
    selector: "[anTab]",
    inputs: ['anTab']
})
export class AngularNavTab {
    canActivate: Function = () => {return true;};
    an: string;
    anTabs: AngularNavTabs;
    active: boolean = false;
    
    constructor(public templateRef: TemplateRef, public view: ViewContainerRef, @Host() anTabs: AngularNavTabs) {
        this.anTabs = anTabs;
    }
    
    ngOnInit() {
        this.anTabs.list.tabs.push(this);
    }
    
    set anTab(value) {
        if (value !== null && typeof value === 'object') {
            this.an = value.title;
            if (value.canActivate) {
                this.canActivate = value.canActivate;
            }
        } else {
            this.an = value;
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
        this.anTabs.list.onClick(this);
    }
    
    set anTabDefault(value) {
        this.anTab = value;
    }
}
