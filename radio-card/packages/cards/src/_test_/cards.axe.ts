import { OrxeCards } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-cards-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Cards;

  beforeEach(async () => {
    OrxeCards;
    document.body.appendChild(document.createElement('Cards'));
    Cards = document.querySelector('Cards') as OrxeCards;
  });

  afterEach(() => {
    Cards.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Cards);
    expect(result).toHaveNoViolations();
  });
});
