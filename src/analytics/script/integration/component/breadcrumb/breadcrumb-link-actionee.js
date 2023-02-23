import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class BreadcrumbLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { BreadcrumbLinkActionee };
