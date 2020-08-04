import { Component, OnInit, ViewChild, NgModule, ElementRef } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { ModalService } from '../services//modals/modal.service';
declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html' ,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

constructor(private modalService:ModalService) {}

openModal() {

this.modalService.showModal();

}
  ngOnInit(): void {
    
    $(".navbar-nav li a").click(function(event) {
      if (!$(this).parent().hasClass('dropdown'))
          $(".navbar-collapse").collapse('hide');
    });
    
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      }
    });
  }
}
