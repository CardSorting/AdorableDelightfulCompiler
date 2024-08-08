// components/ProxyPricingPlans.tsx
import Link from 'next/link';

const pricingPlans = [
  {
    title: 'SINGLE',
    price: '$2.00',
    description: 'That ONE card you’ve been wanting to get forever!',
    minCards: 1,
    backgroundColor: '#C49A6C',
  },
  {
    title: '10 AND UP',
    price: '$1.50',
    description: 'Your deck could use a few upgrades! We get it…',
    minCards: 10,
    backgroundColor: '#C49A6C',
  },
  {
    title: '50 AND UP',
    price: '$1.00',
    description: 'Why not play test an entire deck? It will be fun!',
    minCards: 50,
    backgroundColor: '#0066CC',
  },
  {
    title: '200 AND UP',
    price: '$0.75',
    description: 'THE Best option on the internet to create a really cool CUBE!',
    minCards: 200,
    backgroundColor: '#C49A6C',
  },
];

const ProxyPricingPlans = () => {
  return (
    <section className="proxy-pricing-plans">
      <h2>PROXY PRICING PLANS</h2>
      <p>Shipping with Tracking: $5 United States — $25 worldwide</p>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card" style={{ backgroundColor: plan.backgroundColor }}>
            <div className="card-content">
              <div className="card-header">
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <p className="card-count">A Card</p>
              </div>
              <div className="card-body">
                <p>{plan.description}</p>
              </div>
              <div className="card-footer">
                <Link href="/product" passHref>
                  <button className="get-started-btn">GET STARTED</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProxyPricingPlans;