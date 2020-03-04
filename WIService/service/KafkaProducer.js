const path = require("path");
const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
  kafkaHost: `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`
});

const producer = new kafka.Producer(client);

producer.on("ready", function() {
  console.log("kafka ready");
});

producer.on("error", function(err) {
  console.log(err)
});

module.exports = producer;
