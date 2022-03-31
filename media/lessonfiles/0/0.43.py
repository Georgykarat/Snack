# dictgenerator = {a: a*10 for a in (1, 2, 3, 4, 5)}
# print(dictgenerator)
# print(type(dictgenerator))

# dictgenerator = {key: value for key, value in enumerate(['apple', 'grape'])}
# print(dictgenerator)
# print(dictgenerator[1])

# keys = ['one', 'two', 'three', 'four', 'five']
# values = ['Audrey', 'Steve', 'John', 'Marta', 'Nick']
# dictgenerator = {key: value for key, value in zip(keys, values)}
# print(dictgenerator)
# print(dictgenerator['three'])

# keys = ['one', 'two', 'three', 'four']
# values = ['Audrey', 'Steve', 'John']
# dictgenerator = {key: value for key, value in zip(keys, values)}
# print(dictgenerator)
# print(dictgenerator['three'])


# phrase = 'Good afternoon, boys!'
# list_generator = {number + 1: letter for number, letter in enumerate(phrase) if letter == 'o'}
# print(list_generator)

# set_generator = {x - 1 for x in range(1, 10, 1)}
# print(set_generator)