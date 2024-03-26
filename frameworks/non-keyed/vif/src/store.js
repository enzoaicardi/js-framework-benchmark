"use strict";

import { useSignal } from "vifjs";

function _random(max) {
    return Math.round(Math.random() * 1000) % max;
}

export class Store {
    constructor(props) {
        this.props = props;
        this.data = useSignal([]);
        this.selected = useSignal(undefined);
        this.id = 1;
    }

    // prettier-ignore
    buildData(count = 1000) {
        var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
        var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
        var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
        var data = [];
        for (var i = 0; i < count; i++)
        data.push({
            id: this.id++,
            label:
            adjectives[_random(adjectives.length)] +
            " " +
            colours[_random(colours.length)] +
            " " +
            nouns[_random(nouns.length)],
        });
        return data;
    }

    updateData(mod = 10) {
        for (let i = 0; i < this.data.value.length; i += mod) {
            this.data.value[i].label += " !!!";
            this.data.value[i] = { ...this.data.value[i] };
        }
        this.sync();
    }

    delete(id) {
        const idx = this.data.value.findIndex((d) => d.id == id);
        this.data(this.data.value.filter((e, i) => i != idx));
    }

    run() {
        this.data(this.buildData());
        this.selected(undefined);
    }

    add() {
        this.data(this.data.value.concat(this.buildData(1000)));
    }

    update() {
        this.updateData();
    }

    select(id) {
        this.selected(id);
    }

    runLots() {
        this.data(this.buildData(10000));
        this.selected(undefined);
    }

    clear() {
        this.data([]);
        this.selected(undefined);
    }

    swapRows() {
        if (this.data.value.length > 998) {
            var a = this.data.value[1];
            this.data.value[1] = this.data.value[998];
            this.data.value[998] = a;
        }
        this.sync();
    }

    sync() {
        this.data(this.data.value);
    }
}
