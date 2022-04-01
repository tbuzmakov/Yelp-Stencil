import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
})
export class NavBar {

  render() {
    return (
      <Host>

        {/* Links */}
        <div class="links">
          <button-component title='Write a Review' withBoarder = {false}></button-component>
          <button-component title='Events' withBoarder = {false}></button-component>
          <button-component title='Talk' withBoarder = {false}></button-component>
          <button-component title='Yelp for Business' withBoarder = {false}></button-component>
        </div>
        

        {/* Buttons */}
        <div class="btn">
          <button-component title='Log In' withBoarder = {false}></button-component>
          <button-component title='Sign Up' withBoarder = {true}></button-component>
        </div>
        
        
        
      </Host>
    );
  }

}
