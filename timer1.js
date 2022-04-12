const alarmClock = function() {
  process.stdout.write(".");

};

const schedule = function(delay) {
  if (!isNaN(Number(delay)) && !(delay < 0)) {
    setTimeout(() => {
      alarmClock();
    }, delay * 1000);
  }
};

const num = process.argv.slice(2);

for (const item of num) {
  schedule(item);
}



