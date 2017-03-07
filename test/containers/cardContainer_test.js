import { expect, renderComponent } from '../test_helper';
import CardContainer from '../../src/containers/cardContainer';

describe('CardContainer', () => {
  let component;

  beforeEach(() => {
    const props = ['card number one','card number two'];
    component = renderComponent(CardContainer, null, props);
  });

  it('should have class card-container', () => {
    expect(component).to.have.class('card-container');
  });

  it('should have an unordered-list', () => {
    expect(component.find('ul')).to.exist;
  })

  it('should have list items', () => {
    expect(component.find('li').length(2));
  });
});
