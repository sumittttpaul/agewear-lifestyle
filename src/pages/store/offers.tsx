import type { NextPage } from 'next';
import { PageContainerDark } from '../../components/container/PageContainerDark';
import { PageHeader } from '../../components/header/PageHeader/PageHeader';
import { PageFooter } from '../../components/footer/PageFooter/PageFooter';
import { StoreUIOffers } from '../../components/ui/StoreUI';
import { useState } from 'react';

/**
 * @Offers_Page
 **/
const Offers: NextPage = () => {
  const [Page, setPage] = useState('Offers');
  return (
    <PageContainerDark>
      <PageHeader />
      <StoreUIOffers Page={Page} setPage={(value) => setPage(value)} />
      <PageFooter />
    </PageContainerDark>
  );
};

export default Offers;
