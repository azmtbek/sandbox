from cs50 import get_int


def main():
    height = get_height()
    mario(height)
    mario_line(height)


def mario(n):
    for i in range(n):
        print("#")


def mario_line(n):
    for i in range(n):
        print("?", end="")
    print()


def get_height():
    while True:
        try:
            n = int(input("Height: "))
            if n > 0:
                return n
        except ValueError:
            print("Not an integer")


"""
def get_height():
    while True:
        n = get_int("Height: ")
        if n > 0:
            return n
"""


main()

"""
while True:
    n = get_int("Height: ")
    if n > 0:
        break

for i in range(n):
    print("#")
"""
