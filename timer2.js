
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  const num = ["1", "2", '3', "4", "5", "6", "7", "8", "9"]
  if (key === "b") {
    process.stdout.write('.');

  }
  if (key === '\u0003') {
    console.log(`
    Thanks for using me, ciao!`)
    process.exit();
  }
  for (const n of num) {
    if (key === n) {
      console.log(`
      setting timer for ${n} seconds...`)
    setTimeout(() => {
      process.stdout.write('.');
    }, n * 1000);
    }
  }
  



});

