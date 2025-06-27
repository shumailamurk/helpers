import CardHandling from './Form/CardHandling';
import data from './dummyData.json';
import { useTheme } from '../../../ThemeContext';

const Categories = () => {
  const { color } = useTheme();
  return (
    <div className="mt-8">
      <h2
        className="text-2xl font-bold mb-8 text-left drop-shadow-lg ml-8"
        style={{ color }}
      >
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
        {data.map(item => (
          <CardHandling key={item.name} name={item.name} image={item.image} subCategories={item.subCategories || []} className="w-72" />
        ))}
      </div>
    </div>
  );
};

export default Categories;

export { default as Card } from './Card'; 