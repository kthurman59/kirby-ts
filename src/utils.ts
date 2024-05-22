// Making the map
import { KaboomCtx } from "kaboom";
import { scale } from "./constant";

export async function makeMap(k: KaboomCtx, name: string) {
    const mapData = await(await fetch(`./${name}.json`)).json(); 

    const map = k.make([k.sprite(name)])
}