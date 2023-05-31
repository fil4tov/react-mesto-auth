import {AUTH_BASE_URL} from "../utils/consts";
import {getJWT} from "../utils/helpers";

export class AuthService {
  static #BASE_URL = AUTH_BASE_URL

  static async #fetchWithBody(path, method, data) {
    const res = await fetch(`${this.#BASE_URL}/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return this.#checkResponse(res)
  }

  static async #fetch(path, method) {
    const res = await fetch(`${this.#BASE_URL}/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${getJWT()}`
      }
    })
    return this.#checkResponse(res)
  }

  static #checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`)
  }

  static async login({email, password}) {
    return await this.#fetchWithBody('signin', 'POST', {email, password})
  }
  static async register({email, password}) {
    return await this.#fetchWithBody('signup', 'POST', {email, password})
  }
  static async checkAuth() {
    return await this.#fetch('users/me', 'GET')
  }
}