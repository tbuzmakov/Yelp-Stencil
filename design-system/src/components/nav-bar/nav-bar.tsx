import { Component, Host, h, Prop} from '@stencil/core';
import { IButtonEntry } from '../button-component/button-component';

export interface INavbarEntry  {
  links:Array<IButtonEntry>,
  buttons:Array<IButtonEntry>
}
@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
})
export class NavBar {

  @Prop() navbarEntry: INavbarEntry;
  
  
  linksRender() {
    return(
      <div class="links">
        {this.navbarEntry.links.map((link) => (
          <button-component buttonEntry={link} ></button-component>
        ))}
      </div>
    )
  }

  buttonsRender() {
    return(
      <div class="btn">
        {this.navbarEntry.buttons.map((btn) => (
          <button-component buttonEntry={btn} ></button-component>
        ))}
      </div>
    )
  }

  render() {
    return (
      <Host>

        {this.linksRender()}
        {this.buttonsRender()}
        
      </Host>
    );
  }

}
