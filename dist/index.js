"use strict";
let log = (message, userId = 'not singed in') => {
    const time = new Date().toISOString();
    console.log(time, message, userId);
};
const logMessage = (message) => {
    if (message === 'good') {
        return 1;
    }
    else {
        return 0;
    }
};
console.log(logMessage('good'));
//# sourceMappingURL=index.js.map