import { Component, OnInit } from "@angular/core";
import { NavigationMenuItem } from "../../entities/navigation-menu-item";
import { NavigationMenuService } from "../../entityServices/navigation-menu-service";

@Component({
    selector: 'nav-menu',
    styleUrls: ['nav-menu.component.scss'],
    templateUrl: 'nav-menu.component.html'
  })
export class NavMenuComponent implements OnInit {
    
    public items : NavigationMenuItem[];

    constructor(
      private navigationMenuService: NavigationMenuService
    ) {

    }

    ngOnInit(): void {
        this.navigationMenuService.getNavigationMenuItems()
          .subscribe(result => this.items = result);
    }
}