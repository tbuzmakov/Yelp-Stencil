import { Component, h, Host, State, Listen } from '@stencil/core';

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

  @State() search = '';

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

    if(this.filter === 'all'){
      cardsFiltered = cards.filter((post) => (
        this.search === '' ? (post) : (post.placeName.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))))
    } else {
      cardsFiltered = cards.filter((post) => (
        this.search === '' ? (post.activity === this.filter) : (post.placeName.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) && post.activity === this.filter)))
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


  @Listen("searchEvent", {target: "body"})
  searchHandler(event: CustomEvent<string>){
    this.search = event.detail;
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
