import { Component, HostListener } from '@angular/core';
import { SideMenuDesktopComponent } from '../side-menu/side-menu-desktop/side-menu-desktop';
import { SideMenuMobileComponent } from '../side-menu/side-menu-mobile/side-menu-mobile';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.html',
  styleUrls: ['./app-shell.scss'],
  animations: [
    // 選單由上往下
    trigger('menuAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    // 圖片漸入
    trigger('imageAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    // 說明區由左到右
    trigger('explainAnimation', [
      transition(':enter', [
        query('.explain-item', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          stagger(200, [
            animate('0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ])
      ])
    ]),
    // 說明區由上到下-手機
    trigger('explainAnimationMobile', [
      transition(':enter', [
        query('.explain-item', [
          style({ transform: 'translateY(-50px)', opacity: 0 }),
          stagger(200, [
            animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class AppShell {
  explainList = [
    {
      title: '外觀',
      desc: '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'
    },
    {
      title: '棲地',
      desc: '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'
    },
    {
      title: '食性',
      desc: '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'
    }
  ];

  menuList = [
    { text: '白頭翁的特性' },
    { text: '白頭翁的故事' },
    { text: '白頭翁的美照' },
    { text: '白頭翁的危機' }
  ];
  selectedIndex = 0;
  menuOpen = false;

  selectMenu(idx: number) {
    this.selectedIndex = idx;
    this.menuOpen = false;
  }

  screenWidth = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  trackByDesc(index: number, item: { desc: string }): string {
    return item.desc;
  }
}
