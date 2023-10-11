const getButter = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Husband got butter!");
      resolve("Butter");
    }, 2000);
  });
  
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got cold drinks!");
      resolve("Cold Drinks");
    }, 1500);
  });
  