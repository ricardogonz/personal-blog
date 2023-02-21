const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

const ROOT = path.join('__dirname', '..');
const PATH = path.join(ROOT, 'public', 'images', 'posts');
const SRC = path.join(ROOT, 'src');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const baseDate = faker.date.past().toISOString();

console.log('🔥 Generating data.json');
const json = fs.readdirSync(path.join(PATH)).map((file, index, arr) => {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + arr.length - index).toLocaleString();

  return {
    id: (index + 1).toString(),
    image: path.join('/', 'images', 'posts', file),
    content: faker.lorem.paragraphs(randomIntFromInterval(1, 3), '\n'),
    title: faker.lorem.sentence(),
    creationDate: date.toISOString(),
    updateDate: date.toISOString(),
  };
});

fs.writeFile(path.join(SRC, 'data.json'), JSON.stringify(json, null, 2), 'utf8', () =>
  console.log(`✅ done, data.json was generated in ${path.join(SRC, 'data.json')}`),
);
