import { Component, Host, h, Prop, State } from '@stencil/core';

//export type ratingType = 0 | 1 | 2 | 3 | 4 | 5;
export type ratingType = number;

@Component({
  tag: 'stars-component',
  styleUrl: 'stars-component.scss',
  shadow: true,
})

export class StarsComponent {
  
  @State() ratingUpdate: ratingType = 0;
  @Prop() rating: ratingType;
  
  componentWillLoad(){
    this.ratingUpdate = this.rating;
  }

  setRating(ratingToChange: ratingType){
    
    ratingToChange === this.ratingUpdate
      ? this.ratingUpdate = (this.ratingUpdate - 1)
      : this.ratingUpdate = ratingToChange;
  }

  render() {
    return (
      <Host>
        <star-component isSelected={this.ratingUpdate > 0} starSelected={this.ratingUpdate} onClick={() => this.setRating(1)}></star-component>
        <star-component isSelected={this.ratingUpdate > 1} starSelected={this.ratingUpdate} onClick={() => this.setRating(2)}></star-component>
        <star-component isSelected={this.ratingUpdate > 2} starSelected={this.ratingUpdate} onClick={() => this.setRating(3)}></star-component>
        <star-component isSelected={this.ratingUpdate > 3} starSelected={this.ratingUpdate} onClick={() => this.setRating(4)}></star-component>
        <star-component isSelected={this.ratingUpdate > 4} starSelected={this.ratingUpdate} onClick={() => this.setRating(5)}></star-component>
      </Host>
    );
  }

}
