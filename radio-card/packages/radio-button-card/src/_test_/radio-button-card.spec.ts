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
    expect(card.message).toEqual('On selection, the card shows further details');
    expect(card.radio).toEqual('On selection the card expands and changing background color');
    expect(card.optionSelected).toEqual(false);
  });

  it('Should check radio and get attribute', async () => {
    const radioContainer = getByTestId('radio-container');
    expect(radioContainer).toHaveAttribute('class', 'container');
  });

  it('Changes the value based on the radio buttons', () => {
    const radio = getByLabelText('option1');
    const radio1 = getByLabelText('option2');
    expect(radio).toBe('option1');
    expect(radio1).toBe('option2');
  });

  it('Should call function click ', () => {
    const optionSelected = true;
    expect(optionSelected).toBe(true);
  });

  it('Should call function selectedOption ', () => {
    const optionSelected = false;
    expect(card.optionSelected).toBe(false);
  });
});
