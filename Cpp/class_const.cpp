#include <iostream>
using namespace std; 
class students{
public:
    int marks;
    string name;
// default constructor
    // students(){

    // }
public:
    students(){
        cout<< "hello";

    }
    //parameterized constructor
    students(int marks,string name){
        marks = 1;
        name = "a";
    }
    ~students(){
        cout<< hello;
    }

};

int main(){
    students s1;
}