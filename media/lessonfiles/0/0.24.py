# shopping_cart = ['salmon', 'milk', 'cereals', 'bananas', 'chocobar']
# for item in shopping_cart:
#     if len(item) < 5:
#         print('Our item is', item)
#         break
#     else:
#         print(item, 'is not our item')



# i = 0
# numbers = []
# while True:
#     i += 1
#     if i % 2 == 0 and i % 3 == 0 and i % 4 == 0 and i % 5 == 0:
#         numbers.append(i)
#         if len(numbers) == 3:
#             break
# print(numbers)



# shopping_cart = ['salmon', 'milk', 'cereals', 'bananas', 'chocobar']
# for item in shopping_cart:
#     for letter in item:
#         if letter == 'l':
#             print(item, 'has l letter')
#             break


# bingo = [1, 3, 6, 27, 84, 89]
# no_bingo_balls = 0
# bingo_balls = 0
# for number in range(1, 91):
#     if number not in bingo:
#         no_bingo_balls += 1
#         continue
#     bingo_balls += 1
# print((bingo_balls, no_bingo_balls))



# number = 0
# odd_numbers = []
# while number < 11:
#     number += 1
#     if number % 2 == 0:
#         continue
#     odd_numbers.append(number)
# print(odd_numbers)



# number = 0
# for i in [0, 1, 2, 3, 4]:
#     number += 5
# print(number)


# number = 0
# for i in [0, 1, 2, 3, 4]:
#     number += 5
# else:
#     print(number)


# ban_list = ['Georgii', 'Igor']
# user = 'Georgii'
# for banned_user in ban_list:
#     if user == banned_user:
#         print(user + ':', 'Access denied')
#         break
# else:
#     print(user + ':', 'Welcome')