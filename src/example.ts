import * as Hubot from 'hubot';

module.exports = (robot: Hubot.Robot<any>): void => {
  robot.respond(/hello/i, (res: Hubot.Response<any>) => {
    res.reply("hello!");
  });
}
