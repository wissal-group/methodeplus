import { Component, OnInit, ViewChild, NgModule, ElementRef } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html' ,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

constructor() {}


  ngOnInit(): void {

  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
    });
    
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
