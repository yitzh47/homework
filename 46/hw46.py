class die():

    def __init__(self, sides=6):
        self.sides = sides

    def roll(self):
        import random
        result = random.randint(1, self.sides)
        return result


x = die(12)
print(f'The die rolled a {x.roll()}.')
x = die()
print(f'The 2nd die rolled a {x.roll()}.')

 
class SixSidedDie(die):

    def __init__(self):
        super().__init__(6)
   


x = SixSidedDie()
print(f'The die rolled a {x.roll()}.')

the_list = [5, 8, 7, 3, 9, 0, 4, 2, 1]
print(the_list)

sort = len(the_list) - 1
for i in range(sort):
    for x in range(0, sort - i):
        if the_list[x] > the_list[x+1]:
            the_list[x], the_list[x+1] = the_list[x+1], the_list[x]

print(the_list)
