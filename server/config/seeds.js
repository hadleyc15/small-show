const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  // TO DO //
  
  await User.create({
    firstName: 'Greg',
    lastName: 'Boodle',
    userName: "OnlyMXC",
    twitchUserName: "OnlyMXC",
    email: 'OnlyMXC@testemail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'timothy',
    lastName: 'pain',
    userName: "CONtv",
    twitchUserName: "CONtv",
    email: 'CONtv@testemail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'Winston',
    lastName: 'Riprick',
    userName: "ComicsExplained",
    twitchUserName: "ComicsExplained",
    email: 'ComicsExplained@testemail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'Cece',
    lastName: 'Mohomes',
    userName: "FrancoEscamillaLive",
    twitchUserName: "FrancoEscamillaLive",
    email: 'FrancoEscamillaLive@testemail.com',
    password: 'password12345',
  });
  
  await User.create({
    firstName: 'Craig',
    lastName: 'Mimes',
    userName: "ShoutFactoryTV",
    twitchUserName: "ShoutFactoryTV",
    email: 'ShoutFactoryTV@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Derrick',
    lastName: 'Holmes',
    userName: "MashOnly",
    twitchUserName: "MashOnly",
    email: 'MashOnly@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Riley',
    lastName: 'Davis',
    userName: "ambience_tv_",
    twitchUserName: "ambience_tv_",
    email: 'ambience_tv_@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Ron',
    lastName: 'Donald',
    userName: "GemsFireplace",
    twitchUserName: "GemsFireplace",
    email: 'GemsFireplace@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Don',
    lastName: 'Ringle',
    userName: "BurnBarrelNetwork",
    twitchUserName: "BurnBarrelNetwork",
    email: 'BurnBarrelNetwork@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Greggory',
    lastName: 'Ring',
    userName: "P4Tmachine",
    twitchUserName: "P4Tmachine",
    email: 'P4Tmachine@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Jason',
    lastName: 'Rodney',
    userName: "OperationPuppet",
    twitchUserName: "OperationPuppet",
    email: 'OperationPuppet@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Bob',
    lastName: 'Filloy',
    userName: "StarliteDriveIn",
    twitchUserName: "StarliteDriveIn",
    email: 'StarliteDriveIn@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Bill',
    lastName: 'Ludgate',
    userName: "Monstercat",
    twitchUserName: "Monstercat",
    email: 'monstercat@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'William',
    lastName: 'Kerr',
    userName: "NYC_Timescape",
    twitchUserName: "NYC_Timescape",
    email: 'NYC_Timescape@testemail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Wilmer',
    lastName: 'Fudd',
    userName: "RogueValley",
    twitchUserName: "RogueValley",
    email: 'RogueValley@testemail.com',
    password: 'password12345',
  });
  
  await User.create({
    firstName: 'Wyoming',
    lastName: 'Redneck',
    userName: "wyominredneck89",
    twitchUserName: "wyominredneck89",
    email: 'wyoming@testmail.com',
    password: 'password12345',
  });
  
  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    userName: 'pamela',
    twitchUserName: '',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
    ]
  });
  
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    userName: "Eli",
    twitchUserName: "meximeltt",
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'Mason',
    lastName: 'Anderson',
    userName: "crason8",
    twitchUserName: "crason8",
    email: 'test@testemail.com',
    password: 'password12345'
  });

  console.log('users seeded');
  
  process.exit();
});
