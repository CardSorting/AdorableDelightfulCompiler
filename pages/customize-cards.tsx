import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import CardUploadGrid from '../components/CardUploadGrid';
import { RootState } from './store';
import { setCards } from './store/slices/cardSlice';

const CustomizeCardsPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      const { quantity } = router.query;
      const parsedQuantity = parseInt(quantity as string, 10) || 0;
      setCardCount(parsedQuantity);
    }
  }, [router.isReady, router.query]);

  const handleCardUpload = useCallback((newCards: { src: string; alt: string }[]) => {
    dispatch(setCards(newCards));
  }, [dispatch]);

  const handleNextStep = () => {
    router.push('/card-designer')
      .then(() => console.log('Navigation to /card-designer successful'))
      .catch((err) => console.error('Navigation error:', err));
  };

  return (
    <Layout>
      <div className="customize-cards-page">
        <header className="customize-header">
          <h1>Customize Front</h1>
          <div className="project-details">
            <input type="text" placeholder="Project-H3cXqPvnHJ" />
            <button>Save</button>
          </div>
          <nav className="steps-nav">
            <span className="step active">1 Customize Front</span>
            <span className="step">2 Add Text To Front</span>
            <span className="step">3 Customize Back</span>
            <span className="step">4 Add Text To Back</span>
            <span className="step">5 Preview & Add to Cart</span>
          </nav>
        </header>
        {cardCount > 0 && (
          <CardUploadGrid cardCount={cardCount} onCardUpload={handleCardUpload} />
        )}
        <div className="actions">
          <button className="previous">Previous</button>
          <button className="next" onClick={handleNextStep}>Next Step</button>
        </div>
      </div>
    </Layout>
  );
};

export default CustomizeCardsPage;