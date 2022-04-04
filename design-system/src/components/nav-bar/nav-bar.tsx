import { Component, Host, h, Prop} from '@stencil/core';
import { btnType } from '../button-component/button-component';


export type navBarType = {
  links:Array<btnType>,
  buttons:Array<btnType>
}
@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
})
export class NavBar {

  @Prop() props: navBarType;
  
  
  linksRender() {
    return(
      <div class="links">
        {this.props.links.map((link) => (
          <button-component props={link} ></button-component>
        ))}
      </div>
    )
  }

  buttonsRender() {
    return(
      <div class="btn">
        {this.props.buttons.map((btn) => (
          <button-component props={btn} ></button-component>
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
