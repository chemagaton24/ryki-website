import Card from "./Card";
import DeepTwoWayLiquidityIcon from "./images/deep-two-way-liquidity.svg";
import EnhancedMarketPerspectiveIcon from "./images/enhanced-market-perspective.svg";
import FundingAndSettlementMadeSimpleIcon from "./images/funding-and-settlement-made-simple.svg";
import MarketIntelligenceIcon from "./images/market-intelligence.svg";
import "./style.css";

const cardList = [
  {
    icon: DeepTwoWayLiquidityIcon,
    title: "Deep two-way liquidity",
    description:
      "Ryki is able to provide superior execution value and limit market risk and impact typically incurred when executing larger value trades",
  },
  {
    icon: EnhancedMarketPerspectiveIcon,
    title: "Enhanced market perspective",
    description:
      "Clients of Ryki are supported by an experienced team with in-depth industry knowledge and expertise.",
  },
  {
    icon: FundingAndSettlementMadeSimpleIcon,
    title: "Funding and settlement made simple",
    description:
      "Same day funding and account settlement in both USD and CAD based on local settlement times.",
  },
  {
    icon: MarketIntelligenceIcon,
    title: "Market intelligence",
    description:
      "By giving our clients a macro and micro view of markets, we aim to keep you informed and up to date with the information that matters to you.",
  },
];

const TailoredToYou = () => (
  <section className="tailored-to-you-block">
    <div className="tailored-to-you-block__bg">
      <div className="tailored-to-you-block__bg-pattern tailored-to-you-block__bg-pattern--1"></div>
      <div className="tailored-to-you-block__bg-pattern tailored-to-you-block__bg-pattern--2"></div>
      <div className="tailored-to-you-block__bg-pattern tailored-to-you-block__bg-pattern--3"></div>
      <div className="tailored-to-you-block__bg-pattern tailored-to-you-block__bg-pattern--4"></div>
    </div>
    <div className="container">
      <div className="tailored-to-you-block__intro">
        <div className="tailored-to-you-block__large-text">
          Personal account coverage
        </div>
        <h2 className="tailored-to-you-block__heading">tailored to you</h2>
        <p className="tailored-to-you-block__description">
          We offer a personalized onboarding service providing an easy
          transition into the world of digital assets. As a boutique firm
          offering a high end experience,
          <strong>
            we require a minimum notional value of $50,000 per trade.
          </strong>
        </p>
      </div>
      <div className="tailored-to-you-block__card-list-scroller">
        <ul className="tailored-to-you-block__card-list">
          {cardList.map((item, key) => (
            <li key={key}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TailoredToYou;
