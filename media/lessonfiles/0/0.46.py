# def check_zoo(zoo_name, **kwargs):
#     zoo = {}
#     for pet, amount in kwargs.items():
#         zoo[pet] = amount
#     print('In zoo:', zoo_name,
#           'we have the following animals:', zoo)
#     print(kwargs)

# check_zoo('Central', cow=20, pig=24, owl=2, pinguins=4)


# def check_zoo(zoo_name, **animals):
#     zoo = {}
#     for pet, amount in animals.items():
#         zoo[pet] = amount
#     print('In zoo:', zoo_name,
#           'we have the following animals:', zoo)
#     print(animals)

# check_zoo('Central', cow=20, pig=24, owl=2, pinguins=4)


# def check_zoo(zoo_name, *args, **kwargs):
#     donates = 0
#     zoo = {}
#     for sum in args:
#         donates += sum
#     for pet, amount in kwargs.items():
#         zoo[pet] = amount
#     print('In zoo:', zoo_name,
#            'we have the following animals:', zoo,
#            '\nThe zoo got', donates, 'euros via donation')
#     print(args)
#     print(kwargs)

# check_zoo('West', 14, 30, 24, 34, 56, 24, 12,
#           cow=20, pig=24, owl=2, pinguins=4)