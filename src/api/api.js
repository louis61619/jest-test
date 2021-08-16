import axios from 'axios'

export function getLessonList() {
  return axios.get('http://www.dell-lee.com/react/api/list.json')
}
