import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('fixme');
    });

});
