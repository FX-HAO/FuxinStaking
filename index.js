const jsonfile = require("jsonfile");
const moment = require("moment");
const random = require("random");
const simpleGit = require("simple-git");

const FILE_PATH = "./data.json";

const makeCommit = async (n) => {
  for (let i = 0; i < n; i++) {
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    const DATE = moment()
      .subtract(1, "y")
      .add(1, "d")
      .add(x, "w")
      .add(y, "d")
      .format();

    console.log(DATE);
    const data = {
      date: DATE,
    };

    jsonfile.writeFileSync(FILE_PATH, data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    const msg = `${i} ${DATE}`;
    console.log(msg, data)
    await simpleGit().add(FILE_PATH).commit(msg, { "--date": DATE });
  }

  //   simpleGit().push();
};

makeCommit(1111);
