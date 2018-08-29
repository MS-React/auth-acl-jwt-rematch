import axios from 'axios';
import settings from '../../config/settings';

class ApiService {
  http = axios;

  request = async (options = { method: null, url: null, params: {}, data: {} }) => { // eslint-disable-line
    const { method, url, params, data } = options; // eslint-disable-line

    if (!/^(GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD)$/i.test(method)) throw new Error('method is missing on request');
    if (!url) throw new Error('url is missing on request');

    return this.http({
      method: method.toLowerCase(),
      baseURL: settings.SERVICE.BASE_URL,
      url,
      params,
      data,
      headers: {
        Accept: 'application/json',
      },
    }).then(response => response.data);
  };

  create = async (options) => {
    const { entity, data } = options;
    return this.request({ method: 'POST', url: `/${entity}`, data });
  };

  update = async (options = {}) => {
    const { entity, _id, data } = options;
    if (!this.isEntityValid(entity)) throw new Error(`invalid entity "${entity}"`);
    return this.request({ method: 'PUT', url: `/${entity}/${_id}`, data });
  };

  deleteOne = async (options = {}) => {
    const { entity, _id } = options;
    if (!this.isEntityValid(entity)) throw new Error(`invalid entity "${entity}"`);
    return this.request({ method: 'DELETE', url: `/${entity}/${_id}` });
  };

  login = async (options) => {
    const { data } = options;
    return this.request({ method: 'POST', url: `/auth/login`, data });
  }

  getUsers = async (options) => {
    const { params } = options;
    return this.request({ method: 'GET', url: `/users`, params });
  }
}

export const apiService = new ApiService();
