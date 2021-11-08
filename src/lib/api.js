import axios from 'axios'

const baseURL = '/api'

export function getAllPatterns() {
  return axios.get(`${baseURL}/patterns`)
}

export function getSinglePattern(patternID) {
  return axios.get(`${baseURL}/patterns/${patternID}`)
}

export function createPattern(formdata) {
  return axios.post(`${baseURL}/patterns`, formdata)
}

export function addComment(patternID, formdata) {
  return axios.post(`${baseURL}/patterns/${patternID}/comments`, formdata)
}

