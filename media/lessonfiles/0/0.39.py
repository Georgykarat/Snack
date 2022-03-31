# a = ['Hi', 'Nick']
# b = ['Hi', 'Nick']
# print(a == b)
# print(a is b)
# print(id(a))
# print(id(b))
# print(id(a) == id(b))


# a = '70730571035709130591305135'
# b = '70730571035709130591305135'
# print(a == b)
# print(a is b)
# print(id(a))
# print(id(b))
# print(id(a) == id(b))

# a = 30
# print(id(a))
# a = 31
# print(id(a))

# a = 30
# b = a
# print(id(a) == id(b))
# a = 31
# print(id(a) == id(b), b)

# b = a = 30
# print(id(a) == id(b))
# a = 31
# print(id(a) == id(b), b)

# b = a = ['apple', 'pear', 'grape']
# print(id(a) == id(b))
# print(id(a))
# print(id(b))
# a.append('pineapple')
# print(a, b)


b = a = ['apple', 'pear', 'grape']
print(id(a))
a.append('pineapple')
print(id(b))
print(a, b)