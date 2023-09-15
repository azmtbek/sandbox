import sys
from guess_number import guess_number
from rps import rps

def play_game(name='ReadyPlayerOne'):
    welcome_back=False

    while True:
        if welcome_back==True:
            print(f'\n{name}, welcome back to the Arcade menu.')
        
        player_choice=input(
            '\nPlease choose a game: \n1. Rock Paper Scissors \n2. Guess my number\n\n Or press "x" to exit.'
        )

        welcome_back=True

        if player_choice not in ['1','2','x']:
            print(f'\n{name}, please enter 1, 2, or x.')
            return play_game(name)
        
        if player_choice == '1':
            play_rps=rps(name)
            play_rps() 
        elif player_choice=='2':
            play_gn=guess_number(name)
            play_gn()
        else:
            print('\n See you again!👋')
            sys.exit(f'\n Bye {name}!')

if __name__=='__main__':

    import argparse

	
    parser = argparse.ArgumentParser(
		description='Provides a personalized game experience.'
	)

    parser.add_argument(
		'-n','--name',metavar='name',
		required=True, help='The name of the person playing the game.'
	)

	
    args =parser.parse_args()

    print(f'\n{args.name}, welcome to the Arcade! 😎')
	
    play_game(args.name)
    
