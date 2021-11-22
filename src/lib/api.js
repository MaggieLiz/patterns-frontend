import axios from 'axios'
import { getToken } from './auth'

const baseURL = '/api'

// * Pattern Requests

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

// * Auth Requests

export function getHeaders() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function registerUser(formdata) {
  return axios.post(`${baseURL}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseURL}/login`, formdata)
}

export function getProfile() {
  return axios.get(`${baseURL}/profile`, getHeaders())
}