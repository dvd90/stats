"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateArray = dateString.split('/');
    return new Date(parseInt(dateArray[2]), parseInt(dateArray[1]) - 1, parseInt(dateArray[0]));
};
