import * as main from "../../main.js";
import * as operations from "../../operations.js";
/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */

var a:Test = new Test("TEST OPERATIONS: actions init");
a.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
a.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
a.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
a.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
a.assertEqual("Draw"            ,operations.actions.draw            ,false);
a.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var b:Test = new Test("TEST OPERATIONS: actions useMouse");
main.MOUSE_BTN.status = true;
operations.useMouse();
main.MOUSE_BTN.status = false;
b.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,true);
b.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
b.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
b.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
b.assertEqual("Draw"            ,operations.actions.draw            ,false);
b.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var c:Test = new Test("TEST OPERATIONS: actions insertPoint");
operations.insertPoint();
c.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
c.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
c.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
c.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
c.assertEqual("Draw"            ,operations.actions.draw            ,false);
c.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var d:Test = new Test("TEST OPERATIONS: actions insertLine");
operations.insertLine();
d.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
d.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
d.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
d.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
d.assertEqual("Draw"            ,operations.actions.draw            ,false);
d.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var e:Test = new Test("TEST OPERATIONS: actions insertCircle");
operations.insertCircle();
e.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
e.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
e.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
e.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
e.assertEqual("Draw"            ,operations.actions.draw            ,false);
e.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var f:Test = new Test("TEST OPERATIONS: actions draw");
operations.draw();
f.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
f.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
f.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
f.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
f.assertEqual("Draw"            ,operations.actions.draw            ,false);
f.assertEqual("Cancel"          ,operations.actions.cancel          ,false);

var g:Test = new Test("TEST OPERATIONS: actions cancel");
operations.cancel();
g.assertEqual("Use Mouse"       ,operations.actions.useMouse        ,false);
g.assertEqual("Insert Point"    ,operations.actions.insertPoint     ,false);
g.assertEqual("Insert Line"     ,operations.actions.insertLine      ,false);
g.assertEqual("Insert Circle"   ,operations.actions.insertCircle    ,false);
g.assertEqual("Draw"            ,operations.actions.draw            ,false);
g.assertEqual("Cancel"          ,operations.actions.cancel          ,false);