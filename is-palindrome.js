/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var stillS = s.toLowerCase().replace(/[^a-z]/g, '');
    return (
        stillS === stillS.split("").reverse().join("")
    );
};

describe('isPalindrome Method', () => {
    test('isPalindrome is valid', () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true);
        expect(isPalindrome("Eva, can I stab bats in a cave?")).toBe(true);
        expect(isPalindrome("Never odd or even")).toBe(true);
        expect(isPalindrome("Roma tibi subito motibus ibit amor")).toBe(true);
    });

    test('isPalindrome failed', () => {
        expect(isPalindrome("Always deliver more than expected")).toBe(false);
        expect(isPalindrome("Koortsmeetssysteemstrook")).toBe(false);
    });
});