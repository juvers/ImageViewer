import { Component, OnInit } from '@angular/core';
import { IonToggle, ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  prefersDark = false;

  imgUrl = `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80`;

  imgAvatar = {
    id: 237,
    src: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    srcHighRes: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    author: 'Jude Kuti',
  };
  imgThumbnail = {
    id: 1040,
    src: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    srcHighRes: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    author: 'Rachel Davis',
  };

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.imgUrl, // required
        title: 'Silhoutte (Programmatic)', // optional
        text: 'Photo by Mayur Gala on Unsplash', // optional
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
  }
}
