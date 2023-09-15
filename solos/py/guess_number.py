
import random
import sys


def guess_number(name='ReadyPlayerOne'):
	game_played =0
	player_wins=0

	def play_guess_number():
		# nonlocal player_wins

		player_choice= input( f"\n{name}, guess my number in range 1 to 3.\n\n")

		if player_choice not in ['1','2','3']:
			print(f'\n{name}, please enter 1, 2, or 3.')
			return play_guess_number()
		
		computer_choice = random.choice('123')

		print(f'\n{name}, you chose {player_choice}.')
		print(f'\n I was thinking about {computer_choice}.\n')

		player=int(player_choice)
		computer = int(computer_choice)

		def decide_winner(player,computer):
			nonlocal player_wins
			if computer==player:
				player_wins+=1
				return f'\n You win! 🎉 '
			else:
				return f'\nSorry, {name}. Good luck next time.😢'
		

		print(decide_winner(player,computer))

		nonlocal game_played
		game_played+=1


		print(f'\nGames played: {game_played}')
		print(f'\n{name}\'s wins: {player_wins}')
		print(f'\nYour winning percentage: {player_wins/game_played:.2%}')

		print(f'\nPlay again, {name}?')

		while True:
			play_again = input('\nY for Yes,\nN for No\n')
			if play_again.lower() not in ['y','n']:
				continue
			else:
				break
		
		if play_again.lower() =='y':
			return play_guess_number()
		else:
			print('Thank you for playing!')
			if __name__=='__main__':
				sys.exit(f'\nSee you {name}! 👋')
			else:
				return
	
	return play_guess_number


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

	guess_my_namber = guess_number(args.name)
	guess_my_namber()