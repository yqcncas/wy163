import ajax from './ajax'

const Base = '/api'

export const reqHome = () => ajax.get('/home')

export const reqCart = () => ajax.get('/cart')

export const reqSearchList = () => ajax.get(Base + '/xhr/search/init.json')

export const reqSearchKey = (searchkey) => ajax.get(Base+'/xhr/search/searchAutoComplete.json?keywordPrefix='+ searchkey)