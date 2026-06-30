import { type SimpleIcon } from 'simple-icons'

export type anime = {
  name: string,
  sometext: string,
  rating: number,
}

export type game = {
  name: string,
  sometext: string,
  img: string,
  url: string
}

export type skill = {
  name: string,
  icon: SimpleIcon
}

export type socials = {
  name: string,
  link: string,
  icon: SimpleIcon,
}

export type project = {
  name: string,
  description: string,
  link: string,
  video?: string,
  image?: string
  stack: SimpleIcon[],
  stackStrings?: string[],
}

export type blog = {
  title: string,
  description: string,
  link: string
}