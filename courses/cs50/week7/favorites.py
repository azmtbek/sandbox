import csv

with open("favorites.csv", "r") as file:
    reader = csv.DictReader(file)
    counts = {}
    for row in reader:
        favorite = row["problem"]
        if favorite not in counts:
            counts[favorite] = 0
        counts[favorite] += 1


favorite = input("Favorite: ")
if favorite in counts:
    print(f"{favorite}: {counts[favorite]}")


# for favorite in sorted(counts, key=lambda problem: counts[problem], reverse=True):
#     print(f"{favorite}: {counts[favorite]}")


"""
with open("favorites.csv", "r") as file:
    reader = csv.DictReader(file)
    counts = {}
    for row in reader:
        favorite = row["language"]
        if favorite not in counts:
            counts[favorite] = 0
        counts[favorite] += 1


for favorite in sorted(counts, key=lambda language: counts[language], reverse=True):
    print(f"{favorite}: {counts[favorite]}")



"""


"""
def get_value(language):
    return counts[language]


for favorite in sorted(counts, key=get_value, reverse=True):
    print(f"{favorite}: {counts[favorite]}")


"""


"""
with open("favorites.csv", "r") as file:
    # reader = csv.reader(file)
    reader = csv.DictReader(file)
    scratch, c, python = 0, 0, 0
    for row in reader:
        favorite = row["language"]
        if favorite == "Scratch":
            scratch += 1
        elif favorite == "C":
            c += 1
        elif favorite == "Python":
            python += 1

print(f"Scratch: {scratch}, C: {c}, Python: {python}")
            
"""
