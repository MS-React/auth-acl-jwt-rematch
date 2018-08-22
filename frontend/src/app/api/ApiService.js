import axios from 'axios';
import settings from '../../config/settings';

class ApiService {
  http = axios.create({
    baseURL: settings.SERVICE.BASE_URL,
  });

  create = async (options) => {
    const { entity, data } = options;
    return this.http.post(`/${entity}`, { data }).then(response => response.data);
  }

  update = async (options) => {
    const { entity, id, data } = options;
    return this.http.put(`/${entity}`, { params: { id }, data }).then(response => response.data);
  }

  read = async (options) => {
    const { entity, id } = options;
    return this.http.get(`/${entity}`, { params: { id } }).then(response => response.data);
  }

  delete = async (options) => {
    const { entity, id } = options;
    return this.http.delete(`/${entity}`, { params: { id } }).then(response => response.data);
  }
}

export const apiService = new ApiService();
