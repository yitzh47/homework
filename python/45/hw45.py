def months_and_days():
    months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December']

    days_of_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    x = 0
    while x < len(months):
        print(f'{months[x]} => {days_of_months[x]}')
        x += 1


months_and_days()
print('-')


def months_and_days_tuple():
    months = 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'

    days_of_months = 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

    x = 0
    while x < len(months):
        print(f'{months[x]} => {days_of_months[x]}')
        x += 1


months_and_days_tuple()
print('-')


def months_and_days_dictionary():
    months = {
        "Jan": 31,
        "Feb": 28,
        "Mar": 31
    }

    for month, day in months.items():
        print(f'{month} => {day}')


months_and_days_dictionary()
print('-')


def months_and_days_input(month_inputted):
    months = {
        "Jan": 31,
        "Feb": 28,
        "Mar": 31
    }

    print(months.get(month_inputted, 'month does not exist'))


months_and_days_input('apr')
months_and_days_input('mar')
months_and_days_input('Mar')
