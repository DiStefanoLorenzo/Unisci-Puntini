"use strict";
/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */
class Test {
    constructor(title) {
        this.div = document.getElementById("cont");
        this.draw(title);
    }
    draw(t) {
        // Creazione Tabella
        this.table = document.createElement("table");
        this.table.className = "test";
        //
        var title = document.createElement("h3");
        title.textContent = t;
        //
        this.div.appendChild(title);
        this.div.appendChild(this.table);
    }
    check(actual, expected) {
        if (actual == expected) {
            return "✅ Test Successful ✅";
        }
        else {
            return "❌ Test Fail ❌";
        }
    }
    setColor(element, actual, expected) {
        if (actual == expected) {
            element.style.backgroundColor = "green";
        }
        else {
            element.style.backgroundColor = "#AA5555";
        }
    }
    assertEqual(message, actual, expected) {
        var tr = document.createElement("tr");
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");
        th1.textContent = message;
        th2.textContent = "Actual value: " + String(actual);
        th3.textContent = "Expected value: " + String(expected);
        th4.textContent = this.check(actual, expected);
        this.setColor(th1, actual, expected);
        this.setColor(th2, actual, expected);
        this.setColor(th3, actual, expected);
        this.setColor(th4, actual, expected);
        this.table.appendChild(tr);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
    }
    assertEquals(message, actual, expected) {
        for (var i = 0; i < actual.length; i++) {
            this.assertEqual(message, actual[i], expected[i]);
        }
    }
}
