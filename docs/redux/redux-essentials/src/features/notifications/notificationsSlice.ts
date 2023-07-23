import { createSlice, createEntityAdapter, createSelector, createAction, isAnyOf } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'
import { forceGenerateNotifications } from '@/api/server'
import { apiSlice } from '@/api/apiSlice'

export interface NotificationState {
  id: string,
  date: string,
  read: boolean,
  isNew: boolean,
  user: string,
  message: string,
}


const notificationsReceived = createAction(
  'notifications/notificationsReceived'
)

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotifications: builder.query<NotificationState[], void>({
      query: () => '/notifications',
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        const ws = new WebSocket('ws://localhost')
        try {
          await cacheDataLoaded

          const listener = event => {
            const message = JSON.parse(event.data)
            switch (message.type) {
              case 'notifications': {
                updateCachedData(draft => {
                  draft.push(...message.payload)
                  draft.sort((a, b) => b.date.localeCompare(a.date))
                })
                dispatch(notificationsReceived(message.payload))
                break
              }
              default:
                break
            }
          }

          ws.addEventListener('message', listener)
        } catch (err) {
          console.log('error', err)
        }
        await cacheEntryRemoved
        ws.close()
      }
    })
  })
})

export const { useGetNotificationsQuery } = extendedApi

const emptyNotifications = []

export const selectNotificationsResult =
  extendedApi.endpoints.getNotifications.select()

const selectNotificationsData = createSelector(
  selectNotificationsResult,
  notificationsResult => notificationsResult.data ?? emptyNotifications
)

export const fetchNotificationsWebsocket = () => (dispatch, getState) => {
  const allNotifications = selectNotificationsData(getState())
  const [latestNotification] = allNotifications
  const latestTimestamp = latestNotification?.date ?? ''
  forceGenerateNotifications(latestTimestamp)
}

const notificationsAdapter = createEntityAdapter<NotificationState>()

const matchNotificationsReceived = isAnyOf(
  notificationsReceived,
  extendedApi.endpoints.getNotifications.matchFulfilled
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state) {
      Object.values(state.entities).forEach(notification => {
        if (!notification) return
        notification.read = true
      })
    },
  },
  extraReducers(builder) {
    builder.addMatcher(matchNotificationsReceived, (state, action) => {

      const notificationsMetadata = action?.payload?.map(notification => ({
        id: notification.id,
        read: false,
        isNew: true
      })) as NotificationState[]

      Object.values(state.entities).forEach(notification => {
        if (!notification) return
        notification.isNew = !notification.read
      })

      notificationsAdapter.upsertMany(state, notificationsMetadata)
    })
  }
})


export const { allNotificationsRead } = notificationsSlice.actions

export default notificationsSlice.reducer

export const {
  selectAll: selectNotificationsMetadata,
  selectEntities: selectMetadataEntities
} =
  notificationsAdapter.getSelectors<RootState>((state) => state.notifications)