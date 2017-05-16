export default class RandomMessageGenerator {
  generate(numMessages) {
    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = numMessages;

    var messages = [];

    for(var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(30, 160);

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        id: i,
        text: message,
        date: new Date()
      })
    }

    return messages;
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}