import random
name = 'Mr. Father'
address = '354 Ocean Ave Brooklyn, NY 91201'

children_and_friends = ['child-1', 'child-2', 'friend-1', 'friend-2']

print(
    f'Name: {name} \nAddress: {address} \n Children & Friends:{children_and_friends}')

print(name[0::3])

print(children_and_friends[-2][2:-1])

x = 1
y = 1
table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for x in table:

    for y in table:
        print(y * x, end=" ")
        if (y * x) < 10:
            print(end=" ")
    print()


the_num = random.randint(1, 100)
val = -1

while val != the_num:
    try:
        val = int(input('Guess your number(1 - 100): '))
        if the_num > val:
            print('Too Low!')
        elif the_num < val:
            print('Too High!')
        else:
            print('You Win!!')
    except:
        print('Input Not Allowed')
