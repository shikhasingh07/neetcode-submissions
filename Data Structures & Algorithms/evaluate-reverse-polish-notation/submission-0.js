class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (const token of tokens) {
            if (ops[token]) {
                const b = stack.pop();
                const a = stack.pop();
                let t = ops[token](a, b);
                stack.push(t);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
