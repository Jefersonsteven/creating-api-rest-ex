const staticProducts = [
  {
    id: '273817',
    image: 'https://loremflickr.com/640/480',
    name: 'Electronic Plastic Keyboard',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$368.00',
    categories: 'Tools',
  },
  {
    id: '527934',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Concrete Bike',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$465.00',
    categories: 'Music',
  },
  {
    id: '521059',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Fresh Fish',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$366.00',
    categories: 'Beauty',
  },
  {
    id: '622191',
    image: 'https://loremflickr.com/640/480',
    name: 'Awesome Metal Soap',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$355.00',
    categories: 'Tools',
  },
  {
    id: '143232',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Granite Computer',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$347.00',
    categories: 'Music',
  },
  {
    id: '592201',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Frozen Bacon',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$423.00',
    categories: 'Books',
  },
  {
    id: '494838',
    image: 'https://loremflickr.com/640/480',
    name: 'Fantastic Concrete Shoes',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$422.00',
    categories: 'Jewelery',
  },
  {
    id: '119941',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Frozen Cheese',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$466.00',
    categories: 'Baby',
  },
  {
    id: '928766',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Soft Pants',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: '$313.00',
    categories: 'Industrial',
  },
  {
    id: '505808',
    image: 'https://loremflickr.com/640/480',
    name: 'Small Granite Towels',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: '$311.00',
    categories: 'Kids',
  },
  {
    id: '122517',
    image: 'https://loremflickr.com/640/480',
    name: 'Fantastic Plastic Tuna',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$388.00',
    categories: 'Games',
  },
  {
    id: '722950',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Rubber Mouse',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$349.00',
    categories: 'Outdoors',
  },
  {
    id: '288364',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Bronze Pants',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$306.00',
    categories: 'Automotive',
  },
  {
    id: '463771',
    image: 'https://loremflickr.com/640/480',
    name: 'Awesome Plastic Car',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$463.00',
    categories: 'Outdoors',
  },
  {
    id: '661080',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Granite Shoes',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$380.00',
    categories: 'Garden',
  },
  {
    id: '831516',
    image: 'https://loremflickr.com/640/480',
    name: 'Generic Plastic Ball',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$387.00',
    categories: 'Automotive',
  },
  {
    id: '791054',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Concrete Pants',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$312.00',
    categories: 'Games',
  },
  {
    id: '286210',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Cotton Ball',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$372.00',
    categories: 'Baby',
  },
  {
    id: '318556',
    image: 'https://loremflickr.com/640/480',
    name: 'Awesome Plastic Shirt',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$498.00',
    categories: 'Shoes',
  },
  {
    id: '688529',
    image: 'https://loremflickr.com/640/480',
    name: 'Recycled Metal Computer',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$500.00',
    categories: 'Books',
  },
  {
    id: '470931',
    image: 'https://loremflickr.com/640/480',
    name: 'Gorgeous Bronze Hat',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$480.00',
    categories: 'Electronics',
  },
  {
    id: '332306',
    image: 'https://loremflickr.com/640/480',
    name: 'Handcrafted Soft Gloves',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$345.00',
    categories: 'Music',
  },
  {
    id: '607749',
    image: 'https://loremflickr.com/640/480',
    name: 'Fantastic Soft Salad',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$404.00',
    categories: 'Books',
  },
  {
    id: '485204',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Fresh Bike',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$363.00',
    categories: 'Sports',
  },
  {
    id: '602802',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Granite Fish',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$426.00',
    categories: 'Electronics',
  },
  {
    id: '615355',
    image: 'https://loremflickr.com/640/480',
    name: 'Bespoke Rubber Ball',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: '$457.00',
    categories: 'Games',
  },
  {
    id: '494903',
    image: 'https://loremflickr.com/640/480',
    name: 'Practical Wooden Pizza',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$334.00',
    categories: 'Automotive',
  },
  {
    id: '476874',
    image: 'https://loremflickr.com/640/480',
    name: 'Handcrafted Rubber Chicken',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$344.00',
    categories: 'Kids',
  },
  {
    id: '436224',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Rubber Pants',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$425.00',
    categories: 'Health',
  },
  {
    id: '262524',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Rubber Ball',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$464.00',
    categories: 'Industrial',
  },
  {
    id: '249903',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Fresh Salad',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$452.00',
    categories: 'Games',
  },
  {
    id: '837976',
    image: 'https://loremflickr.com/640/480',
    name: 'Handcrafted Wooden Pants',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: '$317.00',
    categories: 'Movies',
  },
  {
    id: '890137',
    image: 'https://loremflickr.com/640/480',
    name: 'Gorgeous Granite Pizza',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$351.00',
    categories: 'Games',
  },
  {
    id: '365712',
    image: 'https://loremflickr.com/640/480',
    name: 'Intelligent Bronze Hat',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$446.00',
    categories: 'Music',
  },
  {
    id: '906550',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Metal Table',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$341.00',
    categories: 'Shoes',
  },
  {
    id: '707954',
    image: 'https://loremflickr.com/640/480',
    name: 'Gorgeous Soft Gloves',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$434.00',
    categories: 'Movies',
  },
  {
    id: '809377',
    image: 'https://loremflickr.com/640/480',
    name: 'Electronic Metal Chips',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$346.00',
    categories: 'Games',
  },
  {
    id: '462096',
    image: 'https://loremflickr.com/640/480',
    name: 'Bespoke Steel Ball',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$498.00',
    categories: 'Jewelery',
  },
  {
    id: '240858',
    image: 'https://loremflickr.com/640/480',
    name: 'Gorgeous Plastic Bacon',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: '$491.00',
    categories: 'Jewelery',
  },
  {
    id: '631289',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Soft Gloves',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$343.00',
    categories: 'Industrial',
  },
  {
    id: '891567',
    image: 'https://loremflickr.com/640/480',
    name: 'Incredible Granite Keyboard',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$453.00',
    categories: 'Outdoors',
  },
  {
    id: '509886',
    image: 'https://loremflickr.com/640/480',
    name: 'Practical Concrete Salad',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$343.00',
    categories: 'Beauty',
  },
  {
    id: '740618',
    image: 'https://loremflickr.com/640/480',
    name: 'Practical Wooden Towels',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$412.00',
    categories: 'Home',
  },
  {
    id: '829959',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Rubber Shoes',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$442.00',
    categories: 'Books',
  },
  {
    id: '619717',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Soft Table',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: '$327.00',
    categories: 'Books',
  },
  {
    id: '215029',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Rubber Chicken',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$345.00',
    categories: 'Computers',
  },
  {
    id: '366743',
    image: 'https://loremflickr.com/640/480',
    name: 'Modern Granite Pants',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '$396.00',
    categories: 'Automotive',
  },
  {
    id: '685211',
    image: 'https://loremflickr.com/640/480',
    name: 'Electronic Steel Computer',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$491.00',
    categories: 'Sports',
  },
  {
    id: '549106',
    image: 'https://loremflickr.com/640/480',
    name: 'Generic Wooden Table',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: '$415.00',
    categories: 'Sports',
  },
  {
    id: '453023',
    image: 'https://loremflickr.com/640/480',
    name: 'Recycled Granite Mouse',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$346.00',
    categories: 'Tools',
  },
  {
    id: '111671',
    image: 'https://loremflickr.com/640/480',
    name: 'Luxurious Fresh Sausages',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$412.00',
    categories: 'Garden',
  },
  {
    id: '643514',
    image: 'https://loremflickr.com/640/480',
    name: 'Ergonomic Concrete Chair',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$306.00',
    categories: 'Health',
  },
  {
    id: '146316',
    image: 'https://loremflickr.com/640/480',
    name: 'Handcrafted Cotton Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$323.00',
    categories: 'Tools',
  },
  {
    id: '318548',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Rubber Tuna',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$401.00',
    categories: 'Health',
  },
  {
    id: '282615',
    image: 'https://loremflickr.com/640/480',
    name: 'Sleek Frozen Ball',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: '$354.00',
    categories: 'Outdoors',
  },
  {
    id: '305539',
    image: 'https://loremflickr.com/640/480',
    name: 'Ergonomic Metal Shirt',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$335.00',
    categories: 'Baby',
  },
  {
    id: '802408',
    image: 'https://loremflickr.com/640/480',
    name: 'Incredible Rubber Sausages',
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    price: '$322.00',
    categories: 'Toys',
  },
  {
    id: '489893',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Metal Table',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$320.00',
    categories: 'Baby',
  },
  {
    id: '167216',
    image: 'https://loremflickr.com/640/480',
    name: 'Intelligent Wooden Salad',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$344.00',
    categories: 'Shoes',
  },
  {
    id: '294056',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Concrete Shoes',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$429.00',
    categories: 'Movies',
  },
  {
    id: '827059',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Cotton Keyboard',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$311.00',
    categories: 'Automotive',
  },
  {
    id: '302361',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Metal Keyboard',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: '$482.00',
    categories: 'Computers',
  },
  {
    id: '205659',
    image: 'https://loremflickr.com/640/480',
    name: 'Ergonomic Plastic Chair',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$329.00',
    categories: 'Toys',
  },
  {
    id: '366383',
    image: 'https://loremflickr.com/640/480',
    name: 'Bespoke Concrete Car',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '$338.00',
    categories: 'Grocery',
  },
  {
    id: '957603',
    image: 'https://loremflickr.com/640/480',
    name: 'Sleek Cotton Ball',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$348.00',
    categories: 'Grocery',
  },
  {
    id: '275804',
    image: 'https://loremflickr.com/640/480',
    name: 'Sleek Rubber Soap',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: '$376.00',
    categories: 'Electronics',
  },
  {
    id: '142135',
    image: 'https://loremflickr.com/640/480',
    name: 'Unbranded Metal Tuna',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$339.00',
    categories: 'Clothing',
  },
  {
    id: '313298',
    image: 'https://loremflickr.com/640/480',
    name: 'Sleek Rubber Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$365.00',
    categories: 'Games',
  },
  {
    id: '259660',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Granite Chicken',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$306.00',
    categories: 'Automotive',
  },
  {
    id: '113387',
    image: 'https://loremflickr.com/640/480',
    name: 'Luxurious Metal Shirt',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$462.00',
    categories: 'Health',
  },
  {
    id: '893036',
    image: 'https://loremflickr.com/640/480',
    name: 'Intelligent Granite Shirt',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$436.00',
    categories: 'Baby',
  },
  {
    id: '630224',
    image: 'https://loremflickr.com/640/480',
    name: 'Handcrafted Fresh Pizza',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$467.00',
    categories: 'Tools',
  },
  {
    id: '260943',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Cotton Table',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$445.00',
    categories: 'Toys',
  },
  {
    id: '662294',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Steel Chips',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$348.00',
    categories: 'Automotive',
  },
  {
    id: '324039',
    image: 'https://loremflickr.com/640/480',
    name: 'Small Cotton Salad',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$337.00',
    categories: 'Games',
  },
  {
    id: '895054',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Plastic Chips',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$355.00',
    categories: 'Garden',
  },
  {
    id: '770179',
    image: 'https://loremflickr.com/640/480',
    name: 'Fantastic Soft Car',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$352.00',
    categories: 'Baby',
  },
  {
    id: '424057',
    image: 'https://loremflickr.com/640/480',
    name: 'Generic Soft Fish',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$444.00',
    categories: 'Automotive',
  },
  {
    id: '909574',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Soft Tuna',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$457.00',
    categories: 'Games',
  },
  {
    id: '822486',
    image: 'https://loremflickr.com/640/480',
    name: 'Bespoke Steel Bike',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$424.00',
    categories: 'Music',
  },
  {
    id: '552288',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Granite Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$406.00',
    categories: 'Clothing',
  },
  {
    id: '158660',
    image: 'https://loremflickr.com/640/480',
    name: 'Recycled Frozen Bike',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$498.00',
    categories: 'Home',
  },
  {
    id: '386883',
    image: 'https://loremflickr.com/640/480',
    name: 'Rustic Soft Shirt',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$480.00',
    categories: 'Electronics',
  },
  {
    id: '303045',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Steel Cheese',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '$313.00',
    categories: 'Tools',
  },
  {
    id: '126909',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Fresh Computer',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$417.00',
    categories: 'Industrial',
  },
  {
    id: '921525',
    image: 'https://loremflickr.com/640/480',
    name: 'Oriental Metal Tuna',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$483.00',
    categories: 'Music',
  },
  {
    id: '563903',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Fresh Keyboard',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$383.00',
    categories: 'Garden',
  },
  {
    id: '497436',
    image: 'https://loremflickr.com/640/480',
    name: 'Gorgeous Steel Shirt',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '$306.00',
    categories: 'Industrial',
  },
  {
    id: '601997',
    image: 'https://loremflickr.com/640/480',
    name: 'Sleek Steel Computer',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    price: '$416.00',
    categories: 'Health',
  },
  {
    id: '474592',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Plastic Sausages',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '$400.00',
    categories: 'Automotive',
  },
  {
    id: '490184',
    image: 'https://loremflickr.com/640/480',
    name: 'Awesome Wooden Car',
    description: 'The Football Is Good For Training And Recreational Purposes',
    price: '$316.00',
    categories: 'Automotive',
  },
  {
    id: '599884',
    image: 'https://loremflickr.com/640/480',
    name: 'Intelligent Metal Bike',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '$377.00',
    categories: 'Clothing',
  },
  {
    id: '196472',
    image: 'https://loremflickr.com/640/480',
    name: 'Elegant Plastic Sausages',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$431.00',
    categories: 'Computers',
  },
  {
    id: '966924',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Rubber Tuna',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: '$461.00',
    categories: 'Garden',
  },
  {
    id: '504187',
    image: 'https://loremflickr.com/640/480',
    name: 'Refined Concrete Mouse',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '$473.00',
    categories: 'Beauty',
  },
  {
    id: '216169',
    image: 'https://loremflickr.com/640/480',
    name: 'Unbranded Plastic Hat',
    description:
      'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    price: '$436.00',
    categories: 'Garden',
  },
  {
    id: '557715',
    image: 'https://loremflickr.com/640/480',
    name: 'Licensed Fresh Pizza',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    price: '$364.00',
    categories: 'Automotive',
  },
  {
    id: '831635',
    image: 'https://loremflickr.com/640/480',
    name: 'Recycled Metal Computer',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '$453.00',
    categories: 'Kids',
  },
  {
    id: '398046',
    image: 'https://loremflickr.com/640/480',
    name: 'Tasty Concrete Table',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '$470.00',
    categories: 'Games',
  },
  {
    id: '662325',
    image: 'https://loremflickr.com/640/480',
    name: 'Intelligent Granite Tuna',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '$390.00',
    categories: 'Health',
  },
];

module.exports = staticProducts;
