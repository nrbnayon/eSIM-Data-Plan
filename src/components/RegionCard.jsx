const RegionCard = ({ name, image, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-7 border border-gray-200 hover:scale-105 transition-transform cursor-pointer duration-300 hover:shadow-lg ${bgColor} p-3 rounded-2xl md:h-[150px]`}
    >
      <div>
        <img src={image} alt={name} className="md:h-[120px] h-[50px]" />
      </div>
      <div>
        <h1 className="md:text-2xl text-lg font-medium">{name}</h1>
      </div>
    </div>
  );
};

export default RegionCard;