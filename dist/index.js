"use strict";
function log(message, userId) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
// オプションパラメータ
function log_2(message2, userId2 = 'Not singed in') {
    const time2 = new Date().toISOString();
    console.log(time2, message2, userId2);
}
log_2('User clicked on a button', 'da763e');
log_2('User signed out');
function log_3(message3, context = {}) {
    const time3 = new Date().toISOString();
    console.log(time3, message3, context.userId);
}
log_3('test', { appId: 'test' });
log_3('test', { userId: 'testId' });
log_3('test');
//# sourceMappingURL=index.js.map