import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'Pizza',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Maggi',
      description: 'Maggi',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'Burger',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Sandwich',
      description: 'Sandwich',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map(meal => (
    <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}/>));

    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;