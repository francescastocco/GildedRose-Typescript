import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('quality of beer should decrease by 1 if quality is > 0', function() {
        const gildedRose = new GildedRose([ new Item('beer', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    it('if backstage passes sellin date is higher than 10, quality should increase by 1', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(11);
    });

    it('if backstage passes sellin date is < 11 & > 5, quality should increase by 2', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
    });

    it('if backstage passes sellin date is less than 6, quality should increase by 3', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
    });

    it('Sulfuras, Hand of Ragnaros sellIn should not change', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(5);
    });

    it('sellIn should decrease by 1 for Aged Brie', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 12, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(11);
    });

    it('quality should increase by 2 if sellIn < 0 for Aged Brie', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(12);
    });
    
    it('quality should decrease to 0 if sellIn < 0 for backstage passes', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('quality should decrease by 2 if sellIn < 0', function() {
        const gildedRose = new GildedRose([ new Item('Eggs', -1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });
});
