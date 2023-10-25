import csv


with open("phonebook.csv", "a") as file:
    name = input("Name: ")
    number = input("Number: ")

    writer = csv.DictWriter(file, fieldnames=["name", "number"])
    writer.writerow({"name": name, "number": number})

    """
    writer = csv.writer(file)
    writer.writerow([name, number])

    """

"""
file = open("phonebook.csv", "a")

name = input("Name: ")
number = input("Number: ")

writer = csv.writer(file)
writer.writerow([name, number])

file.close()


"""


"""

people = {"David": "+1-0032-0023-0023", "Carter": "+1-322-4123-2333"}

name = input("Name: ")
if name in people:
    number = people[name]
    print(f"Number: {number}")
 
"""
