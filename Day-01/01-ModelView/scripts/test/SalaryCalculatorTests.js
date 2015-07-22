describe("A Salary Calculator", function(){
    var calculator = null;
    beforeEach(function(){
        calculator = new SalaryCalculator();
    });
    
    it("should calculate the salary", function(){
        //arrange
        calculator.basic = 10000;
        calculator.hra = 2000;
        calculator.da = 3000;
        calculator.tax = 10;
        
        var expectedSalary = 13500;
        //act
        calculator.calculate();
        
        //assert
        expect(calculator.salary).toBe(expectedSalary);
    });
    it("should retun gross as salary when tax is nill", function(){
        //arrange
        calculator.basic = 10000;
        calculator.hra = 2000;
        calculator.da = 3000;
        calculator.tax = 0;
        
        var expectedSalary = 15000;
        //act
        calculator.calculate();
        
        //assert
        expect(calculator.salary).toBe(expectedSalary);
    });
});