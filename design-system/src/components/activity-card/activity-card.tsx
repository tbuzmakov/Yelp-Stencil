import { Component, Host, h, Prop } from '@stencil/core';
import { ActivityCardType } from '../../global/models/activity-card.model';

@Component({
  tag: 'activity-card',
  styleUrl: 'activity-card.css',
  shadow: true,
})
export class ActivityCardComponent {
  
  @Prop() post: ActivityCardType;

  render() {
    return (
      <Host>
        <slot>{this.post.user.name}</slot>
      </Host>
    );
  }

}
