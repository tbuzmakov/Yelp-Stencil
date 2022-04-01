import { Component, Host, h, Prop, State } from '@stencil/core';

export type ratingType = number;

@Component({
  tag: 'stars-component',
  styleUrl: 'stars-component.scss',
  shadow: true,
})

export class StarsComponent {
  
  @State() ratingUpdate: number = 0;
  @Prop() rating: ratingType;
  
  componentWillLoad(){
    this.ratingUpdate = this.rating;
  }
  
  update(){
    console.log('Update Function');
    this.ratingUpdate = Math.floor((Math.random() * 5));
  }

  setRating(ratingToChange: ratingType){
    
    ratingToChange === this.ratingUpdate
      ? this.ratingUpdate = (this.ratingUpdate - 1)
      : this.ratingUpdate = ratingToChange;

      console.log("Updated to - " + this.ratingUpdate)
  }

  render() {
    console.log('Rerender with ' + this.ratingUpdate)
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
