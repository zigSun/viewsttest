const Consumer = require('./service/KafkaConsumer');
const FileModel = require('./models/FileModel');

Consumer.on("message", message => {
  console.log(message);
  const { title, url } = JSON.parse(message.value);
  FileModel.create({title, url})
});

process.on('uncaughtException', (err) => {
  console.log(err);
})
