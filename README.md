[![npm version](https://badge.fury.io/js/angular2-tabs.svg)](https://badge.fury.io/js/angular2-tabs)
[![Build Status](https://travis-ci.org/DemgelOpenSource/angular2-tabs.svg?branch=master)](https://travis-ci.org/DemgelOpenSource/angular2-tabs)
# Angular2-Tabs

Simple to use Tab option for Angular2

## Example

### Html
``` html
<an-tablist #list="anTabList" anListClass="diff-class"></an-tablist>
<an-tabs [anList]="list">
    <div *anTabDefault="tabOne">
        The Contents of Tab one
    </div>
    <div *anTab="'hello'">
        The Contents of Tab Two
    </div>
</an-tabs>
```
### Controller
``` ts
import {AngularNavTabs, AngularNavTab, AngularNavTabDefault, TabListComponent} from 'angular2-nav/tabs';

@Component({
    ...
    directives: [AngularNavTabs, 
                 AngularNavTab, 
                 TabListComponent, 
                 AngularNavTabDefault]
})
export class IndexComponent {
    tabOne = {title: 'test Title', canActivate: () => {return true;}}
}
```
### Explanation (html)
#### an-tablist
The location of the TabList, this can be anywhere on the page. A local variable needs to be set, in this case `#list`. The name of `anTabList` is used.
#### an-tabs
The location that the Tabs are going to displayed. Only one will be displayed at a time.
#### anTab
A Template that contains the html that will be displayed when this tab is open.
#### anTabDefault
The default tab to be displayed. The last default tab that can be displayed (using canActivate) will be displayed when the tabs are loaded.
### Explanation (Controller)
#### Tab Object
In this case `tabOne` is used to be pass information to the first tab. Property `title` is the title of the tab, and will be displayed in the tabList. The `canActivate` property is a function used to determine if a tab can be displayed.
## CSS
You will need to customize the list using your own CSS. The list will recieve either `an-tablist` or a custom class name defined with `anListClass`.
### an-active / an-inactive
These classes are added to the `li`.
### an-canactivate / an-cantactivate
These classes are added to the `li` based on if the tab can be activated based on the `canActivate` function passed in.