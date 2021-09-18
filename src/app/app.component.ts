import {Component} from '@angular/core';
import {MessagingService} from './service/messaging.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification';
  message;

  constructor(private messagingService: MessagingService, private analytics: AngularFireAnalytics) {
  }

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  logEventNotification() {
    this.analytics.logEvent('notification_received');
  }

  logEventClickItem() {
    this.analytics.logEvent( 'select_content', {
      content_type: 'image',
      content_id: 'P12453',
      items: [{name: 'Kittens'}]
    });
  }

}
