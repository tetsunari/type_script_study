function log(message: string, userId?: string) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}

log('Page loaded'); // 21:28:50 Page loaded Not signed in
log('User signed in', 'da763be'); // 21:28:50 User signed in da763be
// オプションパラメータ

function log_2(message2: string, userId2 = 'Not singed in') {
    const time2 = new Date().toISOString();
    console.log(time2, message2, userId2);
}
log_2('User clicked on a button', 'da763e'); // 2022-03-25T12:28:50.566Z User clicked on a button da763e
log_2('User signed out'); // 2022-03-25T12:28:50.567Z User signed out Not singed in
// デフォルトパラメータ better

type Context = {
    appId?: string,
    userId?: string
}
function log_3(message3: string, context: Context = {}) {
    const time3 = new Date().toISOString();
    console.log(time3, message3, context.userId);
}
log_3('test', {appId: 'test'}); // 2022-03-25T12:28:50.567Z test undefined
log_3('test', {userId: 'testId'}); // 2022-03-25T12:28:50.567Z test testId
log_3('test'); // 2022-03-25T12:28:50.567Z test undefined