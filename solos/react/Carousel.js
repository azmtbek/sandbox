import React from 'react'
import { useWindowWidth } from '../hooks/useWindowDimentions'

const itemsSmall = [
  {
    id: 0,
    imgScr: 'carusel.png',
  },
  {
    id: 1,
    imgScr: 'woman-3.png',
  }
]
const itemsBig = [
  {
    id: 0,
    imgScr: 'carousel1.jpeg',
  },
]


const reducerCarusel = (state, action) => {
  switch (action.type) {
    case 'SWITCH_ITEMS':
      return {
        ...state,
        currentId:0,
        items: action.payload.items,
        windowType: action.payload.windowType
      }
    case 'PREV':
      return {
        ...state,
        currentId: (state.items.length + state.currentId - 1) % state.items.length
      }
    case 'NEXT':
      return {
        ...state,
        currentId: (state.currentId + 1) % state.items.length
      }
    default:
      return state;
  }
}

const Item = ({ src, variant }) =>
  <div className={`item w-full flex-none transition-opacity 
  duration-700 ease-in absolute inset-0
    flex justify-center h-[calc(100vh-4rem)] ${variant}`}
  >
    <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + src} alt="carusel item" />
  </div>


export default function Carousel() {
  const width = useWindowWidth()
  const [state, dispatch] = React.useReducer(reducerCarusel,
    { currentId: 0, items: [], windowType: '' }
  )

  React.useEffect(() => {
    if (width > 670 && state.windowType !== 'md') {
      dispatch({
        type: 'SWITCH_ITEMS',
        payload: { items: itemsBig, windowType: 'md' }
      })
    } else if (width < 670 && state.windowType !== 'sm') {
      dispatch({
        type: 'SWITCH_ITEMS',
        payload: { items: itemsSmall, windowType: 'sm' }
      })
    }
  }, [width, state])
  return (
    <div className="flex relative justify-center ">
    <div className='relative w-full h-[calc(100vh-4rem)] flex'>
      {state.items.map(item =>
        <Item src={item.imgScr} key={item.id}
          variant={state.currentId === item.id ? '' : 'opacity-0 -z-10'}
        />
      )}
      </div>
      <div className='absolute bottom-8 px-5 py-2
        bg-secondary/80 rounded-full text-white 
        flex gap-5 font-sans font-thin'
      >
        <button onClick={() => { dispatch({ type: 'PREV' }) }}>
          <img className='h-4' src={process.env.PUBLIC_URL + "left_arrow.png"} alt="left" />
        </button>
        <span> <strong className='font-normal'>{state.currentId + 1}</strong> / {state.items.length}</span>
        <button onClick={() => { dispatch({ type: 'NEXT' }) }}>
          <img className='h-4' src={process.env.PUBLIC_URL + "right_arrow.png"} alt="right" />
        </button>

      </div>
    </div>
  )
}
