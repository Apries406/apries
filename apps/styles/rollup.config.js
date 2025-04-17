import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    copy({
      targets: [
        { src: 'src/less/variables.less', dest: 'dist/less' },
        { src: 'src/sass/variables.scss', dest: 'dist/sass' },
        { src: 'src/css/variables.css', dest: 'dist/css' }
      ]
    })
  ]
};    