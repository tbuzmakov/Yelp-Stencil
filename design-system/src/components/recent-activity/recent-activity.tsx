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
        <span>
            {
              cards.map((card) => (
                
                <activity-card post={card}></activity-card>   
                
              ))
            }
        </span>
      );
  }

  render() {
  
    return (
      <Host>
        <div class="recent-activity-wrapper">
          <h3>Recent Activity</h3>
          <div class="recent-activity-container">
  
              {/* {this.renderCards()}
              {this.renderCards()} */}
              {cards.map((card) => (
                
                <activity-card post={card}></activity-card>   
                
              ))
              }
          
          </div>
          
        </div>
        
      </Host>
    );
  }

}
