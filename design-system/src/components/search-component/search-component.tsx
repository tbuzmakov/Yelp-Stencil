import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import SearchIcon from '../../assets/icons/search.svg';

export interface ISearchEntry {
    firstInputTitle: string,
    firsInputType: string,
    firstInputPlaceHolder: string,
    secondInputTitle: string,
    secondInputType: string,
    secondInputPlaceHolder: string,
  }

@Component({
  tag: 'search-component',
  styleUrl: 'search-component.scss',
  shadow: true,
})
export class SearchComponent {

  @Prop() searchBarEntry: ISearchEntry;
  @Event({}) searchPlaceEvent: EventEmitter<string>;
  @Event({}) searchLocationEvent: EventEmitter<string>;


  handleChangeNear(eventInput?: any) {
    this.searchPlaceEvent.emit(eventInput.target.value);
  }
  
  handleChangeLocation(eventInput) {
    this.searchLocationEvent.emit(eventInput.target.value);
  }


  searchBarRender(){ 
    return(
      <div class="search-container">
          
          <div class="find">
            {this.searchBarEntry.firstInputTitle}
          <input onInput={(event) => this.handleChangeNear(event)} type={this.searchBarEntry.firsInputType} placeholder={this.searchBarEntry.firstInputPlaceHolder}></input>
          </div>
          
          <div class="near">
          {this.searchBarEntry.secondInputTitle}
          <input onInput={(event) => this.handleChangeLocation(event)} type={this.searchBarEntry.secondInputType} placeholder={this.searchBarEntry.secondInputPlaceHolder}></input>
          </div>
          
          <div class="search-btn">
            <img src={SearchIcon} alt="search" />
          </div>
        </div>
      )
  }

  render() {
    return (
      <Host>
        {this.searchBarRender()}
      </Host>
    );
  }

}
