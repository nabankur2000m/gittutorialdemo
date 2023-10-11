// Using promises
getButter
  .then((butter) => {
    console.log(`Received ${butter}`);
    return getColdDrinks;
  })
  .then((drinks) => {
    console.log(`Received ${drinks}`);
  })
  .catch((error) => {
    console.error(error);
  });

// Using async/await
async function getButterAndDrinks() {
  try {
    const butter = await getButter;
    console.log(`Received ${butter}`);
    const drinks = await getColdDrinks;
    console.log(`Received ${drinks}`);
  } catch (error) {
    console.error(error);
  }
}

getButterAndDrinks();
