import Section from "@/components/Section";
import HeatLevelsSection from "@/components/HeatLevelsSection";
import SidesSection from "@/components/SidesSection";
import BeveragesSection from "@/components/BeveragesSection";

const chickenData = {
  heading: 'HOT CHICKEN',
  items: [
    {
      description: 'Leg & Thigh',
      name: 'Dark Quarter',
      hasSizes: true,
      sizes: [
        {text: 'Small(1)', price: '$6.00'},
        {text: 'Large(2)', price: '$11.00'}
      ]
    },
    {
      description: 'Breast & Wing',
      name: 'White Quarter',
      hasSizes: true,
      sizes: [
        {text: 'Small(1)', price: '$7.00'},
        {text: 'Large(2)', price: '$13.00'}
      ]
    },
    {
      description: '2 Quarter Dark & 2 Quarter White with 2 Large Sides',
      name: 'Whole Family Meal',
      hasSizes: false,
      price: '$25.00',
    },
    {
      description: 'Fried Chicken Soft Taco (2)',
      name: 'Taco Chick',
      hasSizes: false,
      price: '$8.00'
    },
    {
      description: 'Whole Wings or Tenders with Choice of a Small Side',
      name: 'Hot Box',
      hasSizes: true,
      sizes: [
        {text: 'Small(3)', price: '$9.00'},
        {text: 'Large(5)', price: '$14.00'}
      ]
    },
    {
      description: 'Chicken Nuggets with Choice of a Small Side',
      name: 'Little Chicks',
      hasSizes: true,
      sizes: [
        {text: 'Small(6)', price: '$6.00'},
        {text: 'Large(12)', price: '$10.00'}
      ]
    },
    {
      description: '',
      name: 'Korean Chicken Wings (Whole)',
      hasSizes: true,
      sizes: [
        {text: 'Small(3)', price: '$9.00'},
        {text: 'Large(5)', price: '$14.00'}
      ]
    },
    {
      description: 'Wings or Tenders',
      name: 'Chicken & Croffle',
      hasSizes: true,
      sizes: [
        {text: 'Small(3)', price: '$12.00'},
        {text: 'Large(5)', price: '$17.00'}
      ]
    },
  ]
};

const sandwichData = {
  heading: 'SANDWICHES',
  items: [
    {
      description: 'Fried Chicken Breast, Nashville Style, with Slaw & Pickles on a Toasted Brioche Bun',
      name: 'Hot Chick',
      hasSizes: false,
      price: '$9.00',
    },
    {
      description: 'Grilled Chicken Breast, Nashville or Korean Style with Slaw & Pickles on a Toasted Brioche Bun',
      name: 'Slim Chick',
      hasSizes: false,
      price: '$9.00',
    },
    {
      description: 'Fried Chicken Breast, Korean Style, with Slaw & Pickles on a Toasted Brioche Bun',
      name: 'Seoul Chick',
      hasSizes: false,
      price: '$9.00'
    },
  ]
};

const heatLevelData = {
  heading: 'HEAT LEVELS',
  levels: [
    {color: 'yellow-100', description: 'Plain and Simple',level: 'No Heat'},
    {color: 'yellow-300', description: 'Barely There',level: 'Mild'},
    {color: 'yellow-400', description: 'Oop, there it is!',level: 'Medium'},
    {color: 'yellow-600', description: 'Make ya Sweat',level: 'Hot'},
    {color: 'red-600', description: 'Crybaby',level: "Cluckin' Hot"},
  ]
};

const sideData = {
  heading: 'SIDES',
  largePrice: '$5.00',
  sides: ['French Fries','Potato Salad','Cole Slaw','Mac & Cheese','Grilled Corn Cob'],
  smallPrice: '$3.00'
};

const beveragesData = {
  heading: 'BEVERAGES',
  beverages: [
    {name: 'Fountain Drinks', price: '$3.00'},
    {name: 'Bottled Water', price: '$2.00'},
    {name: 'House-Brewed Sweet Tea', price: '$3.00'},
    {name: 'Soda Cans', price: '$2.00'}
  ]
};

const extrasData = {
  heading: 'EXTRAS',
  items: [
    {
      description: 'Pickles',
      name: '',
      hasSizes: false,
      price: '$0.50',
    },
    {
      description: 'Cluck Sauce',
      name: '',
      hasSizes: false,
      price: '$0.50',
    },
    {
      description: 'Bread',
      name: '',
      hasSizes: false,
      price: '$0.50'
    },
    {
      description: 'Other Sauces',
      name: '',
      hasSizes: false,
      price: '$0.50'
    },
    {
      description: 'Croffle',
      name: '',
      hasSizes: false,
      price: '$4.00'
    },
  ]
}

export default function Body() {
  return (
    <div className="flex flex-col w-full p-4">
      <Section {...chickenData} itemBasisStyle="basis-1/2 md:basis-1/3"/>
      <div className="flex flex-col md:flex-row gap-4">
        <HeatLevelsSection {...heatLevelData}/>
        <Section {...sandwichData} itemBasisStyle="basis-full"/>
      </div>
      <div className="flex flex-row gap-4">
        <BeveragesSection {...beveragesData}/>
        <SidesSection {...sideData}/>
      </div>
      <Section {...extrasData} itemBasisStyle="basis-1/5"/>
    </div>
  )
};
