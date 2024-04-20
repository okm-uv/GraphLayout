type ItemComponents = 'Card1' | 'Card2' | 'Dialog' | 'Image';

export class ItemClass {
  x: number = 0;
  y: number = 0;
  w: number = 1;
  h: number = 1;

  component!: ItemComponents;
  i!: string;

  setSize(_w: number, _h: number) {
    this.w = _w;
    this.h = _h;
  }

  constructor(_component: ItemComponents, _i: string) {
    this.component = _component;
    this.i = _i;
  }
}

export class Card1Class extends ItemClass {
  constructor(i: string) {
    super('Card1', i);
    this.setSize(1, 4);
  }
}

export class Card2Class extends ItemClass {
  constructor(i: string) {
    super('Card2', i);
    this.setSize(3, 3);
  }
}

export class DialogClass extends ItemClass {
  constructor(i: string) {
    super('Dialog', i);
    this.setSize(2, 6);
  }
}

export class ImageClass extends ItemClass {
  constructor(i: string) {
    super('Image', i);
    this.setSize(1, 4);
  }
}
