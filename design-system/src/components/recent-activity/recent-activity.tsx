import { Component, Host, h } from '@stencil/core';
import { cards } from '../../global/data/activity-cards.data';
 
@Component({
  tag: 'recent-activity',
  styleUrl: 'recent-activity.css',
  shadow: true,
})
export class RecentActivity {


  renderCards() {
      return(
        <div>
            {
              cards.map((card) => (
                
                  <div>
                    <activity-card post={card}></activity-card>   
                  </div>
                  
                
              ))
            }
        </div>
      );
  }

  render() {
  
    return (
      <Host>
        <div class="recent-activity-container">
          <h3>Recent Activity</h3>
          <div>
          {this.renderCards()}
          </div>
          
        </div>
        
      </Host>
    );
  }

}
