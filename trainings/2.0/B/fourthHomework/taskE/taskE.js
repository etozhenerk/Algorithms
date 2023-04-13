const fs = require("fs");
let data = fs.readFileSync("input.txt", "utf8").split("\n");

/**
 *
 * @param {string[]} data В первой строке вводится целое число N - количество сообщений в форуме (1 <= N <= 1000). Следующие строки содержат описание сообщений в хронологическом порядке.

Описание сообщения, которое представляет собой начало новой темы, состоит из трех строк. Первая строка содержит число 0. Вторая строка содержит название темы. Длина названия не превышает 30 символов. Третья строка содержит текст сообщения.

Описание сообщения, которое является ответом на другое сообщение, состоит из двух строк. Первая строка содержит целое число - номер сообщения, ответом на которое оно является. Сообщения нумеруются, начиная с единицы. Ответ всегда появляется позже, чем сообщение, ответом на которое он является. Вторая строка содержит текст сообщения.

Длина каждого из сообщений не превышает 100 символов.
 * @returns {void} Выведите название темы, к которой относится наибольшее количество сообщений. Если таких тем несколько, то выведите первую в хронологическом порядке
 */

const taskE = (data) => {
  const mapTopicIdToTitle = new Map();
  const mapTopicIdToMessageCount = new Map();
  const mapMessageIndexToRelatedTopicId = new Map();
  let messageIndex = 0;
  let topicId = 0;
  console.log(data);
  for (let i = 1; i < data.length; i++) {
    const line = Number(data[i]);

    if (isNaN(line)) {
      continue;
    }
    messageIndex += 1;

    if (line === 0) {
      topicId += 1;
      const topic = data[i + 1];
      mapMessageIndexToRelatedTopicId.set(messageIndex, topicId);
      mapTopicIdToTitle.set(topicId, topic);

      mapTopicIdToMessageCount.set(topicId, 0);
    } else {
      const topicIdAssociatedWithThisMessage =
        mapMessageIndexToRelatedTopicId.get(line);
      mapMessageIndexToRelatedTopicId.set(
        messageIndex,
        topicIdAssociatedWithThisMessage
      );

      mapTopicIdToMessageCount.set(
        topicIdAssociatedWithThisMessage,
        mapTopicIdToMessageCount.get(topicIdAssociatedWithThisMessage) + 1
      );
    }
  }

  const maxAnswerToTopic = Math.max(...[...mapTopicIdToMessageCount.values()]);
  const [mostPopularTopicId] = [...mapTopicIdToMessageCount].find(
    ([, count]) => count === maxAnswerToTopic
  );

  const ans = mapTopicIdToTitle.get(mostPopularTopicId);

  fs.writeFileSync("output.txt", ans);
};

taskE(data);
