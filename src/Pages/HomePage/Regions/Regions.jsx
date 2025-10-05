
import { Link } from 'react-router-dom';
import africa from '../../../assets/map/african.svg';
import asia from '../../../assets/map/asia.svg';
import europe from '../../../assets/map/europe.svg';
import northAmerica from '../../../assets/map/northAmerica.svg';
import oceania from '../../../assets/map/oceania.svg';
import southAmerica from '../../../assets/map/southAmerica.svg';
import RegionCard from '../../../components/RegionCard';

const Regions = () => {
  const regions = [
    { name: 'Africa', image: africa, bgColor: 'bg-[#F8FFCD]' },
    { name: 'Asia', image: asia, bgColor: 'bg-[#FFEAFD]' },
    { name: 'Oceania', image: oceania, bgColor: 'bg-[#D1E4FF]' },
    { name: 'Europe', image: europe, bgColor: 'bg-[#E1FFDE]' },
    { name: 'North America', image: northAmerica, bgColor: 'bg-[#FFE2E2]' },
    { name: 'South America', image: southAmerica, bgColor: 'bg-[#C4FDFF]' },
  ];

  return (
    <div className="my-14">
      <h2 className="text-2xl md:text-3xl font-medium text-center md:text-left mb-4">Regions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
        {regions.map((region, index) => (
          <Link key={index} to={`/region/${region.name.toLowerCase().replace(' ', '-')}`}>
            <RegionCard
              name={region.name}
              image={region.image}
              bgColor={region.bgColor}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Regions;