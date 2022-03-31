colors = {'red', 'green', 'yellow'}
print(colors)
print(type(colors))


print(len(colors))


languages = set(("English", "Russian", "Spanish"))
print(languages)


languages = set(("English", "Russian", "Spanish", "Russian"))
print(languages)


colors = {'red', 'green', 'yellow'}
colors.add('pink')
print(colors)


colors.remove('green')
print(colors)


colors = {'red', 'green', 'yellow'}
colors.discard('red')
print(colors)
colors.clear()
print(colors)
del colors
print(colors)



colors = {'red', 'green', 'yellow'}
colors2 = {'blue', 'lightblue'}
colors.update(colors2)
print(colors)


colors = {'red', 'green', 'yellow'}
colors2 = ['blue', 'lightblue']
colors.update(colors2)
print(colors)


colors = {'red', 'green', 'yellow'}
print("orange" in colors)
print("red" in colors)