/** @type {import("@babel/core").TransformOptions} */
module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [["@babel/plugin-transform-runtime", { regenerator: true }]],
};
