from sys import argv

if len(argv) == 2:
    print(f"Hello, {argv[1]}")
else:
    print("Hello, World")

for i in range(len(argv)):
    print(argv[i])

for arg in argv[1:]:
    print(arg)
