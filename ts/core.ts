import {CONST_EXPR, Type} from "angular2/src/facade/lang";
import {AngularNavTab, AngularNavTabDefault} from "./src/tab-directive";
import {AngularNavTabs} from "./src/tabs-component";
import {TabListComponent} from "./src/list-component";
import {NextTab} from "./src/next-tab-component"; 

export const ANGULAR_TABS_DIRECTIVES: Type[] = CONST_EXPR([
    AngularNavTab,
    AngularNavTabDefault,
    AngularNavTabs,
    NextTab,
    TabListComponent
]);