
var bindings = require('bindings');
var lcd = bindings('pcd8544_rpi');

lcd.init();
//lcd.clear();
lcd.drawstring(0, 0, "Hello Raspi!");
lcd.drawstring(0, 28, "Hello Tintim!");
lcd.display();