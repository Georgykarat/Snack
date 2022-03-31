# def sum_a_and_b(a, b):
#     return a + b


# def calculate_score(name, *args):
#     sum = 0
#     for score in args:
#         sum += score
#     print(name + ':', sum)

# calculate_score('Ivan', 30, 34, 12, 32, 50)


# def calculate_score(name, *scores):
#     sum = 0
#     for score in scores:
#         sum += score
#     print(name + ':', sum)

# *scores, = 30, 34, 12, 32, 50
# calculate_score('Ivan', *scores)


# def calculate_score(*scores, name):
#     sum = 0
#     for score in scores:
#         sum += score
#     print(name + ':', sum)

# *scores, = 30, 34, 12, 32, 50
# calculate_score(*scores, name = 'Ivan')


# *a, = 1, 2, 3, 4
# b = [*a, 5, 6, 7]
# print(b)