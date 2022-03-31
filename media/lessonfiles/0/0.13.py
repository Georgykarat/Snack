bingo = [11, 23, 88, 34, 24, 90, 1]
print(bingo[1:4:1])
print(bingo[1:4])


print(bingo[::1])
print(bingo[::2])
print(bingo[::-1])

print(bingo[-2:-5:-2])


cart = ['fish', 'milk', 'nuts', 'pears', 'beef']
cart[0] = 'salmon'
print(cart)
cart[0:1] = ['salmon', 'octopus']
print(cart)


cart = ['fish', 'pears', 'beef']
cart.insert(1, 'pork')
print(cart)

cart = ['fish', 'pears', 'beef']
cart.pop(0)
print(cart)
cart = ['fish', 'pears', 'beef']
cart.pop()
print(cart)


cart = ['fish', 'pears', 'beef']
del cart[0]
print(cart)

