/**
 * transpiler to use typescript to write tests
 */
const DEFAULT_OPTIONS = {
    rootMode: 'upward',
    ignore: [/node_modules/],
};

require('@babel/register')(DEFAULT_OPTIONS);

module.exports = function _jasminRegister() {
    require('@babel/register')(DEFAULT_OPTIONS);
};
