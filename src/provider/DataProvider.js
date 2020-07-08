import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

import api from '../utils/api'
const apiUrl = 'http://backendieee.herokuapp.com';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: async (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      /* const query = {
          sort: JSON.stringify([field, order]),
          range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
          filter: JSON.stringify(params.filter),
      }; */
      //const url = `${apiUrl}/${resource}?${stringify(query)}`;
      const url =  `${apiUrl}/${resource}`
      const response = await api.get(url)

      const data2 = response.data.map((element, index) => {
        return {
          id: element._id,
          ...element
        }
      })
      console.log(data2)
      const data = {
        data: data2,
        total: response.data.length
      }
      console.log(data)
      return data
    },

    getOne: async (resource, params, ...foda) =>{
      console.log(resource, params, foda)
      const response = await api.get(`${resource}/${params.id}`)

      const json = {
        id: response.data._id,
        ...response.data
      }

      return { data: json }
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: async (resource, params) => {
      const date = params.data.date
      const [year, month, day, hour, minute] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()]
      const resolveDates = (date) => {
        return date < 10 ? ('0' + date) : date
      }
      const dateString = year + '-' + resolveDates(month) + '-' + resolveDates(day) + 'T' + resolveDates(hour) + ':' + resolveDates(minute) + ':00'

      console.log(dateString)
      const json = {
        description: params.data.description,
        date: dateString,
        chapter: params.data.chapter
      }

      const response = await api.post(resource, json)
      if(response.data) {
        return { data: response.data }
      }
    },

    delete: async (resource, params) => {
      console.log(params.id)

      const response = await api.delete(`${resource}/${params.id}`)

      return { data: response.data }
    },

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    }
};