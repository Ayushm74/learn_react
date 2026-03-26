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
Class SportsCar : public Car{
    public:
    string brand;
    string model;
    bool isEnginerOn;
    int currSpeed;
    int currGear;

    SportsCar(string b,String m){
        this->brand = b;
        this->model = m;
        isEngineOn = false;
        currSpeed= 0;
        currGear = 0;
    }

    void startEngine(){

    }
    void shiftGear(){

    }
    void accelerate(){

    }
    void breakk(){

    }
    void stopEngine(){

    }


};

int main(){
    Car* mycar = new SportsCar(ford, Mustang);
    myCar->startEngine();
    myCar->shiftGear(1);
    myCar->acelerate();

}
  