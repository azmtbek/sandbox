# TODO rewrite the code
# import math
import sys
import random
from enum import Enum

player=0
computer=0
draw=0

def rps():
	global player
	global computer
	global draw

	class RPS(Enum):
		Rock =1
		PendingDeprecationWarningaper=2
		Scissors=3

	print('\nPlease enter a number:')

	number = input('\n numbers: \n1. Rock \n2. Paper \n3. Scissors \n\n')
	number=int(number)

	#Recall def if wrong number
	if number<1 and number>3:
		print('\n Wrong number')
		# guess_number()
	
	guess = random.choice('123')
	guess=int(guess)

	print(f'\n I guessed {guess} {RPS(guess)}!')

	if (number==1 and guess==3) or (number==2 and guess==1) or (number==3 and guess==2):
		print('\n You win!')
		player+=1
	elif number==guess:
		print('\n Draw!')
		draw+=1
	else:
		print('\n I win!')
		computer+=1

	

	print(f'\n Your wins: {player}')
	print(f'\n My wins: {computer}')
	print(f'\n Draws: {draw}')


	print('\n Do you want to play again?')
	def exit_loop():
		ans = input('\n Y for yes,\n N for no and to quit?\n')
		if ans.lower()=='y':
			rps()
		elif ans.lower()=='n':
			sys.exit()
		else:
			print('\n Wrong input enter again!')
			exit_loop()
	
	exit_loop()






if __name__ == '__main__':
	import argparse

	parser = argparse.ArgumentParser(
		description='Provide personalized experience.'
	)

	parser.add_argument(
		'-n','--name',metavar='name',
		required=True, help='The name of the person playing the game.'
	)

	args =parser.parse_args()

	my_rps = rps(args.name)
	my_rps()