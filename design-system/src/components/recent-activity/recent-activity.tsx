import { Component, Host, h, State } from '@stencil/core';
import { cards } from '../../global/data/activity-cards.data';
 
type filterType = 'all' | 'addedPhoto' | 'wroteReview';
let all = 'selected';
let photoAdded = '';
let wroteReview = '';
@Component({
  tag: 'recent-activity',
  styleUrl: 'recent-activity.scss',
  shadow: true,
})
export class RecentActivity {

  @State() filter: filterType = 'all';


  setFilter(filterTo: filterType){
    this.filter = filterTo;

    switch(filterTo){
      case 'all':
        all = 'selected';
        photoAdded = '';
        wroteReview = '';
        break;
      case 'addedPhoto':
        all = '';
        photoAdded = 'selected';
        wroteReview = '';
        break;
      case 'wroteReview':
        all = '';
        photoAdded = '';
        wroteReview = 'selected';
        break;
    }
  }

  renderCards() {
    let cardsToRender;

    if(this.filter === 'all'){
      cardsToRender = cards.map((post) => post)
    } else {
      cardsToRender = cards.filter((post) => post.activity === this.filter)
    }
      return(
        <div class="recent-activity-container">
              {cardsToRender.map((card) => (
                  <activity-card post={card}></activity-card>   
                ))
              }
        </div>
      )
    }

  renderFilterSelector(){
      return(
        <div class="filter-selector">
          <div class={all} onClick={() => this.setFilter('all')}>All</div>
          <span>|</span>
          <div class={photoAdded} onClick={() => this.setFilter('addedPhoto')}>Photo added</div>
          <span>|</span>
          <div class={wroteReview} onClick={() => this.setFilter('wroteReview')}>Review</div>
        </div>
      )
  }
  

  render() {
    return (
      <Host>
        <div class="recent-activity-wrapper">
          <h2>Recent Activity</h2>
              
              {this.renderFilterSelector()}
              {this.renderCards()}

        </div>
        
      </Host>
    );
  }

}
