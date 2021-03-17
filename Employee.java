class Employee extends Person{
    private int comEmployeeNumber;
    private String belongCompanyName;

    public Employee(String name, int age, int comEmployeeNumber, String belongCompanyName) {
        super(name, age);
        this.comEmployeeNumber = comEmployeeNumber;
        this.belongCompanyName = belongCompanyName;
    }

    public int getComEmployeeNumber(){
        return comEmployeeNumber;
    }
    public String getBelongCompanyName(){
        return belongCompanyName;
    }
    public void setComEmployeeNumber(int comEmployeeNumber){
        this.comEmployeeNumber = comEmployeeNumber;
    }
    public void setBelongCompanyName(String belongCompanyName){
        this.belongCompanyName = belongCompanyName;
    }
}