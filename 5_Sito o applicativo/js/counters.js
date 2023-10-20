/**
 * @author Lorenzo Di Stefano
 * @version 13.10.2023
 */
// DICHIARAZIONE VARIABILI.
export var mouseClicks = 0;
export var punti = [];
export var puntiNumerati = [];
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
};
export var mousePosition = {
    x: 0,
    y: 0
};
export var pageSize = {
    x: 0,
    y: 0
};
export var windowsSize = {
    x: 0,
    y: 0
};
export function removeNumberedPoint() {
    var nuovoPunti = [];
    for (var punto of puntiNumerati) {
        if (!punto.getIsRemoved()) {
            nuovoPunti.push(punto);
        }
    }
    puntiNumerati = nuovoPunti;
}
