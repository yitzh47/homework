from random import randint


def get_random_numbers(how_many, min, max):
    # numbers = []
    # for i in range(how_many):
    #    numbers.append(randint(min, max))
    # return numbers
    return [randint(min, max) for i in range(how_many)]


def selection_sort(list):
    first_unsorted = 0

    while first_unsorted < len(list) - 1:
        min_index = first_unsorted
        for i in range(min_index + 1, len(list)):
            if list[i] < list[min_index]:
                min_index = i


                
        temp = list[first_unsorted]
        list[first_unsorted] = list[min_index]
        list[min_index] = temp        
        

        #list[first_unsorted], list[min_index] = list[min_index], list[first_unsorted]

        first_unsorted += 1


some_numbers = get_random_numbers(10, 25, 50)
print(some_numbers)

selection_sort(some_numbers)

print(some_numbers)
