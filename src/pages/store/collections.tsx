import { ReactElement, useState } from 'react';
import { PageChildLayout } from '../../components/layout/PageChildLayout';
import { PageParentLayout } from '../../components/layout/PageParentLayout';
import { CollectionsUI } from '../../components/ui/StoreComponentUI/CollectionsUI';

/**
 * @Collections_Page
 **/
export default function Collections() {
  return <CollectionsUI />;
}

Collections.getLayout = function getLayout(Collections: ReactElement) {
  const [ChildPage, setChildPage] = useState('Collections');
  return (
    <PageParentLayout setChildPage={(value) => setChildPage(value)}>
      <PageChildLayout
        ChildPage={ChildPage}
        setChildPage={(value) => setChildPage(value)}
      >
        {Collections}
      </PageChildLayout>
    </PageParentLayout>
  );
};
