import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.lorem.word(),
  company: faker.string.alphanumeric(7),
  isVerified: faker.datatype.boolean(),
  validity: sample(['1 Hour', '30 Minutes', '3 Hours', '6 Hours', '12 Hours', '1 day']),
  status: sample(['active', 'expired']),
  role: faker.internet.email(),
}));
