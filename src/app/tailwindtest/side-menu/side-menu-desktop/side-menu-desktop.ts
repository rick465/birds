import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-side-menu-desktop',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-desktop.html',
  styleUrl: './side-menu-desktop.css',
  animations: [
    // 選單項目hover動畫
    trigger('menuItemHover', [
      state('normal', style({
        transform: 'translateX(0)',
        color: '#000000'
      })),
      state('hovered', style({
        transform: 'translateX(8px)',
        color: '#a36c6c'
      })),
      transition('normal <=> hovered', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class SideMenuDesktopComponent {
  @Input() selectedIndex: number = 0
  @Output() selectedIndexChange = new EventEmitter<number>()

  menuList = [
    { text: '白頭翁的特性' },
    { text: '白頭翁的故事' },
    { text: '白頭翁的美照' },
    { text: '白頭翁的危機' }
  ];

  hoveredIndex: number = -1;

  selectMenu(idx: number) {
    this.selectedIndex = idx
    this.selectedIndexChange.emit(idx)
  }
}
