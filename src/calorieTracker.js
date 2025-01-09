const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   if (cycling <= 0 || running <= 0 || swimming <= 0) {
      weightLostInAMonth = -1;
   } else {
      const qty = 4*2;
      const month = 30;
      const burnedCalories = 1000;
      var x = qty*cycling + qty*swimming + qty*running;
      weightLostInAMonth = (x-extraCalorieInTake * month)/burnedCalories;
   }

   return weightLostInAMonth;
}

module.exports = calculateWeightLostInAMonth

