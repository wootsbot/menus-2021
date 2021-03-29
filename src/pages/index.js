/* eslint-disable react/button-has-type */
import { memo } from 'react';
import { compose } from 'redux';

import MenusProvider from 'providers/MenusProvider';

import Header from 'components/header';
import Container from 'components/container';

function IndexPage() {
  return (
    <MenusProvider>
      <>
        <Header />

        <Container>{/* Code */}</Container>
      </>
    </MenusProvider>
  );
}

export default compose(memo)(IndexPage);
