import ky from 'ky'
import { FETCH_WEATER_URL } from 'src/constants'

const api = ky.create({
  prefixUrl: FETCH_WEATER_URL,
  retry: {
    limit: 1,
    methods: ['get'],
    statusCodes: [408, 500, 502, 503, 504, 522, 524],
  },
  cache: 'force-cache',
})

export default api
