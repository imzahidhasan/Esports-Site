import Hero from '../components/Hero';
import FeaturedMatches from '../components/FeaturedMatches';
import TeamHighlights from '../components/TeamHighlights';
import LatestNews from '../components/LatestNews';

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedMatches />
            <TeamHighlights />
            <LatestNews />
        </div>
    );
};

export default Home;
