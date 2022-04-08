"use strict";
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times(n => console.log(n), 4);
//# sourceMappingURL=index.js.map