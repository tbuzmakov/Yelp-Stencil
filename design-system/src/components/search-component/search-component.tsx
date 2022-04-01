import { Component, Host, h } from '@stencil/core';
import SearchIcon from '../../assets/icons/search.svg';

@Component({
  tag: 'search-component',
  styleUrl: 'search-component.scss',
  shadow: true,
})
export class SearchComponent {

  render() {
    return (
      <Host>


        <div class="search-container">
          
          <div class="find">
            Find
          <input type="text" placeholder="burgers, barbers, spas, handyman"></input>
          </div>
          
          
          <div class="near">
            Near
          <input type="text" placeholder="Vanvoucer, BC"></input>
          </div>
          
          

          <div class="search-btn">
            <img src={SearchIcon} alt="search" />
          </div>
        </div>
        
      </Host>
    );
  }

}
