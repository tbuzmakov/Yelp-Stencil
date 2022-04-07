import { Component, h, Host, State, Prop } from '@stencil/core';
import { ActivityCardType } from '../../global/models/activity-card.model';
 

type filterType = 'all' | 'addedPhoto' | 'wroteReview';
let all = 'selected';
let photoAdded = '';
let wroteReview = '';

export interface IRecentActivityEntry {
  cards: Array<ActivityCardType>
  filterByName?: string;
  filterByLocation?: string;
}
@Component({
  tag: 'recent-activity',
  styleUrl: 'recent-activity.scss',
  shadow: true, 
})
export class RecentActivity {

  @Prop() cards: Array<ActivityCardType>;
  @Prop() filterByName?: string = '';
  @Prop() filterByLocation?: string = '';

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

  filterCards(){
    let cardsFiltered = [];
    const placeName = this.filterByName.toLocaleLowerCase();
    const location = this.filterByLocation.toLowerCase();

    
    if(this.filter === 'all'){
      cardsFiltered = this.cards.filter((post) => (
        (placeName === '' && location === '') ? (post) : (post.location.toLocaleLowerCase().includes(location) && post.placeName.toLocaleLowerCase().includes(placeName))))
    } else {
      cardsFiltered = this.cards.filter((post) => (
        (placeName === ''  && location === '') ? (post.activity === this.filter) : (post.location.toLocaleLowerCase().includes(location) && post.placeName.toLocaleLowerCase().includes(placeName) && post.activity === this.filter)))
    }
    return cardsFiltered;
  }


  renderCards() {
    const cardsToRender = this.filterCards();

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
