import React from 'react';
import { data } from '../data/users';
import { User } from './User/User';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';
import { GlobalStyles } from '../utils/GlobalStyles';

export const App = () => {
  return (
    <>
      <Section>
        <User user={data[0]} />
      </Section>
      <Section title='List of users'>
        <UsersList users={data} />
      </Section>
      <GlobalStyles/>
    </>
  );
};
