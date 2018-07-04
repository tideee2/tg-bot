const Telegraf = require('telegraf');

const bot = new Telegraf('607598573:AAGLsqoyIsAu_lRTKKpA6FdstNcNxzM9Ges'); // Создаем нашего бота

bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Добро пожаловать!');
});
const axios = require('axios');
var parser = require('xml2json');

// var cats = require("cat-js");

// var c = new cats();

// c.get().then((cat) => {console.log(cat)});
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
// bot.hears('weather', (ctx)=>{
//     axios.get('http://api.openweathermap.org/data/2.5/weather?id=705811&botid=6f636d4ff01d5c7128e6aa891e7612ee')
// .then (res =>{
//     console.log(Math.floor(res.data.main.temp-273));
//     ctx.reply('Температура '+Math.floor(res.data.main.temp-273));
// })
// .catch(error=>{
//     console.log(error);
// })
// })

// bot.use((ctx, next) => {
//     const start = new Date()
//     return next(ctx).then(() => {
//       const ms = new Date() - start
//       console.log('Response time %sms', ms)
//     })
//   })
//   bot.hears('qq', (ctx)=>{
//       console.log(ctx);
//   })
//   bot.on('text', (ctx) => ctx.reply('Hello World'))
// bot.startPolling()
// bot.on('text', ctx => {
//     // ctx object holds the Update object from Telegram API
//     // So you can use everything you see there
  
//     // get the text message sent by user
//     const subreddit = ctx.message.text;
  
//     // GET the data from Reddit API
//     axios
//       .get(`https://reddit.com/r/${subreddit}/top.json?limit=10`)
//       .then(res => {
//         // data recieved from Reddit
//         const data = res.data.data;
  
//         // if subbreddit does not exist
//         if (data.children.length < 1)
//           return ctx.reply("The subreddit couldn't be found.");
  
//         // send the first top post link to the user
//         const link = `https://reddit.com/${data.children[0].data.permalink}`;
//         return ctx.reply(link);
//       })
  
//       // if there's any error in request
//       .catch(err => console.log(err));
//   });
bot.command('hi', (ctx)=>{
    ctx.reply('privetiki');
});

bot.command('cat', (ctx)=>{      
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .then((res)=>{
        var xml = res.data;

        var json = parser.toJson(xml);
        console.log(json);
        var q = JSON.parse(json).response.data.images.image.url;
        ctx.reply(q);
        })
    })
bot.command('weather', (ctx)=>{
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=705811&appid=6f636d4ff01d5c7128e6aa891e7612ee')
    .then((res)=>{
        ctx.reply
    })
})

const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.callbackButton('cat', 'cat'),
  Markup.urlButton('google', 'https://google.com'),

])
// bot.help((ctx) => ctx.reply('Help message'));
bot.command('buttons', (ctx)=>{
    ctx.reply('look');
    ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard));
});
// bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
// bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.action('cat', (ctx)=>{      
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1')
    .then((res)=>{
        var xml = res.data;

        var json = parser.toJson(xml);
        console.log(json);
        var q = JSON.parse(json).response.data.images.image.url;
        ctx.reply(q);
        });
    });
bot.startPolling();