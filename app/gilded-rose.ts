export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const itemName = this.items[i].name
            let itemQuality = this.items[i].quality
            let itemSellIn = this.items[i].sellIn
            if (itemQuality > 0 && itemName != 'Aged Brie' && itemName != 'Backstage passes to a TAFKAL80ETC concert' && itemName != 'Sulfuras, Hand of Ragnaros') {
                itemQuality--;
                if (itemSellIn < 1) {
                    itemQuality--;
                }
            } else if (itemQuality < 50) {
                itemQuality++;
            }
            if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
                if (itemSellIn < 11 && itemQuality < 50) {
                    itemQuality++;
                }
                if (itemSellIn < 6 && itemQuality < 50) {
                    itemQuality++;
                }
            }
            if (itemName != 'Sulfuras, Hand of Ragnaros') {
                itemSellIn--;
            }
            if (itemSellIn < 0) {
                if (itemName === 'Aged Brie' && itemQuality < 50) {
                    itemQuality = itemQuality + 1
                }
                if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
                    itemQuality = 0
                }
            }
            this.items[i].quality = itemQuality
            this.items[i].sellIn = itemSellIn
        }
        console.log(this.items)
        return this.items;
    }
}
