module.exports = { //웹팩 기본구조 EMPO
    entry: {
        app: 'main.js',
    },
    moudle: {
        rules : [{
            
        }],
    },
    plugins: [],
    output: {
        filename : '[name].js',
        path : './dist',
    },
}