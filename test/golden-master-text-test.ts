//import { Item, GildedRose } from '../app/gilded-rose';
const {Item, GildedRose} = require('../app/gilded-rose');

const inputs = [ new Item('Aged Brie', 10, 48), new Item('Sulfuras, Hand of Ragnaros', 10, 80), new Item('Egg', 30, 8), new Item('Backstage passes to a TAFKAL80ETC concert', 11, 5), new Item('Rice', 1, 14), new Item('Beer', 9, 50), new Item('Tissues', 2, 5), new Item('Bag', 19, 8), new Item('Wine', 13, 5), new Item('Backstage passes to a TAFKAL80ETC concert', 1, 8)];

const gildedRose = new GildedRose(inputs);

gildedRose.updateQuality()
gildedRose.updateQuality()
gildedRose.updateQuality()
const outputs = gildedRose.updateQuality()

console.log(outputs)