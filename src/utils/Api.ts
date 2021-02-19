/* eslint-disable no-underscore-dangle */
import axios from 'axios';

export default function Api() {
  let api;
  const {browser:isBrowser} = process as any;
  if (isBrowser) {
    api = axios.create({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? process.env.api
          : process.env.apiProduction,
    });
  } else {
    api = axios.create({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? process.env.apiServer
          : process.env.apiServerProduction,
    });
  }
  return api;
}
