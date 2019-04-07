// rollup.config.js
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default (...args) => {
	console.log(args);
	return {
		input: 'src/index.js',
		output: {
			file: 'dist/bundle.js',
			format: 'iife',
			sourceMap: 'inline',
		},
		plugins: [
			// serve(),			// index.html should be in root of project
			// livereload()
		]
	}
}
