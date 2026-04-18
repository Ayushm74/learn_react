#include <iostream>
using namespace std; 
class students{
public:
    int marks;
    string name;

public:
    students(){
        cout<< "hello";

    }
    //parameterized constructor
    students(int marks,string name){
       this->marks = marks;
        this->name =  name;
    }

};

int main(){
    students s1(1,"a");
}