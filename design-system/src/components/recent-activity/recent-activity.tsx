import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'recent-activity',
  styleUrl: 'recent-activity.css',
  shadow: true,
})
export class RecentActivity {

  render() {
    return (
      <Host>
        <div class="recent-activity-container">
          <h3>Recent Activity</h3>
        </div>
        
      </Host>
    );
  }

}
