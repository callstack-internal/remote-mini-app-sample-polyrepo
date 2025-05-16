import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Placeholder from '../components/Placeholder';

const TechGallery = React.lazy(() => import('techGal/App'));

const TechGalleryScreen = () => {
  return (
    <ErrorBoundary name="TechGalleryScreen">
      <React.Suspense fallback={<Placeholder label="TechGallery" icon="folder-image" />}>
        <TechGallery />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default TechGalleryScreen;
