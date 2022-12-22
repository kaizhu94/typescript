"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
console.log('hello world');
var isOpen = false;
var myName = "Kai";
var myAge = 29;
var list = [0, 1, 2];
var me = ["Kai", 29, false];
var job = interfaces_1["default"].WebDev;
var phone = "Pixel";
var tablet = 3;
var sayWord = function (word) {
    if (word === void 0) { word = 'Hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayWord('Kai', 'Zhu');
var newName = 'Kaihua';
newName = 'Kai';
var newNameTwo = newName;
var makeMargin = function (x) {
    return "margin: ".concat(x, "px");
};
makeMargin(10);
makeMargin('Kai');
var dog;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({
    name: "Kai"
});
sayName({
    age: 29,
    name: "Kai"
});
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
var createContent = function (contentType) {
};
createContent(Type.Video);
console.log(Type.Quiz);
var createContent2 = function (contentType) {
};
createContent2(interfaces_1.Type2.Video);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal!';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score;
