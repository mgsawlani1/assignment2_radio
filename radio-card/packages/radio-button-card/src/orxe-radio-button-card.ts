import { customElement, html, LitElement, property } from 'lit-element';
import styles from './radio-button-card-css';

@customElement('orxe-radio-button-card')
export default class OrxeRadioButtonCard extends LitElement {
  @property({ type: String, attribute: 'header' })
  header = 'header';

  @property({ type: String, attribute: 'subheading' })
  subheading = 'subheading';

  @property({ type: String, attribute: 'label' })
  label = '';

  @property({ type: String, attribute: 'points' })
  points = '';

  @property({ type: String, attribute: 'id' })
  id = 'option1';

  @property({ type: String, attribute: 'name' })
  name = 'option1';

  @property({ type: String, attribute: 'value' })
  value = 'option1';

  @property({ type: String, attribute: 'selected' })
  optionSelected = false;

  render() {
    return html`
      <div class="card">
        <p>${this.header}</p>
        <div class="radio-input">
          <p>${this.subheading}</p>
          <p>${this.points}</p>
          <input
            type="radio"
            id=${this.id}
            name=${this.name}
            value=${this.value}
            @change=${this.onChange}
          />
          <label for="redeemedPoint">${this.label} </label><br />

          ${this.optionSelected
            ? html`
                <slot></slot>
              `
            : html``}
        </div>
      </div>
    `;
  }
  onChange() {
    this.optionSelected = true;
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
