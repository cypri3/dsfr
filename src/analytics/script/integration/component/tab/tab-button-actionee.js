import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TabButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TabButtonActionee';
  }

  init () {
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this.listen('click', this.click.bind(this), { capture: true });
  }

  click () {
    this.act();
  }

  get label () {
    const text = this.getFirstText();
    if (text) return text;
    return 'bouton onglet';
  }

  get component () {
    return ID;
  }
}

export { TabButtonActionee };
