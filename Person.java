class Person{
    // define person-class field
    private String name;
    private int age;

    // constractor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // getter this function is enable to get field value. 
    public String getName(){
        return name;
    }
    public int getAge(){
        return age;
    }
    // setter this function is enable to block change field value directly. 
    public void setName(String name){
        this.name = name;
    }
    public void setAge(int age){
        this.age = age;
    }
}