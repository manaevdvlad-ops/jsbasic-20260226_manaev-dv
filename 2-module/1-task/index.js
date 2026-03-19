function sumSalary(salaries) {
  return Object.values(salaries).reduce((sum, value) => {

    if ( Number.isFinite(value) ) {
      return sum + value;
    }
    
    return sum;
  }, 0);
}
