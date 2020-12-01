export default {
    input: './main.js',
    output: [
        {
            file: './dist/index-cjs.js',
            format: 'cjs',
            banner: '// welcome to lzzzzzzz',
            footer: '//powered by sam'
        },
        {
            file: './dist/index-es.js',
            format: 'es',
            banner: '// welcome to lzzzzzzzzz',
            footer: '//powered by sam'
        }
    ]
}