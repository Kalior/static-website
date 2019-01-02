function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateSubtitle() {
  let subtitleElement = $(".subtitle");

  let character_width = subtitleElement.width() / subtitleElement.text().length;

  let character_height = subtitleElement.height();
  subtitleElement.height(character_height);

  subtitleElement.text("");

  let sentences = ["Software engineer.", "Musician.", "Photographer.", "Programmer."]

  await sleep(500);
  while (true) {
    let sentence = sentences[Math.floor(Math.random() * sentences.length)];

    let width = sentence.length * character_width + 1;
    subtitleElement.width(width);

    for (let character of sentence) {
      subtitleElement.append(character);
      if (character != " ") {
        await sleep(40 + Math.random() * 60);
      }
    }

    await sleep(1000);

    for (let character of sentence.split("").reverse()) {
      subtitleElement.text(subtitleElement.text().slice(0, -1));
      await sleep(40 + Math.random() * 60);
    }
    await sleep(500);
  }
}


$(window).on("DOMContentLoaded", animateSubtitle);
