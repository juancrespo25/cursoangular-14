import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  name: string;
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class IconService {


  private listIcons: Icon[] = [
    { name: "diver", path: "../../assets/icons/driver2.svg" },
    { name: "history", path: "../../assets/icons/historia.svg" },
    { name: "medic", path: "../../assets/icons/medico.svg" },
    { name: "user", path: "../../assets/icons/user2.svg" },
    { name: "dahsboard", path: "../../assets/icons/tablero.svg" },
    { name: "logo", path: "../../assets/icons/ambulance2.svg" },
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    for (let icon of this.listIcons) {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
    }
  }

}
