import * as tools from "../../functions/tools.js";
import * as events from "../../events.js";
import * as counters from "../../counters.js";
import * as operations from "../../operations.js";
// Classi
import { NumberedPoint } from "../../draw/numberedPoint.js";
/**
 * @author Lorenzo Di Stefano
 * @version 01.12.2023
 */
// TEST: ResetPoints()
var a = new Test("TEST EVENTS: ResetPoints()");
counters.puntiNumerati.push(new NumberedPoint("1", 200, 200));
counters.puntiNumerati.push(new NumberedPoint("2", 300, 200));
counters.puntiNumerati.push(new NumberedPoint("3", 400, 200));
counters.puntiNumerati.push(new NumberedPoint("4", 500, 200));
counters.puntiNumerati[0].getPoint().setIsMoving(true);
counters.puntiNumerati[1].getPoint().setIsMoving(true);
counters.puntiNumerati[2].getPoint().setIsMoving(true);
events.resetPoints();
for (var i = 0; i < counters.puntiNumerati.length; i++) {
    a.assertEqual("resetPoints(): Point " + String(i), counters.puntiNumerati[i].getPoint().getIsMoving(), false);
}
// TEST: PageClickEvent() [Mouse]
var b = new Test("TEST EVENTS: PageClickEvent() [Mouse]");
counters.puntiNumerati[0].getPoint().checkIsMoving(200, 200);
counters.puntiNumerati[1].getPoint().checkIsMoving(200, 200);
counters.puntiNumerati[2].getPoint().checkIsMoving(200, 200);
counters.puntiNumerati[2].getPoint().checkIsMoving(200, 200);
operations.actions.useMouse = true;
tools.mouseSelect();
b.assertEqual("PageClickEvent(): Point 0", counters.puntiNumerati[0].getPoint().getIsMoving(), true);
b.assertEqual("PageClickEvent(): Point 1", counters.puntiNumerati[1].getPoint().getIsMoving(), false);
b.assertEqual("PageClickEvent(): Point 2", counters.puntiNumerati[2].getPoint().getIsMoving(), false);
b.assertEqual("PageClickEvent(): Point 3", counters.puntiNumerati[3].getPoint().getIsMoving(), false);
operations.actionsReset();
