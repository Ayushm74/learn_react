#include<iostream>
using namespace std;

class Human{
    string Religion, color;

    protected:
    string name;
    int age,weight;
};

class Student:private Human{ 
    private:
    int roll_no, fees;

    public:
    Student(string name, int age, int weight,int roll_number){
        this->name = name;
        this->roll_no = roll_no;
        this->weight = weight;
        this->age = age ;
    }
};

int main(){
    Student A;
    A.name ="rohit";
}