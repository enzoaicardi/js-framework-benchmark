import { useDefine } from "vifjs";
import { Store } from "./store";

/** @type {import("vifjs").VifRenderFunction} */
function MainElement({ props }) {
    const store = new Store(props);

    props.selected = store.selected;
    props.rows = store.data;

    props.handleClick = (e) => {
        const { action, id } = e.target.dataset;
        if (action) {
            store[action](id);
        }
    };
}

useDefine("main-element", MainElement);
