/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        /** make variables/mixins available to modularized scss-files */
        additionalData: '@use "src/styles/resources/mixins/index" as *;',
    },
}
