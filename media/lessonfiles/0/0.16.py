ip = ('20.10.106.2', '2060')
print(type(ip))


coords = ('24',) # Tuple
print(type(coords))
coords = ('24') # String
print(type(coords))


coords = ('24', '-25')
print(coords[0])
coords = (24, -25)
print(coords[1])


telephones = tuple(('+7-100-200-00-00','+7-100-300-00-00'))
print(telephones)


telephones = tuple(('+7-100-200-00-00','+7-100-300-00-00'))
telephones = list(telephones)
del telephones[0]
telephones = tuple(telephones)
print(telephones)


zoo1 = ('elephant', 'snake')
zoo2 = ('chiken', 'pig')
zoo = zoo1 + zoo2
print(zoo)


zoo1 = ('elephant', 'snake')
print(zoo1 * 2)


bingo = ('22', '22', '1', '21', '23', '88', '23', '22','45')
print(bingo.count('22'))


print(bingo.index('23'))

