import * as operations from "../../operations.js";
/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */
var a = new Test("TEST OPERATIONS: actions init");
a.assertEqual("Use Mouse", operations.actions.useMouse, false);
a.assertEqual("Insert Point", operations.actions.insertPoint, false);
a.assertEqual("Insert Line", operations.actions.insertLine, false);
a.assertEqual("Insert Circle", operations.actions.insertCircle, false);
a.assertEqual("Draw", operations.actions.draw, false);
a.assertEqual("Cancel", operations.actions.cancel, false);
