import { task } from 'gulp';
import chalk from 'chalk';

const { yellow } = chalk;

task('default', ['help']);

task('help', function() {
  console.log();
  console.log('Please specify a gulp task you want to run.');
  console.log(`You're probably looking for ${yellow('test')} or ${yellow('serve:devapp')}.`);
  console.log();
});