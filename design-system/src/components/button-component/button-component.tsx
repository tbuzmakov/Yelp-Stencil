import { Component, h, Host, Prop } from '@stencil/core';

export interface IButtonEntry {
  title: string,
  withBorder: boolean
}
@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {
  
  @Prop() buttonEntry: IButtonEntry;

  render() {
    return (
      <Host>

        {this.buttonEntry.withBorder ? <button class="btn">{this.buttonEntry.title}</button> : <button class="btn-without-border">{this.buttonEntry.title}</button>}
        
      </Host>
    );
  }

}
