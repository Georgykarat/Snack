# def sum(a, b):
#     sum = a + b
#     return sum

# # print(sum(2, b = 3))

# print(sum(b = 2, a = 3))



# def sum(a, b, c=0):
#     sum = a + b + c
#     return sum

# print(sum(1, 2))
# print(sum(1, 2, 3))




# def sum(a, c=0, b):
#     sum = a + b + c
#     return sum

# print(sum(1, 2))
# print(sum(1, 2, 3))




# def sum(a, b, c=0, *, d):
#     sum = a + b + c + d
#     return sum

# print(sum(1, 2, d=2))
# print(sum(1, 2, 3, d=4))
# print(sum(1, 2, 3, 4))



# def sum(a, b, c=0, *, d):
#     sum = a + b + c + d
#     return sum

# print(sum(1, 2))



# def sum(a, b, c=0, *, d, *args, **kwargs):
#     sum = a + b + c + d
#     return sum

# print(sum(1, 2, d=7, args=2, kwargs=3))




# def sum(a, b, c=0, *args1, d=4, *args2):
#     sum = a + b + c + d
#     return sum

# print(sum(1, 2, d=7, args=2, kwargs=3))



# def sum(a, b, c, d, e, f=0, g=0, *args):
#     sum = a + b + c + d + e + f + g
#     for n in args:
#         sum += n
#     return sum

# *a, = 1, 3, 5, 7
# *b, = 0, 1, 0, 2
# print(sum(1, 2, *a, *b))



# def sum(a, b, c=0, *args, **kwargs):
#     sum = a + b + c
#     for n in args:
#         sum += n
#     for _, n in kwargs.items():
#         sum += n
#     return sum

# print(sum(1, 2, 6, 7, 4, 2, z=3, y=4, x=7))