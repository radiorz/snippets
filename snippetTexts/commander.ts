import { program } from 'commander'

program
  .version('0.0.1')
  .description('')
  .option('--arg <string>', '选项', 'default')
  .action((options) => {
    console.log(`options`, options)
  })
  .parse(process.argv)
