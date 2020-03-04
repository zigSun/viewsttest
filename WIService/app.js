require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-body');
const router = require('./router');
const app = new Koa();

app.use(bodyParser({ 
  multipart: true,
  formidable: {
    keepExtensions: true,
    outputDir: './storage'
  }
}));

app.use(router.routes());

const server = app.listen(process.env.APP_PORT, () => {
  console.log(`Server started at ${process.env.APP_PORT} port`)
})

