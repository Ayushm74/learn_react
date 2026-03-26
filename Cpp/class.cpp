#include<iostream>
#include<string>

class Car{
public:
    virtual void start();
    virtual void accelerate();
    virtual void shiftgear();
    virtual void breakk();
    virtual void stop();
    virtual ~Car() {}
};
int main(){
    Car* mycar = new SportsCar(ford, Mustang);
}
