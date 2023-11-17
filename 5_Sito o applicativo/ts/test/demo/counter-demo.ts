import * as counters from "../../counters.js";
/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */

// Valori di Default

var a:Test = new Test("TEST COUNTERS: controls init");
a.assertEqual("Layer 01"        ,counters.controls.layers.one       ,true);
a.assertEqual("Layer 02"        ,counters.controls.layers.two       ,true);
a.assertEqual("Layer 03"        ,counters.controls.layers.three     ,true);
a.assertEqual("Mouse Clicked"   ,counters.controls.mouse.clicked    ,false);
a.assertEqual("Mouse Clicks"    ,counters.controls.mouse.clicks     ,0);
a.assertEqual("Point Selected"  ,counters.controls.point.selected   ,false);
a.assertEqual("Elements Color"  ,counters.controls.values.color     ,"black");
