# def sqrt4(number):
#     for i in range(4):
#         number **= 2
#     return number



# x = sqrt4(2)
# print(x)


# def sqrt4(number):
#     for i in range(4):
#         number **= 2
#     return number, i


# x = sqrt4(2)
# print(x)
# print(x[0])
# print(x[1])


# def get_price(good):
#     goods = {
#         'ham': 3.50,
#         'milk': 1.35,
#         'salmon': 5.50,
#         'eggs': 1.05,
#         'apple': 0.30,
#         'pear': 0.45
#     }
#     if good in goods:
#         return float(goods[good])
#     else:
#         print(good, 'not found')
#         # return None

# shopping_cart = ['ham', 'milk', 'pear', 'coconut']
# sum = 0
# for item in shopping_cart:
#     price = get_price(item)
#     if price:
#         sum += price
#     else:
#         continue
# print('Sum:', sum, 'coins')




# shopping_cart = ['salmon', 'milk', 'cereals', 'bananas', 'chocobar']
# for item in shopping_cart:
#     for letter in item:
#         if letter == 'l':
#             print(item, 'has l letter')
#             break



# def check_letter(shopping_cart, letter):
#     for item in shopping_cart:
#         for letter_in_item in item:
#             if letter_in_item == letter:
#                 print(item, 'has', letter, 'letter')
#                 return None


# shopping_cart = ['salmon', 'milk', 'cereals', 'bananas', 'chocobar']
# check_letter(shopping_cart, 'l')
