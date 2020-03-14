function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateSubtitle() {
  let subtitleElement = $(".subtitle");

  let character_width = subtitleElement.width() / subtitleElement.text().length;

  let character_height = subtitleElement.height();
  subtitleElement.height(character_height);

  subtitleElement.text(" ");

  let parts = ["Bioinformatician ", "and Software engineer."]


  await idle(subtitleElement, 1);
  for (let word of parts) {
    await idle(subtitleElement, 2);
    await write_word(word, subtitleElement);
  }
}

async function write_word(word, element) {
  for (let character of word) {
    element.append(character);
    element.append("|");
    await sleep(20 + Math.random() * 30);
    element.text(element.text().slice(0, -1));
  }
}


async function erase_word(word, element) {
  for (let character of word.split("").reverse()) {
    element.text(element.text().slice(0, -1));
    await sleep(40 + Math.random() * 60);
  }
  await sleep(500);
}

async function idle(element, iterations) {
  for (let i = 0; i < iterations; i++) {
    element.append("|");
    await sleep(210);
    element.text(element.text().slice(0, -1));
    await sleep(210);
  }
}


$(window).on("DOMContentLoaded", animateSubtitle);
