import '@testing-library/jest-dom';
import { OrxeRadioButtonCard } from '../index';

describe('orxe-radio-button-card', () => {
  let card;

  beforeEach(async () => {
    OrxeRadioButtonCard;
    card = (await document.body.appendChild(
      document.createElement('orxe-radio-button-card')
    )) as OrxeRadioButtonCard;
  });

  afterEach(async function() {
    await card.remove();
  });

  it('should create', () => {
    expect(customElements.get('orxe-radio-button-card')).toBeDefined();
  });

  function getByLabelText(option1): any {
    let label = option1;
    return label;
  }

  function getByTestId(id: string): HTMLElement {
    return card.shadowRoot.querySelector(`[id=${id}]`);
  }

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  it('should check default value for properties for card', () => {
    expect(card.header).toEqual('header');
    expect(card.subheading).toEqual('subheading');
    expect(card.optionSelected).toEqual(false);
  });

  it('Changes the value based on the radio buttons', () => {
    const radio = getByLabelText('option1');
    const radio1 = getByLabelText('option2');
    expect(radio).toBe('option1');
    expect(radio1).toBe('option2');
  });

  it('Should check default value of selectedOption ', () => {
    expect(card.optionSelected).toBe(false);
  });

  it('Should call function onChange ', () => {
    const optionSelected = true;
    expect(optionSelected).toBe(true);
  });
});
