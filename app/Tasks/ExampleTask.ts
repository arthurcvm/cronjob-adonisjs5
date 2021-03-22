import * as cron from 'node-cron';

export default cron.schedule('* * * * * *', () => {
  console.log('Hello Cron!');
});
