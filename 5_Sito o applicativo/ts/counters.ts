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
    renumberNumberedPoints();
}

export function renumberNumberedPoints(): void{
    var puntiNumeratiVecchio = puntiNumerati;
    var puntiNumeratiNuovo: NumberedPoint[] = [];

    var indice = puntiNumerati.length;

    for(var i=0;i<indice;i++){
        for(var ii=0;ii<puntiNumeratiVecchio.length;ii++){
            if(
                puntiNumeratiVecchio[ii].getId()==minNumberedPoint()
            ){
                puntiNumeratiVecchio[ii].renumber(i+1);
                puntiNumeratiNuovo.push(puntiNumeratiVecchio[ii]);
                puntiNumeratiVecchio.splice(ii,1);
                puntiNumerati = puntiNumeratiVecchio;
                break;
            }
        }
        puntiNumeratiVecchio = puntiNumerati;
    }

    puntiNumerati = puntiNumeratiNuovo;
}

// MIN

function minNumberedPoint(): number{
    if(puntiNumerati.length==0){
        return 0;
    }
    var min: number = puntiNumerati[0].getId();
    for(var puntoNumerato of puntiNumerati){
        if(min > puntoNumerato.getId()){
            min = puntoNumerato.getId()
        }
    }
    return min;
}