const KoaRouter = require('koa-router');
const stream = require('fs').createReadStream;
const producer = require('./service/KafkaProducer');

const router = new KoaRouter();

router.get('/', (ctx) => {
  ctx.type = 'html';
  ctx.body = stream(__dirname+'/frontend/index.html')
});

router.post('/upload', (ctx) => {
  console.log('uploads')
  const { file } = ctx.request.files;
  producer.send([{ topic: 'test-topic', messages: JSON.stringify({title : file.name, url : file.path})}], (err, data) => {
    if(err) {
      console.error(err);
    }
  })
  ctx.redirect('/');
});

module.exports = router;
