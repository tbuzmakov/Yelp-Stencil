import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import Star from '../../assets/icons/star.svg'

@Component({
  tag: 'star-component',
  styleUrl: 'star-component.scss',
  shadow: true,
})


export class StarComponent {
  
  @Prop() isSelected: boolean;
  @Prop() starSelected: number;
  @State() starColor = '';
  
  componentWillLoad(){
    this.setStarColor();
  }

  @Watch('starSelected')
  watchPropHandler(newValue: number, oldValue: number) {
    this.setStarColor();
    }

  setStarColor(){
    switch(this.starSelected){
      case 5:
        this.starColor = 'five';
        break;
      case 4:
        this.starColor = 'four';
        break;
      case 3:
        this.starColor = 'three';
        break;
      case 2:
        this.starColor = 'two';
        break;
      case 1:
        this.starColor = 'one';
        break;
      }
  }
  

  render() {
    return (
      <Host>
      {
      this.isSelected ? 
        <div class={`star-selected ${this.starColor}`}>
          <img src={Star} alt="" />
        </div>:  
        <div class="star-not-selected">
          <img src={Star} alt="" />
        </div>
      }
      </Host>
    );
  }

}
