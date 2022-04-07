import { Component, Host, h, Prop } from '@stencil/core';
import Star from '../../assets/icons/star.svg'

@Component({
  tag: 'star-component',
  styleUrl: 'star-component.scss',
  shadow: true,
})


export class StarComponent {
  
  @Prop() isSelected: boolean;
  @Prop() starSelected: number;


  render() {    
    return (
      <Host>
        <div class={{"star-selected": true, "star-not-selected": !this.isSelected}}>
          <img src={Star} alt="" />
        </div>
      </Host>
    );
  }

}
