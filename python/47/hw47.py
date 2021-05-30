class vehicle():

    verb = 'going'
    speed = 0

    def __init__(self, color=str):

        self.color = color

    def go(self, speed=int):

        self.speed = speed
        print(f'Now {self.verb} at speed {self.speed}')

    def print(self):
        print(
            f'Vehicles color is: \'{self.color}\'; Vehicles speed is: \'{self.speed}\'')


class plane(vehicle):
    verb = 'flying'

    def go(self, speed=int):
        super().go(speed)


v = vehicle('red')
v.go(75)
v.print()

print('--')

p = plane('blue')
p.go(450)
p.print()


class FizzBuzz():
    for i in range(1, 100):
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        elif i % 3 == 0:
            print('Fizz')
        elif i % 5 == 0:
            print('Buzz')
        else:
            print(i)
