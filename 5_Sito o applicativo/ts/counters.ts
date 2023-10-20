import { Point } from "./draw/point.js";
import { NumberedPoint } from "./draw/numberedPoint.js";


/**
 * @author Lorenzo Di Stefano
 * @version 13.10.2023
 */

// DICHIARAZIONE VARIABILI.

export var mouseClicks: number      = 0;
export var punti: Point[]           = [];
export var puntiNumerati: NumberedPoint[] = [];

export var controls = {
    mouse: {
        clicked: false,
        clicks: 0
    },
    point: {
        selected: false
    },
    values: {
        color: "black"
    }
}

export var mousePosition = {
    x: 0,
    y: 0
}

export var pageSize = {
    x: 0,
    y: 0
};

export var windowsSize = {
    x: 0,
    y: 0
}

export function removeNumberedPoint(): void{
    var nuovoPunti: NumberedPoint[] = [];
    for(var punto of puntiNumerati) {
        if(!punto.getIsRemoved()){
            nuovoPunti.push(punto);
        }
    }
    puntiNumerati = nuovoPunti;
}