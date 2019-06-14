import { ConsoleApplication } from './console.application';
import { ApplicationConfig } from '@loopback/core';

export { ConsoleApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new ConsoleApplication(options);
  await app.boot();
  await app.start();

  return app;
}

main(process.argv).catch(err => {
  console.error('Cannot start the application ', err);
  process.exit(1);
});
