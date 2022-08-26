import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    },
  });

export const putDb = async (content) => {

  const jateDb = await openDB('jate', 1);

  const tx = jateDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.add({ content })

  const result = await request;
};


export const getDb = async (id) => {

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get('jate', id);
  const result = await request;
  return result;
};
initdb();
