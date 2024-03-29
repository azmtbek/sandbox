class Vehicle:
    def __init__(self, make, model) -> None:
        self.make = make
        self.model = model

    def move(self):
        print(f"{self.make} {self.model} moves along...")

    def get_make_model(self):
        print(f"I'm a {self.make} {self.model}")


my_car = Vehicle("Tesla", "Model 3")

your_car = Vehicle("Ford", "Mustang")


class Airplane(Vehicle):
    def __init__(self, make, model, faa_id) -> None:
        super().__init__(make, model)
        self.faa_id = faa_id

    def move(self):
        print("Flies along...")


class Truck(Vehicle):
    def move(self):
        print("Rumbles along...")


class GolfCart(Vehicle):
    pass


cessna = Airplane("Cessna", "Skyhawk", "M-1235")
mack = Truck("Mack", "Pinnacle")
golfwagon = GolfCart("Yamaha", "GCTS")


print("\n\n")


for v in (my_car, your_car, cessna, mack, golfwagon):
    v.get_make_model()
    v.move()
