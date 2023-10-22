import { createTimestamp } from './createTimestamp';

export const createId = (prefix = '') => {
  const dateString = createTimestamp();
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let randomString = '';
  let counter = 0;
  while (counter < 16) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  };
  return `${prefix}-${dateString}-${randomString}`;
};
