import {Injectable} from '@angular/core';

import {ModalDirective} from 'ng-uikit-pro-standard';

@Injectable({

  providedIn: 'root'

})

export class ModalService {

  yourModal: ModalDirective;

  constructor() {
  }

  setModal(modal: ModalDirective) {

    this.yourModal = modal;

  }

  showModal() {

    this.yourModal.show();

  }

  hideModal() {

    this.yourModal.hide();

  }

}
