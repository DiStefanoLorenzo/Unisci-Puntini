import * as counters from "../counters.js";

/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */

export function getPageInfo(): void{
    counters.pageSize.x = document.body.clientWidth;
    counters.pageSize.y = document.body.clientHeight;
}

export function getWindowInfo(){
    counters.windowsSize.x = window.innerWidth;
    counters.windowsSize.y = window.innerHeight;
}

export function getMouseInfo(event: any): void{
    counters.mousePosition.x = event.clientX - counters.pageSize.x/4;
    counters.mousePosition.y = event.clientY - 60;
}

export function getInfos(){
    getPageInfo();
    getWindowInfo();
}

