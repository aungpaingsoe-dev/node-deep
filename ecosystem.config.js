module.exports = {
    apps: [
      {
        name: 'node-deep',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances define
        script: './build/index.js',
        args: 'start'
      }
    ]
}
