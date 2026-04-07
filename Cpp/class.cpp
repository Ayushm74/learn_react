#include <iostream>
using namespace std;

class students {
public:
    string name;
    int age, rollno;
    string grade;
};

int main() {
    students s1;  
    // assigning values
    s1.name = "Ayush";
    s1.rollno = 36;
    s1.age = 5;
    s1.grade = "8.94";

    // displaying values
    cout << "Name: " << s1.name << endl;
    cout << "Roll No: " << s1.rollno << endl;
    cout << "Age: " << s1.age << endl;
    cout << "Grade: " << s1.grade << endl;

    return 0;
}