function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateSubtitle() {
  let subtitleElement = $('.subtitle')

  let width = subtitleElement.width() + 7
  subtitleElement.width(width)

  let text = subtitleElement.text()
  subtitleElement.text("")

  let sentences = text.split(".")
  sentences.splice(-1, 1)

  await sleep(500);
  for (let sentence of sentences) {
    for (let character of sentence) {
      subtitleElement.append(character)
      if (character != " ") {
        await sleep(70);
      }
    }
    subtitleElement.append('.')
    await sleep(500);
  }
}

animateSubtitle()
