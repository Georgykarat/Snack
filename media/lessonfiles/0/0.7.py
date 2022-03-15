a = 2 #integer
a = -2 #integer
b = 2.0 #float
b = -2.0 #float

print(type(a))
print(type(b))

c = a + b
print(c, type(c))

d = 4.0
print(int(d))
d = 4
print(float(d))

d = 4.6
print(int(d))

a = 2 + 3j
b = 4 * 1j
c = 2j + 3
print(type(a), type(b), type(c))

a = 3
print(complex(a))

a = True
b = False
print(type(a))

a = issubclass(bool, int)
print(a)

a = True + True
b = False + True
c = False + False
print(a, b, c)

print(bool(a), bool(b), bool(c))

z = None
print(type(z))

print(str(z))
print(bool(z))

del z
print(z)