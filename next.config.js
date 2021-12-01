/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        /** make variables/mixins available to modularized scss-files */
        additionalData: '@import "./src/styles/resources/variables.scss";',
    },
}
