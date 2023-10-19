from functools import reduce

squared = lambda num: num * num

addTwo = lambda num: num + 2
divideBy3 = lambda num: num / 3


names = ["John", "Doe", "Lambda"]

char_count = reduce(lambda acc, curr: acc + len(curr), names, 0)

print(char_count)


print(addTwo(40))
