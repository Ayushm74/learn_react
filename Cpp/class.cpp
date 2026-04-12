#include <iostream>
using namespace std;

class students {
public:
    string name;
    int age, rollno;
    string grade;

};

int main() {
    students *s = new students;
    (*s).name = "Rohit"; 
    (*s).age = 10;
    (*s).roll_number = 21;
    (*s).grade = "A+";

    return 0;
}