import ref from '../../../ref.js';
import { TableEmission } from './table-emission.js';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends ref.api.Instance {
  static get instanceClassName () {
    return 'Table';
  }

  init () {
    this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }
}

export { Table };
