const path = require("path");
const kafka = require("kafka-node");

const client = new kafka.KafkaClient({
  kafkaHost: `${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`
});

const consumer = new kafka.Consumer(
  client,
  [{ topic: "test-topic", partition: 0 }]
);

module.exports = consumer;