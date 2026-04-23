#include<iostream>
using namespace std;

class Human{
    protected:
    string name;
    int age,weight;
};

class Student:public Human{
    int roll_no, fees;
};

int main(){
    Student A;
    A.name ="rohit";
}