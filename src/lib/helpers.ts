import { Settings } from "../client/nosto"

export function isNostoLoaded() {
  return typeof window.nosto !== "undefined"
}

export function reloadNostoWindow(settings: Partial<Settings>) {
  if (window.nosto) {
    window.nosto.reload(settings)
  }
}

export function getNostoWindow() {
  return window.nosto
}