type Log = (message: string, userId?: string) => void;

let log: Log = (
    message,
    userId = 'not singed in'
) => {
    const time = new Date().toISOString();
    console.log(time, message, userId);
}

type LogMessage = (message: string) => number
const logMessage: LogMessage = (message) => {
    if (message === 'good') {
        return 1;
    } else {
        return 0;
    }
}
console.log(logMessage('good'));
