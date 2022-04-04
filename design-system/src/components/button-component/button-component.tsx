import { Component, h, Host, Prop } from '@stencil/core';

export type btnType = {
  title: string,
  withBorder: boolean
}
@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {
  
  @Prop() props: btnType;

  render() {
    return (
      <Host>

        {this.props.withBorder ? <button class="btn">{this.props.title}</button> : <button class="btn-without-border">{this.props.title}</button>}
        
      </Host>
    );
  }

}
