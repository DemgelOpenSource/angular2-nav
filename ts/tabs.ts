export {AngularNavTab, AngularNavTabDefault} from "./src/tab-directive";
export {AngularNavTabs} from "./src/tabs-component";
export {TabListComponent} from "./src/list-component";
export {NextTab} from "./src/next-tab-component";

export interface TabInterface {
    id?: string;
    title: string;
    canActivate?: Function;
}
