import sys
import random
from enum import Enum


def rps(name="ReadyPlayerOne"):
    player = 0
    computer = 0
    draw = 0
    numbers_played = 0

    def play_rps():
        class RPS(Enum):
            Rock = 1
            Paper = 2
            Scissors = 3

        print("\nPlease enter a number:")

        number = input("\n numbers: \n1. Rock \n2. Paper \n3. Scissors \n\n")
        number = int(number)

        # Recall def if wrong number
        if number < 1 and number > 3:
            print("\n Wrong number")
            return play_rps()

        guess = random.choice("123")
        guess = int(guess)

        print(f"\n You chose {str(RPS(number)).replace('RPS.', '').title()}!")
        print(f"\n I guessed {str(RPS(guess)).replace('RPS.', '').title()}!")

        def find_winner(number, guess):
            nonlocal player
            nonlocal computer
            nonlocal draw
            if number == guess:
                draw += 1
                return "\n Draw!"
            elif (
                (number == 1 and guess == 3)
                or (number == 2 and guess == 1)
                or (number == 3 and guess == 2)
            ):
                player += 1
                return "\n You win!"

            else:
                computer += 1
                return "\n I win!"

        print(find_winner(number, guess))

        nonlocal numbers_played
        numbers_played += 1

        print(f"\n Games played: {numbers_played}")
        print(f"\n Your wins: {player}")
        print(f"\n My wins: {computer}")
        print(f"\n Draws: {draw}")

        print("\n Do you want to play again?")

        def exit_loop():
            ans = input("\n Y for yes,\n N for no and to quit?\n")
            if ans.lower() == "y":
                rps()
            elif ans.lower() == "n":
                if __name__ == "__main__":
                    sys.exit(f"Bye {name}! 👋")
                else:
                    return
            else:
                print("\n Wrong input enter again!")
                exit_loop()

        exit_loop()

    return play_rps


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Provide personalized experience.")

    parser.add_argument(
        "-n",
        "--name",
        metavar="name",
        required=True,
        help="The name of the person playing the game.",
    )

    args = parser.parse_args()

    my_rps = rps(args.name)
    my_rps()
