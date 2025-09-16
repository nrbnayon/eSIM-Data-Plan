const RegionCard = ({ name, image, bgColor }) => {
  return (
    <div
      className={`flex items-center gap-7 border border-gray-200 hover:scale-105 transition-transform cursor-pointer duration-300 hover:shadow-lg ${bgColor} p-3 rounded-2xl h-[150px]`}
    >
      <div>
        <img src={image} alt={name} className="h-[120px]" />
      </div>
      <div>
        <h1 className="text-2xl font-medium">{name}</h1>
      </div>
    </div>
  );
};

export default RegionCard;